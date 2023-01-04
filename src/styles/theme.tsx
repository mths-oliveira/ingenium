import { Box, extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  fontSizes: {
    xs: "14px",
    sm: "16px",
    md: "20px",
    lg: "36px",
    xl: "48px",
  },
  colors: {
    gray: "#565859",
  },
  breakpoints: {
    sm: "40em",
    md: "52em",
    lg: "64em",
    xl: "80em",
  },
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
        scrollPaddingTop: {
          sm: "5rem",
          md: "7.5rem",
        },
      },
      body: {
        bg: "white",
        color: "gray",
      },
      "h1, h2": {
        transform: "translateY(-0.25rem)",
      },
      ".line-clamp": {
        overflow: "hidden",
        display: " -webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical",
      },
    },
  },
})
