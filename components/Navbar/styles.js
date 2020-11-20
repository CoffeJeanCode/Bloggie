import { Heading, IconButton } from "@chakra-ui/react";
import styled from "@emotion/styled";

const DarkModeButton = styled(IconButton)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
const Title = styled(Heading)`
  position: relative;
  &::after {
    content: " ";
    width: 100%;
    min-height: 1rem;
    border-radius: 1rem;
    background-color: yellow;
    position: absolute;
    bottom: -0.2rem;
    left: 0;
    right: 0;
    z-index: -1;
    padding: 0 1rem;
  }
`;

export { DarkModeButton, Title };
