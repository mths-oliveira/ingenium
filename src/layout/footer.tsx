import { Grid, Image, List, ListItem, Stack, Text } from "@chakra-ui/react"
import Link from "next/link"

import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa"
import { MdMailOutline } from "react-icons/md"
import { NavBar } from "./navbar"

export function Footer() {
  return (
    <Grid
      as="footer"
      fontWeight="500"
      fontSize="xs"
      paddingX={{
        base: "1rem",
        sm: "5rem",
        md: "7.5rem",
      }}
      paddingTop="3.5rem"
      gridTemplateColumns={{
        base: "1fr",
        md: "10.5rem 1fr",
      }}
      gap="3.5rem 5rem"
      bg="offWhite"
    >
      <Stack spacing="1.5rem">
        <Link href="/">
          <Image src="/ingenium.png" maxWidth="10.5rem" />
        </Link>
        <List
          width="fit-content"
          fontSize="1.25rem"
          display="flex"
          sx={{
            ">li:not(:first-of-type)": {
              marginLeft: "1rem",
            },
            ">li": {
              _hover: {
                color: "blue",
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
          <ListItem fontSize="1.5rem" transform="translateY(-0.125rem)">
            <a target="_blank" href="mailto:contato@ingeniumtecnologia.com.br">
              <MdMailOutline />
            </a>
          </ListItem>
        </List>
      </Stack>
      <NavBar
        spacing={{
          base: "2.25rem",
          md: "3.5rem",
        }}
        direction={{
          base: "column",
          md: "row",
        }}
      />
      <Text
        as="span"
        gridColumn="1/-1"
        paddingY="2.25rem"
        borderTop="1px solid rgba(0,0,0,0.25)"
      >
        © 2023 Ingenium Tecnologia, todos os direitos reservados.
      </Text>
    </Grid>
  )
}
