import Nav from '../components/Navbar'
import { CSSReset, ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <CSSReset />
      <Nav />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export function reportWebVitals(metric) {
  console.log(metric)
}

export default MyApp
