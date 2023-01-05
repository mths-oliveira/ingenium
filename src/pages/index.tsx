import {
  Box,
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
import NextLink from "next/link"
import { formatForLink } from "../utils/remove-accent"
import pages from "../data"
const pageNames = Object.keys(pages)
export default function () {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      paddingX={{
        base: "0",
        sm: "5rem",
        md: "12.5rem",
      }}
    >
      <Flex
        as="header"
        flexShrink="0"
        justifyContent={{
          sm: "center",
        }}
        overflowX="auto"
      >
        <List display="flex" paddingY="1rem" flexShrink={0}>
          {pageNames.map((pageName) => (
            <ListItem key={pageName}>
              <Link
                as={NextLink}
                fontWeight="500"
                href={"/" + formatForLink(pageName)}
                padding="0.5rem 1rem"
                overflow="hidden"
                position="relative"
                _after={{
                  content: `''`,
                  height: "3px",
                  width: 0,
                  position: "absolute",
                  left: "1rem",
                  bottom: 0,
                  bg: "gray",
                  transition:
                    "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.075)",
                }}
                _hover={{
                  _after: {
                    width: "50%",
                  },
                }}
              >
                {pages[pageName].title}
              </Link>
            </ListItem>
          ))}
        </List>
      </Flex>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
        }}
        paddingY={{
          base: "3.5rem",
          md: "12.5rem",
        }}
        justifyContent="space-between"
        alignItems="center"
        gap={{
          base: "2.25rem",
          md: "7.5rem",
        }}
      >
        <Stack
          paddingX={{
            base: "1rem",
            md: 0,
          }}
          order={{
            base: 1,
            md: 0,
          }}
        >
          <Heading as="h1">Automação e segurança eletrônica</Heading>
          <Text>
            Da idealização à instalação e manutenção, somos capazes de tornar
            real todo e qualquer conceito nas áreas de engenharia e tecnologia,
            voltadas à automação prisional, predial, industrial e segurança
            eletronica.
          </Text>
        </Stack>
        <Box
          maxWidth={{
            base: "50vw",
          }}
          padding={{
            md: "5rem",
          }}
        >
          <Image margin="auto" src="/ingenium.png" />
        </Box>
      </SimpleGrid>
    </Flex>
  )
}
