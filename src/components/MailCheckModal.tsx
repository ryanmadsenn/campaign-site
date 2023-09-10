import {
  Modal,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  Text,
} from "@chakra-ui/react";

interface MailCheckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MailCheckModal = ({ isOpen, onClose }: MailCheckModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent pb="10px">
        <ModalCloseButton />
        <ModalHeader>Mail to:</ModalHeader>
        <ModalBody>
          <Text fontWeight="semibold">Kent Madsen</Text>
          <Text fontWeight="semibold">1621 Venus Cir</Text>
          <Text fontWeight="semibold">Richland, WA 99352</Text>
          <br />
          <Text fontWeight="semibold">Please make checks payable to:</Text>
          <Text fontWeight="semibold">Elect Kent Madsen</Text>
          <br />
          <Text fontWeight="semibold">Thank you for your support!</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MailCheckModal;
