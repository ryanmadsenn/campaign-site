import {
  Button,
  Flex,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
} from "@chakra-ui/react";
import {
  EmailIcon,
  ExternalLinkIcon,
  PhoneIcon,
  ChatIcon,
} from "@chakra-ui/icons";

interface DesktopNavButtonsProps {
  setAboutMeOpen: (value: boolean) => void;
  onMailModalOpen: () => void;
  onYardSignRequestOpen: () => void;
}

const DesktopNavButtons = ({
  setAboutMeOpen,
  onMailModalOpen,
  onYardSignRequestOpen,
}: DesktopNavButtonsProps) => {
  return (
    <Flex gap="20px">
      <Button
        variant="outline"
        h={9}
        color="white"
        textTransform="uppercase"
        _hover={{
          bg: "transparent",
        }}
        onClick={() => setAboutMeOpen(true)}
      >
        About Me
      </Button>
      <Popover>
        <PopoverTrigger>
          <Button
            variant="outline"
            h={9}
            color="white"
            textTransform="uppercase"
            _hover={{
              bg: "transparent",
            }}
          >
            Contact
          </Button>
        </PopoverTrigger>
        <PopoverContent color="black">
          <PopoverArrow />
          <PopoverBody display="flex" justifyContent="space-between" gap="10px">
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
                rightIcon={<PhoneIcon boxSize="15px" />}
                p="5px"
                borderRadius="7.5px"
                textTransform="uppercase"
                fontWeight="semibold"
                _hover={{
                  textDecor: "none",
                }}
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
                rightIcon={<ChatIcon boxSize="15px" />}
                p="5px"
                borderRadius="7.5px"
                textTransform="uppercase"
                fontWeight="semibold"
                _hover={{
                  textDecor: "none",
                }}
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
                rightIcon={<EmailIcon />}
                p="5px"
                borderRadius="7.5px"
                textTransform="uppercase"
                fontWeight="semibold"
                _hover={{
                  textDecor: "none",
                }}
              >
                Email
              </Button>
            </Tooltip>
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger>
          <Button
            variant="outline"
            h={9}
            color="white"
            textTransform="uppercase"
            _hover={{
              bg: "transparent",
            }}
          >
            Support
          </Button>
        </PopoverTrigger>
        <PopoverContent color="black" width="100%">
          <PopoverArrow />
          <PopoverBody display="flex" justifyContent="space-between" gap="10px">
            <Button
              as={Link}
              href="https://www.paypal.com/donate/?hosted_button_id=SXW6BXJEW65DG"
              isExternal
              rightIcon={<ExternalLinkIcon />}
            >
              Donate Online
            </Button>
            <Button onClick={onMailModalOpen}>Mail a Check</Button>
            <Button onClick={onYardSignRequestOpen}>Yard Sign Request</Button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};

export default DesktopNavButtons;
