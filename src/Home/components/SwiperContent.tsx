import { Box, BoxProps, Heading, Text } from "@chakra-ui/react";

interface SwiperContentProps extends BoxProps {
  title: string;
  body: string;
}

const SwiperContent = ({ title, body, ...props }: SwiperContentProps) => {
  return (
    <Box maxW="1000px" m="0 auto" {...props}>
      <Heading fontSize="35px" fontWeight="semibold" textAlign="center">
        {title}
      </Heading>
      <Text fontSize="20px">{body}</Text>
    </Box>
  );
};

export default SwiperContent;
