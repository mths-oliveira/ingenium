import { Flex, StackProps } from "@chakra-ui/react"

export function Stack(props: StackProps) {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      sx={{
        ">*:not(:first-child)": {
          marginTop: props.spacing || "0.5rem",
        },
        ">h1, h2": {
          transform: "translateY(-0.25rem)",
        },
      }}
      {...props}
    />
  )
}
