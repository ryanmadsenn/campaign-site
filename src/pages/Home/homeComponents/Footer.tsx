import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex flexDir="column" bg="#001f71" color="white" p="25px" gap="10px">
      <Flex>
        <Text fontWeight="semibold" fontFamily="montserrat">
          &copy; {new Date().getFullYear()} —&nbsp;
        </Text>
        <Text fontWeight="semibold" textTransform="uppercase">
          Kent Madsen for City Council
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
