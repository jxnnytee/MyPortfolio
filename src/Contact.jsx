import { Box, Button, Heading } from "@chakra-ui/react";
import "./Contact.css";
import Fade from "react-reveal/Fade";

function Contact() {
  return (
    <Box
      id="Contact"
      bgImg="./images/b2.jpg"
      bgAttachment={{ base: "none", md: "none", lg: "fixed"}}
      bgPos="center"
      bgSize="cover"
      w="100%"
      minH="100vh"
      color="white"
      position="relative" 
    >
      <Box
        w="100%"
        textAlign={"center"}
        bgColor={"blackAlpha.500"}
        minH="100vh"
        color="white"
      >
        <Fade duration={2000}>
          <Box>
            <Heading
              fontFamily={"Nemesis Grant"}
              textAlign={"center"}
              pt={"50vh"}
              textShadow={"1px 1px 50px red"}
            >
              Contact Me{" "}
              <Button
                boxShadow={"1px 1px 50px teal"}
                p={"15px 35px 15px 35px"}
                color={"whitesmoke"}
                bgGradient="linear(to-l, red.400, red.900)"
                _hover={{ bgColor: "black" }}
              >
                <a href="mailto:johnakinyemi94@gmail.com">Message</a>
              </Button>
            </Heading>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
}

export default Contact;
