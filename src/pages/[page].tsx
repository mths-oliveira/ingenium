import {
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import { formatForLink } from "../utils/remove-accent"
import Head from "next/head"
import pages from "../data"

const titles = {
  "sobre-nos": "Sobre nós | Ingenium Tecnologia",
  servicos: "Automação e segurança eletrônica | Ingenium Tecnologia",
  produtos: "Produtos e soluções | Ingenium Tecnologia",
}

const pageNames = Object.keys(pages)
export default function () {
  const router = useRouter()
  if (
    !router.query.page ||
    typeof router.query.page !== "string" ||
    !pageNames.includes(router.query.page)
  )
    return
  const page = pages[router.query.page]
  return (
    <>
      <Head>
        <title>{titles[router.query.page]}</title>
      </Head>
      <Flex flexDirection="column">
        <Flex
          as="header"
          bgSize="cover"
          bgImage={page.imageSrc}
          bgPosition="top center"
          flexDirection="column"
          justifyContent="end"
          height={{
            base: "calc(100vh - 12.5rem)",
            sm: "calc(100vh - 15rem)",
            lg: "calc(100vh - 22.5rem)",
            xl: "calc(100vh - 7.5rem)",
          }}
        >
          <Stack
            padding={{
              base: "3rem 1rem",
              sm: "3.5rem 5rem",
              md: "3.5rem 7.5rem",
            }}
            bgImage="linear-gradient(transparent, rgba(0,0,0,0.5))"
            color="white"
          >
            <Heading
              as="h1"
              fontSize={{
                base: "lg",
                md: "xl",
              }}
            >
              {page.title}
            </Heading>
          </Stack>
        </Flex>
        <Stack
          as="main"
          padding={{
            base: "3rem 0 0",
            sm: "5rem",
            md: "7.5rem",
          }}
          spacing={{
            md: "7.5rem",
          }}
        >
          {page.sections.map((section, i) => (
            <SimpleGrid
              as="section"
              id={formatForLink(section.title)}
              key={section.title}
              alignItems="center"
              columns={{
                base: 1,
                md: 2,
              }}
              columnGap={{
                sm: "5rem",
                md: "7.5rem",
              }}
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
                  width="100%"
                  src={section.imageSrc}
                  alt={section.title}
                  boxShadow={["none", "xl"]}
                />
              </motion.div>
              <Stack
                padding={{
                  base: "3rem 1rem",
                  sm: "3.5rem 0",
                  md: 0,
                }}
                order={{
                  md: i % 2 === 0 ? -1 : 1,
                }}
              >
                <Heading>{section.title}</Heading>
                {Array.isArray(section.content) ? (
                  <List
                    listStyleType="initial"
                    sx={{
                      ">li:not(:first-of-type)": {
                        marginTop: "0.5rem",
                      },
                    }}
                  >
                    {section.content.map((content) => (
                      <ListItem
                        key={content}
                        transform={{
                          base: "translateX(1rem)",
                          sm: "translateX(1.25rem)",
                        }}
                      >
                        {content}
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <Text>{section.content}</Text>
                )}
              </Stack>
            </SimpleGrid>
          ))}
        </Stack>
      </Flex>
    </>
  )
}
