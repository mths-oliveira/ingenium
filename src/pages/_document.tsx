import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import { ColorModeScript } from "@chakra-ui/react"

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-BR">
        <Head
          title="Ingenium Tecnologia | Soluções de Automação Predial (BMS), Automação
            prisional e Segurança eletrônica no Brasil"
        >
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Ingenium Tecnologia | Soluções de Automação Predial (BMS), Automação prisional e Segurança eletrônica no Brasil"
          />
          <meta
            property="og:description"
            content="Automação predial (BMS), Segurança eletrônica, Automação prisional, Tecnologia da informação TI, Elétrica, Serralheria e Mecatrônica. Integração total entre consultoria, projetos, execução e manutenção. Com grande foco em implantação e upgrade de tecnologias e Retrofit."
          />
          <meta
            property="og:url"
            content="https://ingeniumtecnologia.com.br/"
          />
          <meta
            property="og:site_name"
            content="Ingenium Tecnologia | Soluções de Automação Predial (BMS), Automação prisional e Segurança eletrônica no Brasil"
          />
          <meta
            name="twitter:title"
            content="Ingenium Tecnologia | Soluções de Automação Predial (BMS), Automação prisional e Segurança eletrônica no Brasil"
          />
          <meta
            name="twitter:description"
            content="Automação predial (BMS), Segurança eletrônica, Automação prisional, Tecnologia da informação TI, Elétrica, Serralheria e Mecatrônica. Integração total entre consultoria, projetos, execução e manutenção. Com grande foco em implantação e upgrade de tecnologias e Retrofit."
          />
          <meta
            name="description"
            content="Automação predial (BMS), Segurança eletrônica, Automação prisional, Tecnologia da informação TI, Elétrica, Serralheria e Mecatrônica. Integração total entre consultoria, projetos, execução e manutenção. Com grande foco em implantação e upgrade de tecnologias e Retrofit."
          />
          <meta
            name="keywords"
            content="ingenium tecnologia, automação predial bms, automação predial, automação prisional"
          />
          <meta name="author" content="Matheus Oliveira" />
          <meta name="creator" content="Matheus Oliveira" />
          <meta name="publisher" content="Matheus Oliveira" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css?family=Nunito:300,300i"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poly&amp;display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="./public/img/principal/favicon.jpg" />
          <link rel="stylesheet" href="./public/assets/css/style.css" />
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
