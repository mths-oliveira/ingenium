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
import NextLink from "next/link"
import { formatForLink } from "./[page]"
const pageNames = ["Sobre nós", "Serviços", "Produtos", "Certificações"]
export default function () {
  return (
    <Flex
      height="100vh"
      flexDirection="column"
      alignItems="center"
      paddingX="7.5rem"
    >
      <Flex as="header" flexShrink="0" justifyContent="center">
        <List display="flex" paddingY="1rem">
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
                {pageName}
              </Link>
            </ListItem>
          ))}
        </List>
      </Flex>
      <SimpleGrid
        columns={2}
        justifyContent="center"
        alignItems="center"
        marginY="auto"
        gap="5rem"
        maxWidth="65rem"
      >
        <Stack>
          <Heading as="h1">Lorem ipsum dolor</Heading>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
            fugiat eos similique, sequi voluptatem assumenda veritatis,
            distinctio laudantium ullam recusandae, modi dolor aspernatur culpa
            impedit! Eaque incidunt dolorem quam necessitatibus!
          </Text>
        </Stack>
        <Image src="https://media.licdn.com/dms/image/C4D22AQFhTbVVQK-riw/feedshare-shrink_800/0/1668886602606?e=1675296000&v=beta&t=ZRthaInEYjS4AGIWdsU02I9gqqQvUkDlnjkU6KdMNYQ" />
      </SimpleGrid>
    </Flex>
  )
}
