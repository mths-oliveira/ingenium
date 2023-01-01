import { Box, Heading, Image, Text } from "@chakra-ui/react"
import Link from "next/link"
import { Section } from "../components/section"
import { Article } from "../components/article"
import { Hero } from "../components/hero"
import { motion } from "framer-motion"
import { useEffect } from "react"

interface Section {
  title: string
  imageSrc: string
  listItems?: string[]
  text?: string
}

const sections: Section[] = [
  {
    title: "Quem somos",
    imageSrc:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGJ1c2luZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    text: "Fundada em 2014, pioneira em sistemas de automação prisional e com grande expertise em segurança eletrônica, automação predial e industrial, participamos de grandes projetos corporativos, além de shoppings e estádios de futebol, trazemos todo know how de tecnologia e gerenciamento de obras de grande porte. A Ingenium é formada por um grupo multidisciplinar, composto por colaboradores, parceiros, fornecedores e clientes. Que juntos, tornamos real qualquer conceito nas áreas de engenharia e tecnologia.",
  },
  {
    title: "Missão",
    imageSrc:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGJ1c2luZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    text: "Projetar, construir, implantar e manter os sistemas de automação e segurança eletrônica mais eficientes do mundo.",
  },
  {
    title: "Visão",
    imageSrc:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGJ1c2luZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    text: "Ser líder em implantação de sistemas complexos de automação e segurança eletrônica no Brasil até 2030, em termos de faturamento, relevância e reconhecimento do mercado.",
  },
  {
    title: "Valores",
    imageSrc:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGJ1c2luZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    listItems: [
      "Seja profissional e se divirta no processo.",
      "Conhecimento é o que nos dá poder de realizar qualquer coisa.",
      "Amor e paixão cabem em qualquer relação.",
      "Falhas e mudanças não são aceitas, são esperadas e muito bem vindas.",
      "Uma mente de olhos e ouvidos abertos se inspira e pode inovar sempre.",
      "Simplicidade e humildade agregam valor a tudo e a todos.",
      "Não existe distância entre liderança e companheirismo.",
      "O bom relacionamento é a tônica da qualidade de vida e dos negócios.",
    ],
  },
  {
    title: "Propósito",
    imageSrc:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGJ1c2luZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    text: "Transformar o presente em futuro, contribuindo para a segurança, conforto e bem estar de todos que pudermos alcançar.",
  },
]

export default function () {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("scroll")
    })
  }, [])
  return (
    <>
      <Hero bgImage="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGJ1c2luZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60">
        <Text as={Link} href="/">
          Home
        </Text>
        <Heading as="h1" fontSize="2.5rem">
          Sobre nós
        </Heading>
      </Hero>

      <Box
        padding={{
          sm: "7.5rem",
        }}
        sx={{
          ">section:not(:first-of-type)": {
            marginTop: [0, "7.5rem"],
          },
        }}
      >
        {sections.map((section, i) => (
          <Section
            key={section.title}
            spacing={{
              sm: "7.5rem",
            }}
            _first={{
              marginTop: "0",
            }}
            alignItems="center"
          >
            <Box
              order={{
                sm: i % 2 === 0 ? -1 : 1,
              }}
            >
              <motion.img
                width="100%"
                src={section.imageSrc}
                initial={{
                  opacity: 0,
                  y: "20%",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
              />
            </Box>

            <Article
              title={section.title}
              padding={{
                base: "3rem 1rem",
                sm: "0",
              }}
            >
              {section.text || section.listItems}
            </Article>
          </Section>
        ))}
      </Box>
    </>
  )
}
