import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { Fade } from "react-reveal";

const netflixLink = "https://monumental-cascaron-397354.netlify.app/";
const todoLink = "https://bespoke-cranachan-3b4287.netlify.app/";
const calculatorLink = "https://astonishing-raindrop-48826d.netlify.app/";
const gymappLink = "https://master--kaleidoscopic-fairy-a5453c.netlify.app/";

function netflix() {
  window.open(netflixLink, "_blank");
}


function todo() {
  window.open(todoLink, "_blank");
}

function calculator() {
  window.open(calculatorLink, "_blank");
}

function gymapp() {
  window.open(gymappLink, "_blank");
}

function Projects() {
  return (
    <Box
      p={5}
      id="Projects"
      w="100%"
      minH="100vh"
      bgImg={"./images/s3.jpg"}
      bgAttachment={{ base: "none", md: "none", lg: "fixed"}}
      bgPos={"center"}
      bgSize={"cover"}
    >
      <Box w="100%" mt={130} minH="100vh" bg="transparent" color="white">
        <Fade duration={2000}>
          <Flex
            className="navbar"
            borderRadius={20}
            p={5}
            minH="100%"
            w={{ base: "100%", md: "100%", lg: "60%" }}
            m={"auto"}
            justifyContent="center"
            alignItems="center"
            flexDir="column"
          >
            <Heading
              mb={8}
              fontFamily={"Nemesis Grant"}
              textAlign={"center"}
          
            >
              What I've Built
            </Heading>
            <Flex mt={-0}>
              <SimpleGrid
                pt={0}
                columns={{ base: 1, md: 1, lg: 2 }}
                minH={"10vh"}
                w={"80vw"}
                spacing={5}
              >
                <Box
                  bgImg={"./images/gymm.jpeg"}
                  bgSize={"cover"}
                  bgPos={"top"}
                  height="30vh"
                  _hover={{ opacity: 0.5 }}
                  as={"button"}
                  borderRadius="10"
                  onClick={gymapp}
                >
          
                </Box>
                <Box
                  bgImg={"./images/netflix.jpeg"}
                  bgSize={"cover"}
                  bgPos={"center"}
                  height="30vh"
                  _hover={{ opacity: 0.5 }}
                  as={"button"}
                  borderRadius="10"
                  onClick={netflix}
                >
                  <a href="#" target={"_blank"}></a>
                </Box>
                <Box
                  bgImg={"./images/todolist.png"}
                  bgSize={"cover"}
                  bgPos={"center"}
                  borderRadius="10"
                  height="30vh"
                  _hover={{ opacity: 0.5 }}
                  as={"button"}
                  onClick={todo}
                >
                  <a href="#" target={"_blank"}></a>
                </Box>
                <Box
                  bgImg={"./images/calculator.png"}
                  bgSize={"cover"}
                  borderRadius="10"
                  bgPos={"center"}
                  height="30vh"
                  _hover={{ opacity: 0.5 }}
                  as={"button"}
                  onClick={calculator}
                >
                  <a href="#" target={"_blank"}></a>
                </Box>
              </SimpleGrid>
            </Flex>
          </Flex>
        </Fade>
      </Box>
    </Box>
  );
}

export default Projects;
