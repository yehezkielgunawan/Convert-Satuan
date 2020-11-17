import {
  Box,
  Code,
  NumberInput,
  NumberInputField,
  SimpleGrid,
  Text,
} from "@chakra-ui/core";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Container } from "../components/Container";
import { CTA } from "../components/CTA";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Main } from "../components/Main";
import { SelectComponent } from "../components/SelectComponent";

const weightOptions = [
  { value: "tonne", label: "Tonne" },
  { value: "kilogram", label: "Kilogram" },
  { value: "gram", label: "Gram" },
  { value: "miligram", label: "Miligram" },
  { value: "microgram", label: "Microgram" },
  { value: "pound", label: "Pound" },
  { value: "ounce", label: "Ounce" },
];

let optionsWeight = weightOptions.map((weight) => (
  <option key={weight.value} value={weight.value}>
    {weight.label}
  </option>
));

function expo(x, f) {
  return Number.parseFloat(x).toExponential(f);
}

function TonneToKilogram(number) {
  return number * 1000;
}

function TonneToGram(number) {
  return expo(number * 1e6, 5);
}

function TonneToMiliGram(number) {
  return expo(number * 1e9, 5);
}

function TonneToMicroGram(number) {
  return expo(number * 1e12, 5);
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
  return expo(number * 1e6, 5);
}

function KiloGramToMicrogram(number) {
  return expo(number * 1e9, 5);
}

function KiloGramToPound(number) {
  return number * 2.205;
}

function KiloGramToOunce(number) {
  return number * 35.274;
}

function GramToTonne(number) {
  return expo(number / 1e6, 5);
}

function GramToKilogram(number) {
  return number / 1000;
}

function GramToMiligram(number) {
  return number * 1000;
}

function GramToMicrogram(number) {
  return expo(number * 1e6, 5);
}

function GramToPound(number) {
  return number / 454;
}

function GramToOunce(number) {
  return number / 28.35;
}

function MiligramToTonne(number) {
  return expo(number / 1e9, 5);
}

function MiligramToKilogram(number) {
  return expo(number / 1e6, 5);
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
  return expo(number / 1e12, 5);
}

function MicrogramToKilogram(number) {
  return expo(number / 1e9, 5);
}

function MicrogramToGram(number) {
  return expo(number / 1e6, 5);
}

function MicrogramToMiligram(number) {
  return number / 1000;
}

function MicrogramToPound(number) {
  return number * 4.536e8;
}

function MicrogramToOunce(number) {
  return expo(number * 2.835e7, 5);
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
  return expo(number * 2835e7, 5);
}

function OunceToPound(number) {
  return number / 16;
}

export default function weight() {
  const [baseWeight, setBaseWeight] = useState(0);
  const [resultWeight, setResultWeight] = useState(0);
  const [base, setBase] = useState("");
  const [to, setTo] = useState("");

  const getFrom = (e) => {
    setBase(e.target.value);
  };

  const getFromValue = (e) => {
    setBaseWeight(e.target.value);
  };

  const getTo = (e) => {
    setTo(e.target.value);
  };

  useEffect(() => {
    if (isNaN(resultWeight)) {
      setBaseWeight(0);
    }

    if (base === to) {
      setResultWeight(parseFloat(baseWeight));
    }

    if (base === "tonne") {
      if (to === "kilogram") {
        setResultWeight(TonneToKilogram(parseFloat(baseWeight)));
      } else if (to === "gram") {
        setResultWeight(TonneToGram(parseFloat(baseWeight)));
      } else if (to === "miligram") {
        setResultWeight(TonneToMiliGram(parseFloat(baseWeight)));
      } else if (to === "microgram") {
        setResultWeight(TonneToMicroGram(parseFloat(baseWeight)));
      } else if (to === "pound") {
        setResultWeight(TonneToPound(parseFloat(baseWeight)));
      } else if (to === "ounce") {
        setResultWeight(TonneToOunce(parseFloat(baseWeight)));
      }
    } else if (base === "kilogram") {
      if (to === "tonne") {
        setResultWeight(KiloGramToTonne(parseFloat(baseWeight)));
      } else if (to === "gram") {
        setResultWeight(KiloGramToGram(parseFloat(baseWeight)));
      } else if (to === "miligram") {
        setResultWeight(KiloGramToMiligram(parseFloat(baseWeight)));
      } else if (to === "microgram") {
        setResultWeight(KiloGramToMicrogram(parseFloat(baseWeight)));
      } else if (to === "pound") {
        setResultWeight(KiloGramToPound(parseFloat(baseWeight)));
      } else if (to === "ounce") {
        setResultWeight(KiloGramToOunce(parseFloat(baseWeight)));
      }
    } else if (base === "gram") {
      if (to === "tonne") {
        setResultWeight(GramToTonne(parseFloat(baseWeight)));
      } else if (to === "kilogram") {
        setResultWeight(GramToKilogram(parseFloat(baseWeight)));
      } else if (to === "miligram") {
        setResultWeight(GramToMiligram(parseFloat(baseWeight)));
      } else if (to === "microgram") {
        setResultWeight(GramToMicrogram(parseFloat(baseWeight)));
      } else if (to === "pound") {
        setResultWeight(GramToPound(parseFloat(baseWeight)));
      } else if (to === "ounce") {
        setResultWeight(GramToOunce(parseFloat(baseWeight)));
      }
    } else if (base === "miligram") {
      if (to === "tonne") {
        setResultWeight(MiligramToTonne(parseFloat(baseWeight)));
      } else if (to === "kilogram") {
        setResultWeight(MiligramToKilogram(parseFloat(baseWeight)));
      } else if (to === "gram") {
        setResultWeight(MiligramToGram(parseFloat(baseWeight)));
      } else if (to === "microgram") {
        setResultWeight(MiligramToMicrogram(parseFloat(baseWeight)));
      } else if (to === "pound") {
        setResultWeight(MiligramToPound(parseFloat(baseWeight)));
      } else if (to === "ounce") {
        setResultWeight(MiligramToOunce(parseFloat(baseWeight)));
      }
    } else if (base === "microgram") {
      if (to === "tonne") {
        setResultWeight(MicrogramToTonne(parseFloat(baseWeight)));
      } else if (to === "kilogram") {
        setResultWeight(MicrogramToKilogram(parseFloat(baseWeight)));
      } else if (to === "gram") {
        setResultWeight(MicrogramToGram(parseFloat(baseWeight)));
      } else if (to === "miligram") {
        setResultWeight(MicrogramToMiligram(parseFloat(baseWeight)));
      } else if (to === "pound") {
        setResultWeight(MicrogramToPound(parseFloat(baseWeight)));
      } else if (to === "ounce") {
        setResultWeight(MicrogramToOunce(parseFloat(baseWeight)));
      }
    } else if (base === "pound") {
      if (to === "tonne") {
        setResultWeight(PoundToTonne(parseFloat(baseWeight)));
      } else if (to === "kilogram") {
        setResultWeight(PoundToKilogram(parseFloat(baseWeight)));
      } else if (to === "gram") {
        setResultWeight(PoundToGram(parseFloat(baseWeight)));
      } else if (to === "miligram") {
        setResultWeight(PoundToMiligram(parseFloat(baseWeight)));
      } else if (to === "microgram") {
        setResultWeight(PoundToMicrogram(parseFloat(baseWeight)));
      } else if (to === "ounce") {
        setResultWeight(PoundToOunce(parseFloat(baseWeight)));
      }
    } else if (base === "ounce") {
      if (to === "tonne") {
        setResultWeight(OunceToTonne(parseFloat(baseWeight)));
      } else if (to === "kilogram") {
        setResultWeight(OunceToKilogram(parseFloat(baseWeight)));
      } else if (to === "gram") {
        setResultWeight(OunceToGram(parseFloat(baseWeight)));
      } else if (to === "miligram") {
        setResultWeight(OunceToMiligram(parseFloat(baseWeight)));
      } else if (to === "microgram") {
        setResultWeight(OunceToMicrogram(parseFloat(baseWeight)));
      } else if (to === "pound") {
        setResultWeight(OunceToPound(parseFloat(baseWeight)));
      }
    }
  });

  return (
    <div>
      <Head>
        <title>Weight Converter</title>
        <link rel="icon" href="https://www.flaticon.com/svg/static/icons/svg/3399/3399737.svg"></link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <Hero title="⚖️Weight Converter"></Hero>
        <Main>
          <SimpleGrid columns={2} spacing={5}>
            <Box>
              <NumberInput mb={0} min={-100}>
                <NumberInputField onChange={getFromValue} />
              </NumberInput>
              <SelectComponent
                options={optionsWeight}
                title="From"
                handleChange={getFrom}
              ></SelectComponent>
            </Box>
            <Box>
              <NumberInput mb={0} min={-100} isReadOnly>
                <NumberInputField value={resultWeight} />
              </NumberInput>
              <SelectComponent
                options={optionsWeight}
                title="To"
                handleChange={getTo}
              ></SelectComponent>
            </Box>
          </SimpleGrid>
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
    </div>
  );
}
