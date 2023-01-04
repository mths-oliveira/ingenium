import {
  Box,
  ChakraProvider,
  Divider,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react"
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa"
import { MdMailOutline } from "react-icons/md"
import { theme } from "../styles/theme"
import { AppProps } from "next/app"
import pages from "../data"
import Link from "next/link"
import { formatForLink } from "../utils/remove-accent"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Flex
        as="footer"
        flexDirection="column"
        bg="#f4f4f4"
        paddingX={{
          base: "1rem",
          sm: "5rem",
          md: "7.5rem",
        }}
      >
        <Flex flexDirection="column" paddingY="3.5rem">
          <Box as={Link} href="/" width="fit-content">
            <Image maxWidth="10rem" src="/ingenium.png" />
          </Box>
          <Text
            maxWidth="25rem"
            fontSize="xs"
            fontWeight="500"
            marginY="1.75rem"
          >
            Entre em contato conosco para descobrirmos juntos, de quais maneiras
            a Ingenium Tecnologia pode colocar o seu empreendimento em outro
            nível.
          </Text>
          <List
            fontSize="1.25rem"
            display="flex"
            marginY="-0.25rem"
            sx={{
              ">li:not(:first-of-type)": {
                marginLeft: "1rem",
              },
              ">li": {
                _hover: {
                  color: "#000",
                },
              },
            }}
          >
            <ListItem>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5531992614522"
              >
                <FaWhatsapp />
              </a>
            </ListItem>
            <ListItem>
              <a
                target="_blank"
                href="https://www.facebook.com/ingeniumtecnologia"
              >
                <FaFacebookSquare />
              </a>
            </ListItem>
            <ListItem>
              <a
                target="_blank"
                href="https://www.instagram.com/ingeniumtecnologiabrasil"
              >
                <FaInstagram />
              </a>
            </ListItem>
            <ListItem>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/ingeniumtecnologia"
              >
                <FaLinkedin />
              </a>
            </ListItem>
            <ListItem fontSize="1.5rem">
              <a
                target="_blank"
                href="mailto:contato@ingeniumtecnologia.com.br"
              >
                <MdMailOutline />
              </a>
            </ListItem>
          </List>
        </Flex>
        <Divider />
        <SimpleGrid
          as="nav"
          display={{
            base: "grid",
            lg: "flex",
          }}
          gap="3.5rem"
          paddingY="3.5rem"
          columns={{
            base: 1,
            sm: 2,
          }}
        >
          {Object.keys(pages).map((pageName) => {
            const page = pages[pageName]
            return (
              <Stack key={pageName}>
                <Link href={`/${pageName}`}>
                  <Heading as="h3" color="#000" fontSize="sm">
                    {page.title}
                  </Heading>
                </Link>
                <List
                  sx={{
                    ">li:not(:first-of-type)": {
                      marginTop: ".5rem",
                    },
                  }}
                >
                  {page.sections.map((section) => (
                    <ListItem
                      key={section.title}
                      fontSize="xs"
                      fontWeight="500"
                      _hover={{
                        color: "#000",
                      }}
                    >
                      <Link
                        className="line-clamp"
                        href={`/${pageName}#${formatForLink(section.title)}`}
                      >
                        {section.title}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Stack>
            )
          })}
        </SimpleGrid>
        <Divider />
        <Text as="span" fontSize="xs" fontWeight="500" paddingY="2.25rem">
          © 2023 Ingenium Tecnologia, todos os direitos reservados.
        </Text>
      </Flex>
    </ChakraProvider>
  )
}
