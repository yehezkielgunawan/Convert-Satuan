import { Code, Text } from "@chakra-ui/core";
import { Container } from "../components/Container";
import { CTA } from "../components/CTA";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Main } from "../components/Main";

const weightOptions = [
  { value: "tonne", label: "Tonne" },
  { value: "kilogram", label: "Kilogram" },
  { value: "gram", label: "Gram" },
  { value: "miligram", label: "Miligram" },
  { value: "microgram", label: "Microgram" },
  { value: "pound", label: "Pound" },
  { value: "ounce", label: "Ounce" },
];

let optionsItems = weightOptions.map((weight) => (
  <option key={weight.value} value={weight.value}>
    {weight.label}
  </option>
));

function TonneToKilogram(number) {
  return number * 1000;
}

function TonneToGram(number) {
  return number * 1e6;
}

function TonneToMiliGram(number) {
  return number * 1e9;
}

function TonneToMicroGram(number) {
  return number * 1e12;
}

function TonneToPound(number) {
  return number * 2205;
}

function TonneToOunce(number) {
  return number * 35274;
}

function KiloGramToTonne(number) {
  return number / 1000;
}

function KiloGramToGram(number) {
  return number * 1000;
}

function KiloGramToMiligram(number) {
  return number * 1e6;
}

function KiloGramToMicrogram(number) {
  return number * 1e9;
}

function KiloGramToPound(number) {
  return number * 2.205;
}

function KiloGramToOunce(number) {
  return number * 35.274;
}

function GramToTonne(number) {
  return number / 1e6;
}

function GramToKilogram(number) {
  return number / 1000;
}

function GramToMiligram(number) {
  return number * 1000;
}

function GramToMicrogram(number) {
  return number * 1e6;
}

function GramToPound(number) {
  return number / 454;
}

function GramToOunce(number) {
  return number / 28.35;
}

function MiligramToTonne(number) {
  return number / 1e9;
}

function MiligramToKilogram(number) {
  return number / 1e6;
}

function MiligramToGram(number) {
  return number / 1000;
}

function MiligramToMicrogram(number) {
  return number * 1000;
}

function MiligramToPound(number) {
  return number / 453592;
}

function MiligramToOunce(number) {
  return number / 28350;
}

function MicrogramToTonne(number) {
  return number / 1e12;
}

function MicrogramToKilogram(number) {
  return number / 1e9;
}

function MicrogramToGram(number) {
  return number / 1e6;
}

function MicrogramToMiligram(number) {
  return number / 1000;
}

function MicrogramToPound(number) {
  return number * 4.536e8;
}

function MicrogramToOunce(number) {
  return number * 2.835e7;
}

function PoundToTonne(number) {
  return number / 2205;
}

function PoundToKilogram(number) {
  return number / 2.205;
}

function PoundToGram(number) {
  return number / 454;
}

function PoundToMiligram(number) {
  return number * 453592;
}

function PoundToMicrogram(number) {
  return number * 4.536e8;
}

function PoundToOunce(number) {
  return number * 16;
}

function OunceToTonne(number) {
  return number / 351274;
}

function OunceToKilogram(number) {
  return number / 35.274;
}

function OunceToGram(number) {
  return number * 28.35;
}

function OunceToMiligram(number) {
  return number * 28350;
}

function OunceToMicrogram(number) {
  return number * 2835e7;
}

function OunceToPound(number) {
  return number / 16;
}

export default function weight() {
  return (
    <Container>
      <Hero title="Weight Converter"></Hero>
      <Main></Main>
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
