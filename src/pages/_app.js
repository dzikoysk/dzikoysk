import { ChakraProvider } from '@chakra-ui/react'

import '@fontsource/inter/400.css'

function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App;
