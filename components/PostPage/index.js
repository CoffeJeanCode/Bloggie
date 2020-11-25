import ReactMarkdown from "react-markdown/with-html";
import SyntaxHighlighter from "react-syntax-highlighter";
import { Container, Heading, Fade, useColorMode } from "@chakra-ui/react";
import { RiArrowGoBackLine as BackIcon } from "react-icons/ri";
import { usePalette } from "react-palette";
import Link from "next/link";

import Layout from "components/Layout";

import { codeDarkTheme as dark, codeLightTheme as light } from "styles/theme";

export default function Post({ content, frontmatter }) {
  const { colorMode } = useColorMode();
  const { data: dataColor, loading } = usePalette(frontmatter.cover);

  const renderers = {
    code: ({ language, value }) => {
      return (
        <SyntaxHighlighter
          showLineNumbers
          style={colorMode === "dark" ? light : dark}
          language={language}
          children={value}
        />
      );
    },
  };

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
            <ReactMarkdown escapeHtml source={content} renderers={renderers} />
          </article>
        </Container>
      </Fade>
    </Layout>
  );
}
