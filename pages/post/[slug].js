import fs from "fs";
import path from "path";
import matter from "gray-matter";

import ReactMarkdown from "react-markdown/with-html";
import Link from "next/link";
import { Container, Heading, Image, Fade } from "@chakra-ui/react";
import { RiArrowGoBackLine as BackIcon } from "react-icons/ri";
import styled from "@emotion/styled";

import Layout from "../../components/Layout";
import { usePalette } from "react-palette";

const CoverImage = styled(Image)`
  height: 100%;
`;

const CoverContainer = styled.div`
  background: ${({ bg }) => (bg ? bg : "red")};
  width: 100%;
  max-height: 12rem;
  margin: 1rem 0 2rem 0;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
export default function Post({ content, frontmatter }) {
  const { data: dataColor, loading } = usePalette(frontmatter.cover);
  return (
    <Layout title={frontmatter.title}>
      <Fade in={true}>
        <Container maxW="sm">
          <Link href="/">
            <a>
              <BackIcon /> Back
            </a>
          </Link>
          <article>
            <Heading size="md">{frontmatter.title}</Heading>
            <CoverContainer bg={dataColor.vibrant}>
              {!loading && (
                <CoverImage src={frontmatter.cover} alt={frontmatter.title} />
              )}
            </CoverContainer>
            <ReactMarkdown escapeHtml={false} source={content} />
          </article>
        </Container>
      </Fade>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync("content/posts");

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMetadata = fs
    .readFileSync(path.join("content/posts", `${slug}.md`))
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  // Convert post date to format: Month day, Year
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = data.date.toLocaleDateString("en-US", options);

  const frontmatter = {
    ...data,
    date: formattedDate,
  };

  return {
    props: {
      content,
      frontmatter,
    },
  };
}
