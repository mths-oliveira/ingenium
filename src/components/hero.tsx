import { Flex, FlexProps } from "@chakra-ui/react"
import { Stack } from "./stack"

export function Hero(props: FlexProps) {
  return (
    <Flex
      height="calc(100vh - 7.5rem)"
      bgSize="cover"
      flexDir="column"
      justifyContent="end"
      {...props}
    >
      <Stack
        bgImage="linear-gradient(transparent, rgba(0,0,0,0.5) 80%)"
        color="white"
        fontWeight="bold"
        padding={{
          base: "3rem 1rem",
          sm: "3.5rem 7.5rem",
        }}
      >
        {props.children}
      </Stack>
    </Flex>
  )
}
