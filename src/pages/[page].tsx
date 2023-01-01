import {
  Flex,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import PageLink from "next/link"
import pages from "../data"
import { useRouter } from "next/router"

export function formatForLink(text: string) {
  const link = removeAccent(text).replace(/\W/g, "-").toLowerCase()
  return link
}

function removeAccent(text: string) {
  const unaccentedText = text.normalize("NFD").replace(/[^a-z\s]/gi, "")
  return unaccentedText
}

const pageNames = ["sobre-nos", "servicos", "produtos", "certificacoes"]

export default function () {
  const router = useRouter()
  let pageName = pageNames[0]
  if (
    router.query.page &&
    typeof router.query.page === "string" &&
    pageNames.includes(router.query.page)
  ) {
    pageName = router.query.page
  }
  const page = pages[pageName]
  return (
    <Flex flexDirection="column">
      <Flex
        bgSize="cover"
        bgImage={page.imageSrc}
        height={{
          base: "calc(100vh - 12.5rem)",
          sm: "calc(100vh - 15rem)",
          lg: "calc(100vh - 22.5rem)",
          xl: "calc(100vh - 7.5rem)",
        }}
        flexDirection="column"
        justifyContent="space-between"
        color="white"
      >
        <Flex
          as="header"
          justifyContent="center"
          bgImage="linear-gradient(to top, transparent, rgba(0,0,0,0.5))"
          paddingY="0.5rem"
          paddingX="7.5rem"
          overflowX="auto"
          visibility={{
            base: "hidden",
            sm: "initial",
          }}
        >
          <List
            display="flex"
            overflow="hidden"
            paddingBottom="0.5rem"
            marginX="-1rem"
          >
            {page.sections.map((section) => (
              <ListItem key={"link" + section.title}>
                <Link
                  className="line-clamp"
                  overflow="hidden"
                  href={"#" + formatForLink(section.title)}
                  fontSize={pageName === "produtos" ? "xs" : "sm"}
                  fontWeight="500"
                  height="fit-content"
                  padding="0.5rem 1rem"
                  position="relative"
                  _after={{
                    content: `''`,
                    height: "3px",
                    width: 0,
                    position: "absolute",
                    left: "1rem",
                    bottom: 0,
                    bg: "#fff",
                    transition:
                      "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.075)",
                  }}
                  _hover={{
                    _after: {
                      width: "50%",
                    },
                  }}
                >
                  {section.title}
                </Link>
              </ListItem>
            ))}
          </List>
        </Flex>
        <Stack
          padding={{
            base: "3rem 1rem",
            sm: "3.5rem 5rem",
            md: "3.5rem 7.5rem",
          }}
          bgImage="linear-gradient(transparent, rgba(0,0,0,0.5))"
        >
          <Link as={PageLink} fontWeight="500" width="fit-content" href="/">
            Início
          </Link>
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
        padding={{
          sm: "5rem",
          md: "7.5rem",
        }}
        spacing={{
          sm: "5rem",
          md: "7.5rem",
        }}
      >
        {page.sections.map((section, i) => (
          <SimpleGrid
            as="section"
            id={formatForLink(section.title)}
            key={section.title}
            columns={{
              base: 1,
              sm: 2,
            }}
            columnGap={{
              sm: "5rem",
              md: "7.5rem",
            }}
            alignItems="center"
          >
            <motion.div
              viewport={{
                margin: "100% 0px -25% 0px",
              }}
              initial={{
                opacity: 0,
                y: "25%",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <Image
                width="100%"
                src={section.imageSrc}
                display={{
                  base: i === 0 ? "none" : "initial",
                  sm: "initial",
                }}
              />
            </motion.div>
            <Stack
              padding={{
                base: "3rem 1rem",
                sm: 0,
              }}
              order={{
                sm: i % 2 === 0 ? 1 : -1,
              }}
            >
              <Heading>{section.title}</Heading>
              {Array.isArray(section.content) ? (
                <List listStyleType="initial">
                  {section.content.map((content) => (
                    <ListItem key={content} transform="translateX(1.25rem)">
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
  )
}
