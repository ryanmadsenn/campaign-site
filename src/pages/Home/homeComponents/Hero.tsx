import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
  Modal,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  Button,
} from "@chakra-ui/react";
import { atom, useAtom } from "jotai";

export const aboutMeOpenAtom = atom(false);

const Hero = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const [isOpen, setIsOpen] = useAtom(aboutMeOpenAtom);

  return (
    <Flex
      flexDir={{ base: "column", lg: "row" }}
      maxW="1000px"
      m="0 auto"
      py="50px"
      px={{ base: "20px", lg: "0" }}
      gap="50px"
      alignItems="center"
    >
      <Image
        src="./images/kent-madsen-headshot.webp"
        alt="Kent Madsen"
        w={{ base: "400px", lg: "500px" }}
        borderRadius="50%"
        boxShadow="0 0 5px #000"
      />
      <Flex
        flexDir="column"
        alignItems={{ base: "center", lg: "flex-start" }}
        textAlign={{ base: "justify", lg: "left" }}
      >
        <Box>
          <Heading
            display="inline"
            fontSize={{ base: "32.5px", md: "45px" }}
            fontWeight="bold"
          >
            Hi, I'm{" "}
          </Heading>
          <Box display="inline-block" h="60px">
            <Heading
              display="inline"
              fontSize={{ base: "32.5px", md: "45px" }}
              fontWeight="bold"
              whiteSpace="nowrap"
              _after={{
                content: '""',
                display: "block",
                width: "100%",
                height: "5px",
                bg: "#d32229",
                borderRadius: "5px",
                mt: "-2.5px",
              }}
            >
              Kent Madsen.
            </Heading>
          </Box>
        </Box>
        <Flex flexDir="column" h="30px" w={{ base: "", lg: "95%" }} gap="5px">
          <Flex alignItems="center" gap="5px">
            <Text fontSize={{ base: "18px", md: "20px" }} fontWeight="semibold">
              Running for Richland City Council{isMobile ? "" : " Pos. 6"}
            </Text>
          </Flex>
          {isMobile && (
            <Button onClick={() => setIsOpen(true)}>About Me</Button>
          )}
        </Flex>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          size="xl"
          isCentered
        >
          <ModalOverlay />
          <ModalContent pb="20px">
            <ModalCloseButton />
            <ModalHeader>About Me</ModalHeader>
            <ModalBody maxH="500px" overflowY="scroll">
              <Text>
                I was born and raised in Richland. I attended Jefferson
                Elementary, Chief Joseph Junior High School, and Richland High
                School, which was also known as Columbia High School at the
                time. Afterward, I attended Columbia Basin College before
                working at Boeing in Seattle. During my time in Seattle, I
                married Kathleen Whiting, who is also from Richland. We then
                moved to Salt Lake City, UT, where I managed Sales Training
                Incorporated, a private vocational school, for 3 years. It was
                during our time there that our first child was born.
                Subsequently, we returned to Richland, where I worked for
                General Electric for 3 years and our second child was born.
                <br />
                <br />
                After transferring to Spokane, two more children joined our
                family. Given my career in sales and sales management, I
                excelled in various roles, receiving multiple awards,
                commendations, and accolades. Eventually, we settled back in
                Richland, building our home in south Richland after our youngest
                child graduated from Mead High School in 2001. We purchased a
                lot off Gage Blvd to construct our forever home.
                <br />
                <br />
                A surprise came when our builder informed me that our home
                exceeded the allowable 33% lot coverage. Seeking to change this
                restrictive 1958 code, I collaborated with the Home Builders of
                Tri-Cities. I presented my case before the Planning Commission,
                advocating for a more lenient lot coverage allowance. As a
                result, the code was modified to permit up to 40% lot coverage,
                enabling me to proceed with building our home.
                <br />
                <br />
                Motivated by this experience, I pursued a position on the
                Planning Commission and was appointed to a vacant seat in June
                2005. I served on the commission until March 2019, including two
                2-year terms as Chairman.
                <br />
                <br />I would be honored to serve on the city council and
                represent you, the citizens of Richland, should I be elected.
              </Text>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </Flex>
  );
};

export default Hero;
