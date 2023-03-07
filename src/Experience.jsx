import {
  Box,
  Divider,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import "./Experience.css";
import Fade from "react-reveal/Fade";

function Experience() {
  return (
    <Box
      id=""
      p={5}
      bgImg={"./images/s3.jpg"}
      bgAttachment={"fixed"}
      bgPos={"center"}
      bgSize={"cover"}
      w="100%"
      minH="100vh"
      color="white"
    >
      <Box w="100%" minH="100vh" color="white">
        <Fade duration={2000}>
          <Flex
            className="navbar"
            borderRadius={20}
            minH="100vh"
            w={{ base: "100%", md: "100%", lg: "60%" }}
            m={"auto"}
            justifyContent="center"
            alignItems="center"
            flexDir="column"
          >
            <Heading
              textAlign={"center"}
              p={2}
              fontFamily={"Nemesis Grant"}
              textShadow={"1px 1px 50px red"}
            >
              Where I've Worked
            </Heading>
            <Text
              fontSize={"1.5em"}
              mt={"20px"}
              textAlign={"center"}
              w={"80vw"}
              color={"whitesmoke"}
            >
              Junior Frontend Developer - EMG Contractors Ltd
            </Text>
            <Text
              fontSize={"1em"}
              mt={"20px"}
              textShadow={"1px 1px 55px yellow"}
              textAlign={"center"}
              w={"80vw"}
              color={"whitesmoke"}
            >
              January 2022 - January 2023
            </Text>
            <Box
              w={"100%"}
              p={5}
              mt={"20px"}
              textShadow={"1px 1px 55px yellow"}
              textAlign={"center"}
              color={"whitesmoke"}
            >
              <ul className="list">
                <li>Assisting with the creation of websites</li>
                <Divider orientation="horizontal" />
                <li>
                  Updating existing web applications using scripting languages
                </li>
                <Divider orientation="horizontal" />
                <li>Assisting with coding</li>
                <Divider orientation="horizontal" />
                <li>Working under the supervision of senior developers</li>
                <Divider orientation="horizontal" />
                <li>Assisting with design adjustments</li>
              </ul>
            </Box>
          </Flex>
        </Fade>
      </Box>
    </Box>
  );
}

export default Experience;
