import {
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react"
import Head from "next/head"
import Link from "next/link"
import { motion } from "framer-motion"
import { MdArrowDownward, MdArrowForward } from "react-icons/md"
import data from "../data/home.json"

interface Link {
  text: string
  href: string
}

export default function () {
  return (
    <>
      <Head>
        <title>Ingenium Tecnologia</title>
      </Head>
      <Flex
        id="hero"
        as="header"
        bgSize="cover"
        bgImage={data.imageSrc}
        bgPosition="0% 75%"
        height="100vh"
        position="relative"
        color="white"
        padding={{
          base: "3rem 1rem",
          sm: "3.5rem 5rem",
          md: "3.5rem 7.5rem",
        }}
        _before={{
          content: `''`,
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100vh",
          bgImage:
            "linear-gradient(to right, rgba(0,0,0,0.5) 50%, transparent)",
        }}
      >
        <Stack zIndex="1" justifyContent="center" color="white" spacing="1rem">
          <Heading
            maxWidth="40rem"
            as="h1"
            fontSize={{
              base: "lg",
              md: "xl",
            }}
          >
            Automação e Tecnologia para o Sistema Prisional
          </Heading>
          <Text as="span" maxWidth="35rem" fontWeight="500">
            Nossas soluções proporcionam gestão, controle, segurança e conforto
            na operação diária de unidades prisionais.
          </Text>
        </Stack>
        <Flex
          position="absolute"
          bottom="0.5rem"
          left="50%"
          alignItems="center"
          cursor="pointer"
          flexDirection="column"
          onClick={() => {
            const hero = document.getElementById("hero")
            const { bottom } = hero.getBoundingClientRect()
            window.scrollBy({ top: bottom, behavior: "smooth" })
          }}
          animation="1s ease-in infinite alternate slidein"
        >
          <Text fontSize="12px" marginBottom="0.5rem">
            Desça para saber mais
          </Text>
          <Icon as={MdArrowDownward} />
        </Flex>
      </Flex>

      <Stack
        flexDirection="column"
        padding={{
          base: "2.25rem 0 0",
          sm: "5rem",
          md: "7.5rem",
        }}
        spacing={{
          md: "7.5rem",
        }}
      >
        {data.sections.map((section, i) => (
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
              <Image
                src={section.imageSrc}
                boxShadow={{
                  sm: "xl",
                }}
              />
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
              <Heading as={i === 0 ? "h1" : "h2"} color="black">
                {section.title}
              </Heading>
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
                  transition:
                    "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.075)",
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
    </>
  )
}
