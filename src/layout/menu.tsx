import { Box, Button, Image, Stack, useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";
import { NavBar } from "../layout/navbar";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Menu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [top, setTop] = useState(0);
  useEffect(() => {
    const hiddenBarPosition = -80;
    const showBarPosition = 0;
    function hiddenBar() {
      setTop(hiddenBarPosition);
    }
    function showBar() {
      setTop(showBarPosition);
    }
    let lastPositionY = 0;
    let lastDirectionIsTop = true;
    window.onscroll = () => {
      const { y: currentPositionY } = document.body.getBoundingClientRect();
      const currentDirectionIsTop = currentPositionY > lastPositionY;
      if (lastDirectionIsTop === currentDirectionIsTop) {
        currentDirectionIsTop ? showBar() : hiddenBar();
      }
      if (currentPositionY === 0) {
        hiddenBar();
      }
      lastPositionY = currentPositionY;
      lastDirectionIsTop = currentDirectionIsTop;
    };
  }, []);

  return (
    <>
      <Box
        top={`${top}px`}
        zIndex="10"
        position="fixed"
        width="100%"
        bg="rgba(255,255,255,0.8)"
        backdropFilter="saturate(180%) blur(12px)"
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
              overflow="ellipsis"
              spacing="2.25rem"
              padding="2.25rem 1.5rem"
              onClick={(e) => {
                if (e.currentTarget === e.target) return;
                onClose();
              }}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
