import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "../styles/theme"
import { AppProps } from "next/app"
import { Footer } from "../layout/footer"
import { Menu } from "../layout/menu"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Menu />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}
