import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Flex,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";

interface PledgeAccordionItemProps {
  title: string;
  pledges: string[];
}

const PledgeAccordionItem = ({ title, pledges }: PledgeAccordionItemProps) => {
  return (
    <AccordionItem
      bg="#AF1728"
      p="10px"
      borderRadius="10px"
      maxW="600px"
      w="100%"
      m="0 auto"
    >
      <AccordionButton
        fontWeight="semibold"
        justifyContent="center"
        flexShrink={0}
      >
        {title}
      </AccordionButton>
      <AccordionPanel my="10px" textAlign="center">
        <List spacing={5} display="inline-block" textAlign="left" maxW="400px">
          {pledges.map((pledge) => (
            <ListItem fontSize="15px">
              <Flex gap="10px">
                <ListIcon
                  as={CheckCircleIcon}
                  color="#001f71"
                  bg="white"
                  borderRadius="50%"
                  p="1px"
                  mt="5px"
                />
                <Text>{pledge}</Text>
              </Flex>
            </ListItem>
          ))}
        </List>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default PledgeAccordionItem;
