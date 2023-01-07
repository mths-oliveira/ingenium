import { Box, Button, Image, Stack, useDisclosure } from "@chakra-ui/react"
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react"
import { MdMenu } from "react-icons/md"
import { NavBar } from "../layout/navbar"
import Link from "next/link"

export function Menu() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box
        top="0"
        zIndex="10"
        height={{
          base: "4rem",
          md: "11.25rem",
        }}
        width={{
          base: "100%",
          md: "22.5rem",
        }}
        position={{
          base: "sticky",
          md: "fixed",
        }}
        filter="drop-shadow(0 3px 6px rgba(0,0,0,0.1))"
        _before={{
          content: `''`,
          position: "absolute",
          inset: 0,
          bg: "white",
          clipPath: [0, 0, "polygon(0 0, 0 100%, 100% 0)"],
        }}
      >
        <Stack
          position="absolute"
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
            bg="silver"
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
                <Image src="/ingenium.png" width="5rem" onClick={onClose} />
              </Link>
            </Box>
          </DrawerHeader>
          <DrawerBody padding="0">
            <NavBar
              spacing="2.25rem"
              padding="2.25rem 1.5rem"
              onClick={(e) => {
                if (e.currentTarget === e.target) return
                onClose()
              }}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
