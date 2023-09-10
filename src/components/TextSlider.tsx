import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

interface TextSliderProps {
  items: string[];
  animationDuration: number;
}

const TextSlider = ({ items, animationDuration }: TextSliderProps) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Text
        color="white"
        fontWeight="semibold"
        pos="absolute"
        p="0 30px 0 5px"
        bg="linear-gradient(90deg, #9a1728, #9a1728, #9a1728, #9a1728, transparent)"
        zIndex={1}
      >
        Endorsed By:
      </Text>
      <Box
        bg="#9a1728"
        color="white"
        fontWeight="semibold"
        sx={{
          ".slide": {
            animation: `slide ${animationDuration}s linear infinite`,
          },
          "@keyframes slide": {
            "0%": {
              transform: "translateX(0)",
            },
            "100%": {
              transform: `translateX(${isMobile ? "-" : ""}100%)`,
            },
          },
        }}
        h="25px"
        overflow="hidden"
        style={{ direction: isMobile ? "ltr" : "rtl" }}
      >
        <Flex overflow="hidden">
          <Flex className="slide" gap="50px">
            {items.map((item, i) => (
              <Text
                whiteSpace="nowrap"
                mr={i === 0 ? (isMobile ? "0" : "50px") : "0"}
                ml={i === 0 ? (isMobile ? "50px" : "0") : "0"}
              >
                {item}
              </Text>
            ))}
          </Flex>
          <Flex className="slide" gap="50px">
            {items.map((item, i) => (
              <Text
                whiteSpace="nowrap"
                mr={i === 0 ? (isMobile ? "0" : "50px") : "0"}
                ml={i === 0 ? (isMobile ? "50px" : "0") : "0"}
              >
                {item}
              </Text>
            ))}
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default TextSlider;
