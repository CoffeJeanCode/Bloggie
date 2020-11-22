import { Box, Heading, Text, Tag, TagLabel } from "@chakra-ui/react";
import Link from "next/link";
import { usePalette } from "react-palette";

import { CoverContainer, CoverImage, CardContainer } from "./styles";
export default function PostCard({
  frontmatter: { title, date, cover, tags },
  slug,
}) {
  const { data, error } = usePalette(cover);

  return (
    <CardContainer borderRadius="lg" borderWidth="1px" overflow="hidden">
      <Link href={`/post/${slug}`}>
        <a>
          <CoverContainer bg={data.vibrant} bgHover={data.darkMuted}>
            {!error && <CoverImage src={cover} alt={title} />}
          </CoverContainer>
          <Box padding="1rem">
            <Heading size="lg">{title}</Heading>
            {tags.map((tag, i) => (
              <Tag size="sm" colorScheme="yellow" borderRadius="full" key={i}>
                <TagLabel>{tag}</TagLabel>
              </Tag>
            ))}
            <Text fontSize="md">{date}</Text>
          </Box>
        </a>
      </Link>
    </CardContainer>
  );
}
