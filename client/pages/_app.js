import Nav from "../components/Navbar";
import { CSSReset, ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider resetCSS theme={theme}>
        <CSSReset />
        <Nav />
        <Component {...pageProps} />
      </ChakraProvider>
      <style jsx global>
        {`
          html,
          body {
            max-width: 100%;
            height: 100%;
          }
        `}
      </style>
    </>
  );
}

export function reportWebVitals(metric) {
  console.log(metric);
}

export default MyApp;
