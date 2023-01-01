import {
  Box,
  Heading,
  List,
  ListItem,
  StackProps,
  Text,
} from "@chakra-ui/react"
import { Stack } from "./stack"

interface ArticleProps extends StackProps {
  title: string
  children: string | string[]
}

export function Article(props: ArticleProps) {
  return (
    <Stack {...props}>
      <Heading>{props.title}</Heading>
      <Box overflowY="auto">
        {Array.isArray(props.children) ? (
          <List
            listStyleType="initial"
            paddingLeft="1.25rem"
            paddingRight="1rem"
          >
            {props.children.map((listItem, i) => (
              <ListItem key={props.title + i}>{listItem}</ListItem>
            ))}
          </List>
        ) : (
          <Text>{props.children}</Text>
        )}
      </Box>
    </Stack>
  )
}
