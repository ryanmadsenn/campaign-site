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
            outline="none"
            rightIcon={<PhoneIcon boxSize="15px" />}
            p="5px"
            border="solid 1px white"
            borderRadius="7.5px"
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
            outline="none"
            rightIcon={<ChatIcon boxSize="15px" />}
            p="5px"
            border="solid 1px white"
            borderRadius="7.5px"
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
            outline="none"
            rightIcon={<EmailIcon />}
            p="5px"
            border="solid 1px white"
            borderRadius="7.5px"
            textTransform="uppercase"
            fontWeight="semibold"
          >
            Email
          </Button>
        </Tooltip>
        <Flex alignItems="center" gap="5px">
          <Link
            href="https://www.paypal.com/donate/?hosted_button_id=SXW6BXJEW65DG"
            alignItems="center"
            textTransform="uppercase"
            fontWeight="semibold"
            isExternal
          >
            Support
          </Link>
          <ExternalLinkIcon />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
