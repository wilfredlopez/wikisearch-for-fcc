import {
  Box,
  Flex,
  Heading,
  Icon,
  // Text
} from "@chakra-ui/core"
import React from "react" // PropsWithChildren

interface Props {}
// const MenuItems: React.FC<PropsWithChildren<{}>> = ({ children }) => (
//   <Text
//     //   mt={{ base: 4, md: 0 }}
//     mr={6}
//     display="block"
//   >
//     {children}
//   </Text>
// )

const Header = (props: Props) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      alignItems="center"
      justifyItems="center"
      wrap="wrap"
      padding="1.5rem"
      bg="red.500"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          <Icon name="search" color="white" /> WikiSearch
        </Heading>
      </Flex>

      <Box
        display="flex"
        my="auto"
        alignItems="center"
        justifyContent="center"
        // flexGrow={1}
      >
        {/* <MenuItems>Search</MenuItems>
        <MenuItems>About</MenuItems> */}
      </Box>
    </Flex>
  )
}

export default Header
