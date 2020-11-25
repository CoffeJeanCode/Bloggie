import { useState, useEffect } from "react";
import fs from "fs";
import matter from "gray-matter";
import { Container, Skeleton, Fade, Stack, StackItem } from "@chakra-ui/react";

import PostCard from "components/PostCard";
import Layout from "components/Layout";

export default function Home({ posts }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => timer && clearTimeout(timer);
  }, []);

  return (
    <Layout title="Home" description="A simple blog for developers">
      <Container maxW="sm">
        <Stack spacing={8}>
          {posts.map((props) => (
            <StackItem key={props.slug}>
              {loading ? (
                <Skeleton height="8rem" key={props.slug} />
              ) : (
                <Fade in={!loading}>
                  <PostCard {...props} />
                </Fade>
              )}
            </StackItem>
          ))}
        </Stack>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/content/posts`);

  const posts = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`content/posts/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    // Convert post date to format: Month day, Year
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = data.date.toLocaleDateString("en-US", options);

    const frontmatter = {
      ...data,
      date: formattedDate,
    };

    return {
      slug: filename.replace(".md", ""),
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
