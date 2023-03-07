import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import { Fade } from "react-reveal";

function Home() {
  return (
    <Box
      id="Home"
      bgImg={"./images/b2.jpg"}
      bgAttachment={{ base: "none", md: "none", lg: "fixed"}}
      bgRepeat={"no-repeat"}
      bgPos={"center"}
      bgSize={"cover"}
      w="100%"
      minH="100vh"
      color="white"
    >
      <Center minH="100vh" bg={'blackAlpha.500'} w="100%">
        <Box w="100%" color="white" p={10}>
          <Flex justifyContent="center" alignItems="center" flexDir="column">
            <Fade duration={5000}>
              <Heading
                fontFamily={"Nemesis Grant"}
                textAlign={"center"}
                color={"whitesmoke"}
                textShadow={"1px 1px 50px red"}
                fontSize={"4xl"}
              >
                John Akinyemi
              </Heading>
              <Heading
                textAlign={"center"}
                fontFamily={"Nemesis Grant"}
                fontSize={"5xl"}
                color={"red.400"}
                textShadow={"1px 1px 50px red"}
              >
                Frontend Developer
              </Heading>
            </Fade>
          </Flex>
        </Box>
      </Center>
    </Box>
  );
}

export default Home;
