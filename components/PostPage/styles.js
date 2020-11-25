import { Image } from "@chakra-ui/react";
import styled from "@emotion/styled";

const CoverImage = styled(Image)`
  height: 100%;
`;

const CoverContainer = styled.div`
  background: ${({ bg }) => bg || "white"};
  width: 100%;
  max-height: 12rem;
  margin: 1rem 0 2rem 0;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
export { CoverContainer, CoverImage };
