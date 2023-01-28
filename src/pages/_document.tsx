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
            content="Automação predial (BMS), Segurança eletrônica, Automação prisional, Tecnologia da informação TI, Elétrica, Serralheria e Mecatrônica. Integração total entre consultoria, projetos, execução e manutenção. Com grande foco em implantação e upgrade de tecnologias e Retrofit."
          />
          <meta name="author" content="Matheus Oliveira" />
          <link rel="icon" href="/favicon.jpg" />
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
