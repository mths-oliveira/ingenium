import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react"
import Head from "next/head"
import { FaBrain, FaRobot, FaUser } from "react-icons/fa"
import { FaVolumeHigh } from "react-icons/fa6"
import { motion } from "framer-motion"
import { formatForLink } from "../utils/remove-accent"
import page from "../data/solucoes.json"
import Player from "../components/player"

const differences = [
  {
    icon: FaBrain,
    title: "Análise inteligente",
    text: "Integração de câmeras com análise inteligente de vídeo.",
  },
  {
    icon: FaUser,
    title: "Reconhecimento facial",
    text: "Controle de acesso facial para uma identificação segura e eficiente.",
  },
  {
    icon: FaRobot,
    title: "Automação",
    text: "Controle automatizado de corredores, portas de cela e sistemas prediais.",
  },
  {
    icon: FaVolumeHigh,
    title: "Comunicação",
    text: "Intercomunicadores digitais para uma comunicação eficaz.",
  },
]

export default function () {
  return (
    <>
      <Head>
        <title>{page.title}</title>
      </Head>
      <Flex flexDirection="column">
        <Flex
          as="header"
          bgSize="cover"
          bgImage={page.imageSrc}
          bgPosition="0 50%"
          flexDirection="column"
          justifyContent="end"
          height={{
            base: "calc(100vh - 12.5rem)",
            sm: "calc(100vh - 15rem)",
            lg: "calc(100vh - 22.5rem)",
            xl: "calc(100vh - 7.5rem)",
          }}
        >
          <Stack
            padding={{
              base: "3rem 1rem",
              sm: "3.5rem 5rem",
              md: "3.5rem 7.5rem",
            }}
            bgImage="linear-gradient(transparent, rgba(0,0,0,0.5))"
            color="white"
          >
            <Heading
              as="h1"
              fontSize={{
                base: "lg",
                md: "xl",
              }}
            >
              {page.title}
            </Heading>
          </Stack>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          position="relative"
          _before={{
            content: `''`,
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            zIndex: "-1",
            height: "calc(100% - 7rem)",
            bg: "offWhite",
          }}
        >
          <Box
            as="span"
            id={formatForLink("Software de automação e gestão prisional")}
            position="absolute"
            top="7.5rem"
          />
          <Stack
            spacing="1.25rem"
            maxWidth="57rem"
            padding="5rem 6.5rem 2.25rem"
            textAlign="center"
            alignSelf="center"
          >
            <Heading maxWidth="37.5rem">
              Software de automação e gestão prisional
            </Heading>
            <Text>
              OmniSafe representa uma revolução na gestão prisional, oferecendo
              uma solução integrada e abrangente para unidades prisionais
              modernas. Nosso sistema vai além das expectativas, proporcionando
              segurança total, eficiência operacional e contribuindo ativamente
              para o processo de ressocialização.
            </Text>
          </Stack>
          <Flex position="relative" justifyContent="center">
            <Stack direction="row" spacing="1rem">
              {differences.map(({ icon, text, title }) => (
                <Flex
                  key={title}
                  flexDirection="column"
                  height="17rem"
                  width="13.5rem"
                  borderRadius="5px"
                  boxShadow="xl"
                  bg="white"
                  padding="1rem"
                >
                  <Box marginBottom="0.75rem" height="140px">
                    <Box
                      bg="blue"
                      padding="1rem"
                      borderRadius="full"
                      height="5rem"
                      width="5rem"
                      marginBottom="0.5rem"
                    >
                      <Icon color="white" fontSize="3rem" as={icon} />
                    </Box>
                    <Text
                      color="black"
                      textTransform="capitalize"
                      fontSize="18px"
                      fontWeight="600"
                    >
                      {title}
                    </Text>
                  </Box>
                  <Text fontSize="14px">{text}</Text>
                </Flex>
              ))}
            </Stack>
          </Flex>
        </Flex>

        <Stack
          flexDirection="column"
          padding={{
            base: "2.25rem 0 0",
            sm: "5rem",
            md: "7.5rem",
          }}
          spacing={{
            md: "7.5rem",
          }}
        >
          {page.sections.map((section, i) => (
            <SimpleGrid
              as="section"
              id={formatForLink(section.title)}
              key={section.title}
              alignItems="center"
              columns={{
                base: 1,
                md: 2,
              }}
              columnGap={{
                sm: "5rem",
                md: "7.5rem",
              }}
            >
              <motion.div
                viewport={{
                  margin: "50% 0px -25% 0px",
                }}
                initial={{
                  opacity: 0,
                  y: "33%",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  type: "spring",
                  bounce: 0.25,
                  duration: 0.5,
                }}
              >
                <Image
                  width="100%"
                  src={section.imageSrc}
                  alt={section.title}
                  boxShadow={["none", "xl"]}
                />
              </motion.div>
              <Stack
                padding={{
                  base: "3rem 1rem",
                  sm: "3.5rem 0",
                  md: 0,
                }}
                order={{
                  md: i % 2 === 0 ? -1 : 1,
                }}
              >
                <Heading>{section.title}</Heading>
                {Array.isArray(section.content) ? (
                  <List
                    listStyleType="initial"
                    sx={{
                      ">li:not(:first-of-type)": {
                        marginTop: "0.5rem",
                      },
                    }}
                  >
                    {section.content.map((content) => (
                      <ListItem
                        key={content}
                        transform={{
                          base: "translateX(1rem)",
                          sm: "translateX(1.25rem)",
                        }}
                      >
                        {content}
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <Text>{section.content}</Text>
                )}
              </Stack>
            </SimpleGrid>
          ))}
        </Stack>
        <Player />
      </Flex>
    </>
  )
}
