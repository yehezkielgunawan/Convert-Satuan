import {
  Link as ChakraLink,
  Text,
  Code,
  Icon,
  SimpleGrid,
  Box,
} from "@chakra-ui/core";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";

const Index = () => (
  <Container>
    <Hero title="CONVERT WHAT?" />
    <Main>
      <Text textAlign="center">Select what you want to convert.</Text>

      <SimpleGrid
        columns="2"
        spacing="8"
        p="10"
        textAlign="center"
        rounded="lg"
        minChildWidth="240px"
      >
        <ChakraLink href="/temperature">
          <Box boxShadow="base" p="6" rounded="md" bg="green.400">
            Temperature <Icon name="external-link"></Icon>
          </Box>
        </ChakraLink>
        <ChakraLink href="/speed">
          <Box boxShadow="base" p="6" rounded="md" bg="green.400">
            Speed <Icon name="external-link"></Icon>
          </Box>
        </ChakraLink>
        <ChakraLink href="/weight">
          <Box boxShadow="base" p="6" rounded="md" bg="green.400">
            Weight <Icon name="external-link"></Icon>
          </Box>
        </ChakraLink>
        <ChakraLink href="/time">
          <Box boxShadow="base" p="6" rounded="md" bg="green.400">
            Time <Icon name="external-link"></Icon>
          </Box>
        </ChakraLink>
      </SimpleGrid>
    </Main>

    <DarkModeSwitch />
    <Footer textAlign="center">
      <Text>
        Made by Yehezkiel Gunawan using <Code>NextJS</Code> and{" "}
        <Code>Chakra UI</Code>
      </Text>
    </Footer>
    <CTA ishome />
  </Container>
);

export default Index;
