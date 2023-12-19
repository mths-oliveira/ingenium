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
import { useEffect, useState } from "react"

export function Menu() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [top, setTop] = useState(0)
  useEffect(() => {
    const button = document.getElementById("menu-button")
    let lastPosition = 0
    let isScrollUp = false
    window.onscroll = () => {
      const { y } = document.body.getBoundingClientRect()
      if (y === 0) {
        setTop(-80)
        return
      }
      const currentIsScrollUp = y > lastPosition
      if (isScrollUp !== currentIsScrollUp) {
        setTop(isScrollUp ? -80 : 0)
        if (isScrollUp) button?.focus()
      }
      lastPosition = y
      isScrollUp = currentIsScrollUp
    }
  }, [])

  return (
    <>
      <Box
        top={`${top}px`}
        zIndex="10"
        position="fixed"
        width="100%"
        background="#fff"
        transition="top 200ms ease-in-out"
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
            id="menu-button"
            onClick={onOpen}
            paddingLeft="1.5rem"
            borderRadius="0 1.5rem 1.5rem 0"
            bg="silver"
            color="white"
          >
            <MdMenu fontSize="1.5rem" />
          </Button>
          <Link href="/">
            <Image src="/ingenium.png" height="3rem" />
          </Link>
        </Stack>
      </Box>
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent id="menu" maxWidth="15rem">
          <DrawerHeader
            padding="1.5rem"
            borderBottom="1px solid rgba(0,0,0,0.1)"
          >
            <DrawerCloseButton width="2.25rem" height="2.25rem" />
            <Box width="fit-content">
              <Link href="/">
                <Image src="/ingenium.png" width="3.5rem" onClick={onClose} />
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
