import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import { ColorModeScript } from "@chakra-ui/react"

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="A Ingenium Tecnologia é o maior player de automação prisional do Brasil. Trabalhamos com automação e segurança eletrônica de alto requisito, desenvolvendo tecnologia, e integrando soluções dos principais fabricantes do mercado."
          />
          <meta name="author" content="Matheus Oliveira" />
          <link rel="icon" href="/favicon.jpeg" />
        </Head>
        <body>
          <ColorModeScript initialColorMode="light" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
