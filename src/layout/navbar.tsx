import NextLink from "next/link"
import {
  List,
  ListItem,
  SimpleGrid,
  SimpleGridProps,
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

interface NavBarProps extends SimpleGridProps {
  overflow?: "ellipsis" | "brake"
}

export function NavBar({ overflow = "brake", ...props }: NavBarProps) {
  return (
    <SimpleGrid
      as="nav"
      overflow="hidden"
      width="fit-content"
      {...props}
      gap="2.25rem 3.5rem"
    >
      {Object.keys(pages).map((pageName) => {
        const page = pages[pageName]
        return (
          <List
            key={pageName}
            sx={{
              ">li:last-of-type": {
                marginBottom: "-0.25rem",
              },
              ">li>a>p": {
                whiteSpace: overflow === "ellipsis" ? "nowrap" : "normal",
                overflow: "hidden",
                textOverflow: "ellipsis",
              },
            }}
            overflow={overflow === "ellipsis" ? "hidden" : "initial"}
          >
            <ListItem
              color="black"
              fontWeight="bold"
              fontSize="sm"
              display="block"
            >
              <Link pathname={pageName}>{page.title}</Link>
            </ListItem>
            {pageName === "solucoes" && (
              <ListItem key={"sdaegp"}>
                <Link
                  pathname={pageName}
                  hash={formatForLink(
                    "Software de automação e gestão prisional"
                  )}
                >
                  Software de automação e gestão prisional
                </Link>
              </ListItem>
            )}
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
    </SimpleGrid>
  )
}
