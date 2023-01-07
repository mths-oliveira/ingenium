import NextLink from "next/link"
import {
  List,
  ListItem,
  Stack,
  StackProps,
  Text,
  TextProps,
} from "@chakra-ui/react"
import { formatForLink } from "../utils/remove-accent"
import pages from "../data"

interface LinkProps extends TextProps {
  href?: string
  pathname?: string
  hash?: string
}

function Link({ hash, pathname, href, ...rest }: LinkProps) {
  return (
    <NextLink
      href={{
        href,
        hash,
        pathname,
      }}
    >
      <Text
        display="block"
        paddingY="0.25rem"
        overflow="hidden"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
        _hover={{
          color: "blue",
        }}
        _focus={{
          boxShadow: "none",
        }}
        {...rest}
      />
    </NextLink>
  )
}

export function NavBar(props: StackProps) {
  return (
    <Stack as="nav" {...props} width="100%" overflow="hidden">
      {Object.keys(pages).map((pageName) => {
        const page = pages[pageName]
        return (
          <List
            key={pageName}
            sx={{
              ">li:last-of-type": {
                marginBottom: "-0.25rem",
              },
            }}
          >
            <ListItem color="#000" fontWeight="bold" fontSize="sm">
              <Link pathname={pageName}>{page.title}</Link>
            </ListItem>
            {page.sections.map((section) => (
              <ListItem key={section.title}>
                <Link pathname={pageName} hash={formatForLink(section.title)}>
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
