import { Image } from "@chakra-ui/react";
import styled from "@emotion/styled";

const CoverImage = styled(Image)`
  height: 100%;
`;

const CoverContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ bg }) => bg || "white"};
  max-height: 10rem;
  overflow: hidden;
  transition: all 0.3s ease;
  &:hover {
    background: ${({ bgHover }) => bgHover || "#eeeeee"};
  }
`;

export { CoverContainer, CoverImage };
