import {
  ChatIcon,
  EmailIcon,
  ExternalLinkIcon,
  PhoneIcon,
} from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Link,
} from "@chakra-ui/react";

interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onMailModalOpen: () => void;
  onYardSignRequestOpen: () => void;
}

const MobileNavDrawer = ({
  isOpen,
  onClose,
  onMailModalOpen,
  onYardSignRequestOpen,
}: MobileNavDrawerProps) => {
  return (
    <Drawer placement="right" size="xs" isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent maxW="80%" bg="#9a1728">
        <DrawerCloseButton color="white" />
        <DrawerHeader
          p="12.5px 25px"
          color="white"
          fontWeight="semibold"
          fontSize="22.5px"
        >
          Contact Me
        </DrawerHeader>
        <DrawerBody
          display="flex"
          flexDir="column"
          gap="10px"
          px="25px"
          color="white"
          textTransform="uppercase"
          fontWeight="semibold"
          fontSize="20px"
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
            color="white"
          >
            Call
          </Button>
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
            color="white"
          >
            Text
          </Button>
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
            color="white"
          >
            Email
          </Button>
          <Accordion allowMultiple>
            <AccordionItem border="solid 1px white" borderRadius="7.5px">
              <AccordionButton
                display="flex"
                justifyContent="center"
                fontWeight="semibold"
                textTransform="uppercase"
              >
                Support
              </AccordionButton>
              <AccordionPanel
                display="flex"
                flexDir="column"
                gap="10px"
                justifyContent="center"
              >
                <Button
                  variant="link"
                  as={Link}
                  isExternal
                  href="https://www.paypal.com/donate/?hosted_button_id=SXW6BXJEW65DG"
                  rightIcon={<ExternalLinkIcon />}
                  p="5px"
                  textTransform="uppercase"
                  fontWeight="semibold"
                  color="white"
                >
                  Donate Online
                </Button>
                <Button
                  onClick={() => {
                    onClose();
                    onMailModalOpen();
                  }}
                  variant="link"
                  p="5px"
                  textTransform="uppercase"
                  fontWeight="semibold"
                  color="white"
                >
                  Mail a Check
                </Button>
                <Button
                  onClick={() => {
                    onClose();
                    onYardSignRequestOpen();
                  }}
                  variant="link"
                  p="5px"
                  textTransform="uppercase"
                  fontWeight="semibold"
                  color="white"
                >
                  Yard Sign Request
                </Button>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNavDrawer;
