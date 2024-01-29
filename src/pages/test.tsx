import { Box, Flex, Stack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const videos = [
  { videoId: "PifFEuq-hwk", title: "Sistema de intercomunicação nas prisões" },
  {
    videoId: "3w-DfLdsbgU",
    title: "Sistema de intertravamento de portas em prisões",
  },
  { videoId: "VT9Y-w2NhUc", title: "Integração CCTV na prisão" },
]

export default function () {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const view = document.getElementsByClassName("view")
    const { height } = view[1].getBoundingClientRect()
    setWidth((height / 3) * 4)
  }, [])
  return (
    <Flex maxWidth="100vw" overflow="auto" padding="7.5rem">
      <Flex flexShrink="0">
        {videos.map(({ videoId }, i) => {
          const isIndex = i === 1
          let x = "0"
          if (i === 0) {
            x = "12.5%"
          }
          if (i === 2) {
            x = "-12.5%"
          }
          return (
            <motion.div
              animate={{
                scale: isIndex ? 1 : 0.75,
                x,
                opacity: isIndex ? 1 : 0.5,
              }}
            >
              <Box
                className="view"
                width={`${width}px`}
                height="calc(100vh - 15rem)"
                boxShadow="xl"
                zIndex={isIndex ? 1 : -1}
              >
                <Box
                  width="100%"
                  height="100%"
                  borderRadius="5px"
                  as="iframe"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  allow="accelerometer; encrypted-media; gyroscope; autoplay; picture-in-picture"
                  title="Youtube Video Player"
                  allowFullScreen={true}
                />
              </Box>
            </motion.div>
          )
        })}
      </Flex>
    </Flex>
  )
}
