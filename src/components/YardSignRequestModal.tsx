import {
  Button,
  Center,
  Flex,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Input from "./Input";

interface YardSignRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const YardSignRequestModal = ({
  isOpen,
  onClose,
}: YardSignRequestModalProps) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showSubmittedMessage, setShowSubmittedMessage] = useState(false);

  return (
    <Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent pb="10px" h="603px">
        <ModalCloseButton />
        <ModalHeader>Yard Sign Request</ModalHeader>
        <ModalBody>
          {showSubmittedMessage ? (
            success ? (
              <Center h="100%">
                <Text fontWeight="semibold">
                  Thank you for your request! We will contact you soon!
                </Text>
              </Center>
            ) : (
              <Center h="100%">
                <Text fontWeight="semibold">
                  An error occurred. Please try again later.
                </Text>
              </Center>
            )
          ) : (
            <Formik
              initialValues={{
                fname: "",
                lname: "",
                phone: "",
                email: "",
                addressLine1: "",
                addressLine2: "",
                city: "",
                state: "",
                zip: "",
                message: "",
              }}
              validationSchema={Yup.object().shape({
                fname: Yup.string().required("Required"),
                lname: Yup.string().required("Required"),
                phone: Yup.string().required("Required"),
                email: Yup.string().required("Required"),
                addressLine1: Yup.string().required("Required"),
                addressLine2: Yup.string(),
                city: Yup.string().required("Required"),
                state: Yup.string().required("Required"),
                zip: Yup.string().required("Required"),
                message: Yup.string(),
              })}
              onSubmit={async (values) => {
                setLoading(true);
                const options = {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(values),
                };

                const { ok } = await fetch(
                  "https://yardsignrequest-yogiarmxeq-uc.a.run.app",
                  options
                );

                setLoading(false);

                if (ok) {
                  setSuccess(true);
                  setShowSubmittedMessage(true);
                } else {
                  setSuccess(false);
                  setShowSubmittedMessage(true);
                }
              }}
            >
              {({ handleSubmit }) => (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                  }}
                >
                  <Flex gap="10px">
                    <Input
                      name="fname"
                      type="text"
                      label="First Name"
                      placeholder="John"
                    />
                    <Input
                      name="lname"
                      type="text"
                      label="Last Name"
                      placeholder="Doe"
                    />
                  </Flex>
                  <Flex gap="10px">
                    <Input
                      name="phone"
                      type="tel"
                      label="Phone"
                      placeholder="(509) 123-4567"
                      _input={{
                        fontFamily: "Montserrat",
                      }}
                    />
                    <Input
                      name="email"
                      type="email"
                      label="Email"
                      placeholder="john.doe@email.com"
                    />
                  </Flex>
                  <Flex gap="10px">
                    <Input
                      name="addressLine1"
                      type="text"
                      label="Address Line 1"
                      placeholder="123 Main St"
                    />
                    <Input
                      name="addressLine2"
                      type="text"
                      label="Address Line 2"
                      placeholder="Apt 123"
                    />
                  </Flex>
                  <Flex gap="10px">
                    <Input
                      name="city"
                      type="text"
                      label="City"
                      placeholder="Richland"
                    />
                    <Input
                      name="state"
                      type="text"
                      label="State"
                      placeholder="WA"
                    />
                    <Input
                      name="zip"
                      type="text"
                      label="Zip"
                      placeholder="99352"
                      _input={{
                        fontFamily: "Montserrat",
                      }}
                    />
                  </Flex>
                  <Flex flexDir="column">
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <Textarea
                      name="message"
                      placeholder="Write any additional information here."
                      _placeholder={{
                        fontFamily: "Montserrat",
                      }}
                    />
                  </Flex>
                  <Button
                    type="submit"
                    alignSelf="flex-end"
                    colorScheme="blue"
                    variant="outline"
                    isLoading={loading}
                  >
                    Submit
                  </Button>
                </form>
              )}
            </Formik>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default YardSignRequestModal;
