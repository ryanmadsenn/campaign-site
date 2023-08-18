import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex maxW="1000px" m="0 auto" py="50px" gap="50px" alignItems="center">
      <Image
        src="./images/kent-madsen-headshot.png"
        alt="Kent Madsen"
        w="500px"
        borderRadius="50%"
        boxShadow="0 0 5px #000"
      />
      <Box>
        <Heading display="inline" fontSize="45px" fontWeight="bold">
          Hi, I'm{" "}
        </Heading>
        <Box display="inline-block" h="60px">
          <Heading
            display="inline"
            fontSize="45px"
            fontWeight="bold"
            whiteSpace="nowrap"
            _after={{
              content: '""',
              display: "block",
              width: "100%",
              height: "5px",
              bg: "#d32229",
              mt: "-10px",
              borderRadius: "5px",
            }}
          >
            Kent Madsen.
          </Heading>
        </Box>
        <Text fontSize="20px" fontWeight="semibold">
          For Richland City Council Position 6
        </Text>
      </Box>
    </Flex>
  );
};

export default Hero;
