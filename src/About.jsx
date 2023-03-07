import { Box, Flex, Heading, Text, Divider } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <Flex
      id="About"
      p={5}
      bgImg={"./images/s3.jpg"}
      bgAttachment={"fixed"}
      bgPos={"center"}
      bgSize={"cover"}
      w="100vw"
      
      minH="100vh"
      color="white"
      justifyContent="center"
      alignItems="center"
    >
      <Box  w="100%" color="white">
        <Fade duration={2000}>
          <Flex
            className="navbar"
            borderRadius={20}
            
            w={{ base: "100%", md: "100%", lg: "60%" }}
            p={5}
            m={"auto"}
            alignItems="center"
            flexDir="column"
            mt={20}
          >
            <Heading
              fontFamily={"Nemesis Grant"}
              textShadow={"1px 1px 50px red"}
            >
              About Me
            </Heading>
            <Text
              fontSize={"1.5em"}
              mt={"20px"}
              textAlign={"center"}
              w={"100%"}
              color={"whitesmoke"}
            >
              Hello! I'm John, I am an enthusiastic Frontend Web Developer with
              broad experience in HTML, CSS, Javascript, React, & Node.js with
              strong passion for creating and designing things that live on the
              web.
            </Text>
            <Heading
              fontSize={"1.5em"}
              mt={"20px"}
              textAlign={"center"}
              textShadow={"1px 1px 55px red"}
              w={"100%"}
              color={"whitesmoke"}
            >
              Skills
            </Heading>
            <Box
              w={"100%"}
              fontWeight={"bold"}
              textShadow={"1px 1px 55px red"}
              mt={"20px"}
              textAlign={"center"}
              color={"whitesmoke"}
            >
              <ul className="list">
                <li>HTML/CSS/JavaScrip</li>
                <Divider orientation="horizontal" />
                <li>React JS</li>
                <Divider orientation="horizontal" />
                <li>Node.js</li>
                <Divider orientation="horizontal" />
                <li>Problem Solving</li>
                <Divider orientation="horizontal" />
                <li>Restful API's</li>
                <Divider orientation="horizontal" />
                <li>Git/Github</li>
                <Divider orientation="horizontal" />
                <li>Jest</li>
              </ul>
            </Box>
          </Flex>
        </Fade>
      </Box>
    </Flex>
  );
}

export default About;
