import {
  Box,
  Grid,
  Flex,
  Heading,
  Text,
  List,
  ListIcon,
  ListItem,
  useBreakpointValue,
  Accordion,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import PledgeAccordionItem from "./PledgeAccordionItem";

const Pledges = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Box bg="#9a1728" p="25px" color="white">
      {isMobile ? (
        <Flex flexDir="column" gap="15px">
          <Heading fontSize="22.5px" fontWeight="semibold" textAlign="center">
            As your public servant I pledge to:
          </Heading>
          <Accordion display="flex" flexDir="column" gap="20px" allowMultiple>
            <PledgeAccordionItem
              title="Promote Conservative Values and Fiscal Responsibility"
              pledges={[
                "Upholding conservative principles and values",
                "Ensuring efficient use of taxpayer funds",
                "Advocating for limited government intervention",
              ]}
            />
            <PledgeAccordionItem
              title="Balance Economic Growth and Heritage Preservation"
              pledges={[
                "Attracting businesses and creating job opportunities",
                "Advocating for small-scale nuclear power for clean and reliable energy.",
                "Maintaining city character and heritage during development",
              ]}
            />
            <PledgeAccordionItem
              title="Enhance Public Safety and Community Well-being"
              pledges={[
                "Strengthening public safety through zoning and urban planning",
                "Collaborating with stakeholders for city improvement",
                "Supporting law enforcement and emergency services for neighborhood security",
              ]}
            />
          </Accordion>
        </Flex>
      ) : (
        <Flex
          flexDir="column"
          maxW="1000px"
          m="0 auto"
          color="white"
          alignItems="center"
          gap="25px"
        >
          <Heading fontSize="35px" fontWeight="semibold">
            As your public servant I pledge to:
          </Heading>
          <Grid gap="25px" templateColumns="1fr 1fr 1fr">
            <Flex flexDir="column" gap="20px">
              <Text fontSize="20px" fontWeight="semibold">
                Promote Conservative Values and Fiscal Responsibility by:
              </Text>
              <List spacing={10}>
                <ListItem fontSize="20px">
                  <Flex gap="10px">
                    <ListIcon
                      as={CheckCircleIcon}
                      color="#001f71"
                      bg="white"
                      borderRadius="50%"
                      p="1px"
                      mt="5px"
                    />
                    <Text>Upholding conservative principles and values</Text>
                  </Flex>
                </ListItem>
                <ListItem fontSize="20px">
                  <Flex gap="10px">
                    <ListIcon
                      as={CheckCircleIcon}
                      color="#001f71"
                      bg="white"
                      borderRadius="50%"
                      p="1px"
                      mt="5px"
                    />
                    <Text>Ensuring efficient use of taxpayer funds</Text>
                  </Flex>
                </ListItem>
                <ListItem fontSize="20px">
                  <Flex gap="10px">
                    <ListIcon
                      as={CheckCircleIcon}
                      color="#001f71"
                      bg="white"
                      borderRadius="50%"
                      p="1px"
                      mt="5px"
                    />
                    <Text>Advocating for limited government intervention</Text>
                  </Flex>
                </ListItem>
              </List>
            </Flex>
            <Flex flexDir="column" gap="20px">
              <Text fontSize="20px" fontWeight="semibold">
                Balance Economic Growth and Heritage Preservation by:
              </Text>
              <List spacing={10}>
                <ListItem fontSize="20px">
                  <Flex gap="10px">
                    <ListIcon
                      as={CheckCircleIcon}
                      color="#001f71"
                      bg="white"
                      borderRadius="50%"
                      p="1px"
                      mt="5px"
                    />
                    <Text>
                      Attracting businesses and creating job opportunities
                    </Text>
                  </Flex>
                </ListItem>
                <ListItem fontSize="20px">
                  <Flex gap="10px">
                    <ListIcon
                      as={CheckCircleIcon}
                      color="#001f71"
                      bg="white"
                      borderRadius="50%"
                      p="1px"
                      mt="5px"
                    />
                    <Text>
                      Advocating for small-scale nuclear power for clean and
                      reliable energy.
                    </Text>
                  </Flex>
                </ListItem>
                <ListItem fontSize="20px">
                  <Flex gap="10px">
                    <ListIcon
                      as={CheckCircleIcon}
                      color="#001f71"
                      bg="white"
                      borderRadius="50%"
                      p="1px"
                      mt="5px"
                    />
                    <Text>
                      Maintaining city character and heritage during development
                    </Text>
                  </Flex>
                </ListItem>
              </List>
            </Flex>
            <Flex flexDir="column" gap="20px">
              <Text fontSize="20px" fontWeight="semibold">
                Enhance Public Safety and Community Well-being by:
              </Text>
              <List spacing={10}>
                <ListItem fontSize="20px">
                  <Flex gap="10px">
                    <ListIcon
                      as={CheckCircleIcon}
                      color="#001f71"
                      bg="white"
                      borderRadius="50%"
                      p="1px"
                      mt="5px"
                    />
                    <Text>
                      Strengthening public safety through zoning and urban
                      planning
                    </Text>
                  </Flex>
                </ListItem>
                <ListItem fontSize="20px">
                  <Flex gap="10px">
                    <ListIcon
                      as={CheckCircleIcon}
                      color="#001f71"
                      bg="white"
                      borderRadius="50%"
                      p="1px"
                      mt="5px"
                    />
                    <Text>
                      Collaborating with stakeholders for city improvement
                    </Text>
                  </Flex>
                </ListItem>
                <ListItem fontSize="20px">
                  <Flex gap="10px">
                    <ListIcon
                      as={CheckCircleIcon}
                      color="#001f71"
                      bg="white"
                      borderRadius="50%"
                      p="1px"
                      mt="5px"
                    />
                    <Text>
                      Supporting law enforcement and emergency services for
                      neighborhood security
                    </Text>
                  </Flex>
                </ListItem>
              </List>
            </Flex>
          </Grid>
        </Flex>
      )}
    </Box>
  );
};

export default Pledges;
