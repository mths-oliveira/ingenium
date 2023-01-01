import { SimpleGrid, SimpleGridProps } from "@chakra-ui/react"

export interface SectionProps {
  title: string
  imageSrc: string
  listItems?: string[]
  text?: string
}

export function Section(props: SimpleGridProps) {
  return (
    <SimpleGrid
      as="section"
      columns={{
        base: 1,
        sm: 2,
      }}
      sx={{
        ">div": {
          maxHeight: "100%",
          width: "100%",
          overflow: "hidden",
        },
      }}
      {...props}
    />
  )
}
