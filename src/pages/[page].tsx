import {
  Box,
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
import pages from "../data"
import { useRouter } from "next/router"
import { formatForLink } from "../utils/remove-accent"

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
              <Box
                position="relative"
                _before={{
                  content: `''`,
                  bg:
                    i % 2 === (page.title === "Serviços" ? 1 : 0)
                      ? "blue"
                      : "silver",
                  width: "100%",
                  height: "calc(100% - 0.5rem)",
                  position: "absolute",
                  top: [0, "-1.25rem"],
                  left: [0, i % 2 === 0 ? "-1.25rem" : "1.25rem"],
                  zIndex: "-1",
                }}
              >
                <Image
                  width="100%"
                  src={section.imageSrc}
                  alt={section.title}
                  boxShadow={["none", "xl"]}
                  display={{
                    base: i === 0 ? "none" : "initial",
                    sm: "initial",
                  }}
                />
              </Box>
            </motion.div>
            <Stack
              padding={{
                base: "3rem 1rem",
                sm: "3.5rem 0",
                md: 0,
              }}
              order={{
                md: i % 2 === 0 ? 1 : -1,
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
  )
}
