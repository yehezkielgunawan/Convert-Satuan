import { Code, Text } from "@chakra-ui/core";
import { Container } from "../components/Container";
import { CTA } from "../components/CTA";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Main } from "../components/Main";

export default function Time(){
    return (
        <Container>
          <Hero title="Time Converter"></Hero>
          <Main>
            
          </Main>
          <DarkModeSwitch />
          <Footer textAlign="center">
            <Text>
              Made by Yehezkiel Gunawan using <Code>NextJS</Code> and{" "}
              <Code>Chakra UI</Code>
            </Text>
          </Footer>
          <CTA />
        </Container>
      );
}