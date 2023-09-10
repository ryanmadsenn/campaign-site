import { Box, BoxProps, Heading, Text } from "@chakra-ui/react";

interface SwiperContentProps extends BoxProps {
  title: string;
  body: string;
}

const SwiperContent = ({ title, body, ...props }: SwiperContentProps) => {
  return (
    <Box
      maxW={{ base: "calc(100% - 120px)", lg: "1000px" }}
      m="0 auto"
      {...props}
    >
      <Heading
        fontSize={{ base: "25px", lg: "35px" }}
        fontWeight="semibold"
        textAlign="center"
      >
        {title}
      </Heading>
      <Text fontSize={{ base: "17.5px", lg: "20px" }}>{body}</Text>
    </Box>
  );
};

export default SwiperContent;
