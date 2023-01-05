import Link from "next/link"
import { List, ListItem, Stack, StackProps, Text } from "@chakra-ui/react"
import { formatForLink } from "../utils/remove-accent"
import pages from "../data"

export function NavBar(props: StackProps) {
  return (
    <Stack as="nav" {...props} width="100%" overflow="hidden">
      {Object.keys(pages).map((pageName) => {
        const page = pages[pageName]
        return (
          <List
            key={pageName}
            sx={{
              ">li": {
                paddingY: "0.25rem",
              },
              ">li:last-of-type": {
                marginBottom: "-0.25rem",
              },
            }}
          >
            <ListItem
              color="#000"
              fontSize="sm"
              _hover={{
                color: "blue",
              }}
            >
              <Link href={`/${pageName}`}>
                <Text as="h3" fontWeight="bold">
                  {page.title}
                </Text>
              </Link>
            </ListItem>
            {page.sections.map((section) => (
              <ListItem
                key={section.title}
                display="block"
                overflow="hidden"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
                _hover={{
                  color: "blue",
                }}
              >
                <Link
                  href={{
                    pathname: pageName,
                    hash: formatForLink(section.title),
                  }}
                >
                  {section.title}
                </Link>
              </ListItem>
            ))}
          </List>
        )
      })}
    </Stack>
  )
}
