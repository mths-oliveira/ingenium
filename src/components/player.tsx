import { Box, Center, Flex, Icon, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"
import { FaEye, FaPlay } from "react-icons/fa"

const videos = [
  { videoId: "PifFEuq-hwk", title: "Sistema de intercomunicação nas prisões" },
  {
    videoId: "3w-DfLdsbgU",
    title: "Sistema de intertravamento de portas em prisões",
  },
  { videoId: "VT9Y-w2NhUc", title: "Integração CCTV na prisão" },
  { videoId: "uymQyAcIAAw", title: "Operação Prisional Geral" },
]

export default function () {
  const [currentVideoId, setCurrentVideoId] = useState(videos[0].videoId)
  const [autoplay, setAutoplay] = useState(0)

  return (
    <Flex
      flexDirection={{
        base: "column",
        sm: "column",
        md: "row",
      }}
      position="relative"
      marginBottom={["0", "7.5rem"]}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        position="sticky"
        top="0"
        left="0"
        zIndex="10"
        id="view"
        width="40rem"
        maxWidth="100vw"
        height="30rem"
        maxHeight="75vw"
        boxShadow="lg"
      >
        <Box
          width="100%"
          height="100%"
          borderRadius={["0", "5px"]}
          as="iframe"
          src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=${autoplay}`}
          allow="accelerometer; encrypted-media; gyroscope; autoplay; picture-in-picture"
          title="Youtube Video Player"
          allowFullScreen={true}
        />
      </Box>

      <Stack
        marginLeft={[0, "1.5rem"]}
        padding={{ base: "1.5rem 1rem" }}
        spacing={["1.5rem", "1rem"]}
        height="fit-content"
      >
        {videos.map(({ videoId, title }) => {
          const isVideoId = videoId === currentVideoId
          return (
            <Flex
              flexDirection={["column", "row"]}
              alignItems={["initial", "center"]}
              cursor="pointer"
              _hover={{
                ">div>div": {
                  color: "rgba(255,255,255,0.75)",
                },
              }}
              onClick={() => {
                setCurrentVideoId(videoId)
                setAutoplay(1)
              }}
            >
              <Box
                bgImage={`url(http://img.youtube.com/vi/${videoId}/0.jpg)`}
                width={["calc(100vw - 2rem)", "12rem"]}
                height={["calc((100vw - 2rem) / 16 * 9)", "6.75rem"]}
                borderRadius="5px"
                boxShadow="lg"
                overflow="hidden"
              >
                <Center
                  bg="rgba(0,0,0,0.3)"
                  backdropFilter={`blur(${isVideoId ? 3 : 0}px)`}
                  width="100%"
                  height="100%"
                  color={isVideoId ? "rgba(255,255,255,0.75)" : "transparent"}
                  transition="all 0.1s ease"
                >
                  <Icon
                    fontSize={isVideoId ? "2.5rem" : "2rem"}
                    as={isVideoId ? FaEye : FaPlay}
                  />
                </Center>
              </Box>
              <Stack
                marginLeft={[0, "1rem"]}
                marginTop={["1rem", "0"]}
                maxWidth={["100%", "15rem"]}
              >
                <Text color="black" fontSize="14px" fontWeight="semibold">
                  {title}
                </Text>
                <Text fontSize="12px">Bosch Security</Text>
              </Stack>
            </Flex>
          )
        })}
      </Stack>
    </Flex>
  )
}
