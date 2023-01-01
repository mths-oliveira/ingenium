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
  keyframes,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import PageLink from "next/link"
import page from "../data/sobre-nos.json"

function formatForLink(text: string) {
  const link = text.replace(" ", "-").toLowerCase()
  return link
}

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(2) rotate(0); border-radius: 20%; }
  50% { transform: scale(2) rotate(270deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(0); border-radius: 20%; }
`

const animation = `${animationKeyframes} 2s ease-in-out infinite`

export default function () {
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
          justifyContent="center"
          bgImage="linear-gradient(to top, transparent, rgba(0,0,0,0.5))"
          paddingTop="0.5rem"
          paddingBottom="0.75rem"
          overflow="hidden"
          visibility={{
            base: "hidden",
            sm: "initial",
          }}
        >
          {page.sections.map((section) => (
            <Link
              href={"#" + formatForLink(section.title)}
              key={"link" + section.title}
              padding="0.5rem 1rem"
              borderRadius="md"
              fontWeight="500"
              _hover={{
                bg: "rgba(0,0,0,0.05)",
              }}
            >
              {section.title}
            </Link>
          ))}
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
                margin: "360px 0px -240px 0px",
              }}
              initial={{
                opacity: 0,
                y: "5rem",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
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
