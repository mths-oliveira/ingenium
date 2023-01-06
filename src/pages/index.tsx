import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react"
import pages from "../data"
import Link from "next/link"
import { motion } from "framer-motion"
import { MdArrowForward } from "react-icons/md"
const pageNames = Object.keys(pages)

interface Link {
  text: string
  href: string
}

interface Section {
  title: string
  content: string
  imageSrc: string
  link: Link
}
const sections: Section[] = [
  {
    title: "Ingenium Tecnologia",
    content:
      "Ingenium é um conceito. Seu significado literal remete às origens da definição de engenharia, como a ciência, a arte e a profissão de adquirir e de aplicar os conhecimentos matemáticos, técnicos e científicos na criação, aperfeiçoamento e implementação de materiais, estruturas, máquinas, aparelhos, sistemas ou processos. Ingenium é a condição que nos permite manter a mente sempre disposta a absorver todo e qualquer conhecimento em múltiplas áreas, que colaborem para o desenvolvimento de tecnologias que possam melhorar a vida humana.",
    imageSrc: "/ingenium.png",
    link: {
      href: "/sobre-nos",
      text: "Conheça a Ingenium",
    },
  },
  {
    title: "Automação e segurança eletrônica",
    content:
      "Da idealização à instalação e manutenção, somos capazes de tornar real todo e qualquer conceito nas áreas de engenharia e tecnologia, voltadas à automação predial, industrial, prisional e segurança eletrônica.",
    imageSrc: "/ajudar.jpg",
    link: {
      href: "/serviços",
      text: "Descubra como podemos ajudar a sua empresa",
    },
  },
  {
    title: "Produtos e soluções",
    content:
      "A Ingenium Tecnologia oferece todos os produtos e soluções que você precisa, para, garantir o maior nivel de segurança à sua organização.",
    imageSrc: "/segurança.webp",
    link: {
      href: "/produtos",
      text: "Conheça nossas soluções",
    },
  },
]

export default function () {
  return (
    <Stack
      flexDirection="column"
      padding={{
        base: "2.25rem 0 0",
        sm: "5rem",
        md: "12.5rem 7.5rem 7.5rem",
      }}
      spacing={{
        md: "7.5rem",
      }}
    >
      {sections.map((section, i) => (
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
          }}
          key={section.title}
          gap={{
            md: "7.5rem",
          }}
          alignItems="center"
          justifyItems="center"
        >
          <motion.div
            style={{
              width: i === 0 ? "62.5%" : "100%",
            }}
            viewport={{
              margin: "50% 0px -25% 0px",
            }}
            initial={{
              opacity: 0,
              y: "33%",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              bounce: 0.25,
              duration: 0.5,
            }}
          >
            <Image src={section.imageSrc} />
          </motion.div>
          <Stack
            padding={{
              base: "3rem 1rem",
              sm: "3rem 0",
              md: 0,
            }}
            order={{
              md: i % 2 === 0 ? -1 : 1,
            }}
          >
            <Heading>{section.title}</Heading>
            <Text>{section.content}</Text>
            <Flex
              as={Link}
              href={section.link.href}
              color="blue"
              alignItems="center"
              position="relative"
              width="fit-content"
              paddingY="0.5rem"
              fontWeight="500"
              _after={{
                content: `''`,
                height: "3px",
                width: "0%",
                position: "absolute",
                left: 0,
                bottom: "0",
                background: "blue",
                transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.075)",
              }}
              _hover={{
                _after: {
                  width: "75%",
                },
              }}
            >
              {section.link.text}
              <Icon as={MdArrowForward} marginLeft="0.25rem" />
            </Flex>
          </Stack>
        </SimpleGrid>
      ))}
    </Stack>
  )
}
