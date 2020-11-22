import { Flex, Box, Text, useColorMode } from "@chakra-ui/react";
import { VscColorMode as ModeIcon } from "react-icons/vsc";

import { DarkModeButton, Title } from "./styles";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box minHeight="6rem">
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Title as="h1" mode={colorMode}>
          Bloggie JS
        </Title>
        <Text fontSize="xl">A Blog for JS Developers</Text>
      </Flex>
      <DarkModeButton icon={<ModeIcon />} onClick={() => toggleColorMode()} />
    </Box>
  );
}
