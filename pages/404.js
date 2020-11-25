import { Flex, Heading } from "@chakra-ui/react";
import Layout from "../components/Layout";

export default function PageNotFound() {
  return (
    <Layout
      title="404" description="Upps page no found, go to home" >
      <Flex justifyContent="center" alignItems="center">
        <Heading size="lg" >404</Heading>
        <Heading size="md" >Upss page not found got to home and continue</Heading>
      </Flex>
    </Layout>
  );
}
