import { Flex, Box, Text } from "@chakra-ui/react";
import { VscColorMode as ModeIcon } from "react-icons/vsc";

import { DarkModeButton, Title } from "./styles";

export default function Navbar() {
  return (
    <Box minHeight="6rem">
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Title as="h1">Bloggie JS</Title>
        <Text fontSize="xl">A Blog for JS Developers</Text>
      </Flex>
      <DarkModeButton icon={<ModeIcon />} />
    </Box>
  );
}
