import { Box, Button, Image, Stack, useDisclosure } from "@chakra-ui/react"
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react"
import { useEffect } from "react"
import { MdMenu } from "react-icons/md"
import { NavBar } from "../layout/navbar"
import Link from "next/link"
import { useRouter } from "next/router"
export function Menu() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()
  useEffect(() => {
    onClose()
  }, [router])
  return (
    <>
      <Box
        bg="white"
        zIndex="10"
        top="0"
        position={{
          base: "sticky",
          md: "fixed",
        }}
        height={{
          base: "4rem",
          md: "22.5rem",
        }}
        width={{
          base: "100vw",
          md: "22.5rem",
        }}
        sx={{
          clipPath: [
            0,
            0,
            "polygon(100% 0, 75% 12.5%, 50% 25%, 25% 37.5%, 0 50%, 0 0)",
          ],
        }}
      >
        <Stack
          spacing="1rem"
          direction="row"
          alignItems="center"
          paddingY={{
            base: "0.5rem",
            sm: "1rem",
          }}
          width="fit-content"
        >
          <Button
            onClick={onOpen}
            paddingLeft="1.5rem"
            borderRadius="0 1.5rem 1.5rem 0"
            bg="#aaa"
            color="white"
          >
            <MdMenu fontSize="1.5rem" />
          </Button>
          <Link href="/">
            <Image
              src="/ingenium.png"
              maxWidth="5rem"
              height={{
                base: "3rem",
                md: "initial",
              }}
            />
          </Link>
        </Stack>
      </Box>
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent id="menu" maxWidth="17.5rem">
          <DrawerHeader
            padding="1.5rem"
            borderBottom="1px solid rgba(0,0,0,0.1)"
          >
            <DrawerCloseButton width="2.25rem" height="2.25rem" />
            <Box width="fit-content">
              <Link href="/">
                <Image src="/ingenium.png" width="5rem" />
              </Link>
            </Box>
          </DrawerHeader>
          <DrawerBody padding="0">
            <NavBar spacing="2.25rem" padding="2.25rem 1.5rem" />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
