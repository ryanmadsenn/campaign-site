import { Flex, Link, Button, Tooltip } from "@chakra-ui/react";
import {
  PhoneIcon,
  EmailIcon,
  ChatIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";

const Header = () => {
  return (
    <Flex
      bg="#001f71"
      color="white"
      justifyContent="end"
      alignItems="center"
      p="15px"
    >
      <Flex gap="20px">
        <Tooltip
          hasArrow
          label="(509) 302-7545"
          aria-label="Call Phone Number"
          bg="black"
          color="white"
          p="10px"
          borderRadius="5px"
          fontWeight="semibold"
          fontFamily="Montserrat"
        >
          <Button
            as={Link}
            href="tel:+15093027545"
            variant="outline"
            outlineColor="white"
            rightIcon={<PhoneIcon boxSize="15px" />}
            p="5px"
            outline="solid 1px white"
            borderRadius="5px"
            textTransform="uppercase"
            fontWeight="semibold"
          >
            Call
          </Button>
        </Tooltip>
        <Tooltip
          hasArrow
          label="(509) 302-7545"
          aria-label="Text Phone Number"
          bg="black"
          color="white"
          p="10px"
          borderRadius="5px"
          fontWeight="semibold"
          fontFamily="Montserrat"
        >
          <Button
            as={Link}
            href="sms:+15093027545"
            variant="outline"
            outlineColor="white"
            rightIcon={<ChatIcon boxSize="15px" />}
            p="5px"
            outline="solid 1px white"
            borderRadius="5px"
            textTransform="uppercase"
            fontWeight="semibold"
          >
            Text
          </Button>
        </Tooltip>
        <Tooltip
          hasArrow
          label="wkmadsen1@gmail.com"
          aria-label="Email"
          bg="black"
          color="white"
          p="10px"
          borderRadius="5px"
          fontWeight="semibold"
          fontFamily="Montserrat"
        >
          <Button
            as={Link}
            href="mailto:wkmadsen1@gmail.com"
            variant="outline"
            outlineColor="white"
            rightIcon={<EmailIcon />}
            p="5px"
            outline="solid 1px white"
            borderRadius="5px"
            textTransform="uppercase"
            fontWeight="semibold"
          >
            Email
          </Button>
        </Tooltip>
        {/* <Flex alignItems="center" gap="5px">
          <Link
            href="#"
            alignItems="center"
            textTransform="uppercase"
            fontWeight="semibold"
            isExternal
          >
            Support
          </Link>
          <ExternalLinkIcon />
        </Flex> */}
      </Flex>
    </Flex>
  );
};

export default Header;
