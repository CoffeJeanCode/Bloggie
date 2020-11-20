import Link from 'next/link'
import { Flex, Box } from '@chakra-ui/react'

export default function Navbar() {
  return (
    <Flex justifyContent="center">
      <Box flex="1" bg="blue" minH="2rem">
        <Flex justifyContent="center" alignItems="center">
          <Link href="/">Bloggie</Link>
        </Flex>
      </Box>
    </Flex>
  )
}
