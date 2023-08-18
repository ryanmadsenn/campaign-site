import {
  Box,
  Grid,
  Flex,
  Heading,
  Text,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const Pledges = () => {
  // bg="linear-gradient(#001f71, #9a1728)"
  return (
    <Box
      bg="#9a1728"
      // borderTop="solid 5px #d32229"
      // borderBottom="solid 5px #d32229"
      h="500px"
      p="25px"
    >
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
    </Box>
  );
};

export default Pledges;
