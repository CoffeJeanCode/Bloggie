import {
  Box,
  Heading,
  Text,
  Button,
  Tag,
  Skeleton,
  Fade,
  TagLabel,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { usePalette } from "react-palette";

import { CoverContainer, CoverImage } from "./styles";
export default function PostCard({
  frontmatter: { title, date, cover, tags },
  slug,
}) {
  const { push } = useRouter();
  const { data, loadColor, error } = usePalette(cover);

  return (
    <Box borderRadius="lg" borderWidth="1px" overflow="hidden">
      <CoverContainer bg={data.vibrant} bgHover={data.darkMuted}>
        {!loadColor && !error && <CoverImage src={cover} alt={title} />}
      </CoverContainer>
      <Box padding="1rem">
        <Heading size="lg">{title}</Heading>
        {tags.map((tag, i) => (
          <Tag size="sm" colorScheme="yellow" borderRadius="full" key={i}>
            <TagLabel>{tag}</TagLabel>
          </Tag>
        ))}
        <Text fontSize="md">{date}</Text>
        <Button
          colorScheme="red"
          onClick={() => push(`/post/${slug}`)}
          variant="outlined"
        >
          Go To Post
        </Button>
      </Box>
    </Box>
  );
}
