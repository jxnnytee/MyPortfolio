import {
  Box,
  Flex,
  Avatar,
  IconButton,
  Button,
  Menu,
  HStack,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Text,
  Stack,
  background,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = [""];

const NavLink = ({ children, onClose }) => (
  <Menu>
    <Text
      p={3}
      _hover={{ color: "red.100" }}
      fontWeight="bold"
      fontFamily={"Nemesis Grant"}
      color={"red.300"}
    >
      <a href="#Home">Home</a>
    </Text>
    <MenuDivider />
    <Text
      p={3}
      fontWeight="bold"
      fontFamily={"Nemesis Grant"}
      _hover={{ color: "red.100" }}
      color={"red.300"}
    >
      <a href="#About">About</a>
    </Text>
    <MenuDivider />
    <Text
      p={3}
      fontWeight="bold"
      fontFamily={"Nemesis Grant"}
      _hover={{ color: "red.100" }}
      color={"red.300"}
    >
      <a href="#Projects">Projects</a>
    </Text>
    <MenuDivider />
    <Text
      p={3}
      fontWeight="bold"
      _hover={{ color: "red.100" }}
      fontFamily={"Nemesis Grant"}
      color={"red.300"}
    >
      <a href="#Contact">Contact</a>
    </Text>
    <MenuDivider />
    <Text
      p={3}
      color={"red.600"}
      fontWeight="bold"
      _hover={{ color: "red.100" }}
      textShadow={"1px 1px 50px black"}
      fontFamily={"Nemesis Grant"}
    >
      <a
        href="https://drive.google.com/file/d/1VnY0tfoEeCZ4Y6hVT4L5nZnW3tmo-XRV/view?usp=sharing"
        target="_blank"
      >
        Resume
      </a>
    </Text>
  </Menu>
);

export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4} pos="fixed" w={"100%"} top="0" bg={"transparent"} zIndex="20">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            color={"red.500"}
            variant={"red.500"}
            _hover={{ color: "red.100" }}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  bgColor="red.300"
                  alt="John Akinyemi"
                  src={"./images/ja.png"}
                />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <a href="#About">About</a>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <a href="#Contact">Contact</a>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default Navbar;
