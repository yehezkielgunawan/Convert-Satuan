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

const temperatureOptions = [
  { value: "celcius", label: "Celcius" },
  { value: "reamur", label: "Reamur" },
  { value: "kelvin", label: "Kelvin" },
  { value: "fahrenheit", label: "Fahrenheit" },
];

const negativeOrPositive = [
  {value: "positive", label: "+"},
  {value: "negative", label: "-"},
]

let optionsItems = temperatureOptions.map((temperature) => (
  <option key={temperature.value} value={temperature.value}>
    {temperature.label}
  </option>
));
let optionsOperator = negativeOrPositive.map((operator) => (
  <option key={operator.value} value={operator.value}>
    {operator.label}
  </option>
));

function CelciusToFahrenheit(number) {
  return (number * 9) / 5 + 32;
}

function CelciusToReamur(number) {
  return (number * 4) / 5;
}

function CelciusToKelvin(number) {
  return number + 273.15;
}

function ReamurToCelcius(number) {
  return (number * 5) / 4;
}

function ReamurToFahrenheit(number) {
  return (number * 9) / 4 + 32;
}

function ReamurToKelvin(number) {
  return (number * 5) / 4 + 273.15;
}

function KelvinToCelcius(number) {
  return number - 273.15;
}

function KelvinToFahrenheit(number) {
  return (number * 9) / 5 - 459.67;
}

function KelvinToReamur(number) {
  return ((number - 273.15) * 4) / 5;
}

function FahrenheitToCelcius(number) {
  return (number - 32) / 9 / 5;
}

function FahrenheitToReamur(number) {
  return (number - 32) / 9 / 4;
}

function FahrenheitToKelvin(number) {
  return (number + 459.67) / 9 / 5;
}

export default function Temperature() {
  const [baseTemperature, setBaseTemperature] = useState(0);
  const [resultTemperature, setResultTemperature] = useState(0);
  const [operator, setOperator] = useState(0);
  const [base, setBase] = useState("");
  const [to, setTo] = useState("");

  const getFrom = (e) => {
    setBase(e.target.value);
  };

  const getFormValue = (e) => {
    if(operator === "positive"){
      setBaseTemperature(e.target.value);
    } else {
      setBaseTemperature(e.target.value * - 1);
    }
  };

  const getTo = (e) => {
    setTo(e.target.value);
  };

  const getOperator = e => {
    setOperator(e.target.value);
  }

  useEffect(() => {
    if (isNaN(resultTemperature)) {
      setBaseTemperature(0);
    }

    if (base === to) {
      setResultTemperature(parseFloat(baseTemperature));
    }


    if (base === "celcius") {
      if (to === "fahrenheit") {
        setResultTemperature(CelciusToFahrenheit(parseFloat(baseTemperature)));
      } else if (to === "reamur") {
        setResultTemperature(CelciusToReamur(parseFloat(baseTemperature)));
      } else if (to === "kelvin") {
        setResultTemperature(CelciusToKelvin(parseFloat(baseTemperature)));
      }
    } else if (base === "reamur") {
      if (to === "celcius") {
        setResultTemperature(ReamurToCelcius(parseFloat(baseTemperature)));
      } else if (to === "fahrenheit") {
        setResultTemperature(ReamurToFahrenheit(parseFloat(baseTemperature)));
      } else if (to === "kelvin") {
        setResultTemperature(ReamurToKelvin(parseFloat(baseTemperature)));
      }
    } else if (base === "kelvin") {
      if (to === "celcius") {
        setResultTemperature(KelvinToCelcius(parseFloat(baseTemperature)));
      } else if (to === "fahrenheit") {
        setResultTemperature(KelvinToFahrenheit(parseFloat(baseTemperature)));
      } else if (to === "reamur") {
        setResultTemperature(KelvinToReamur(parseFloat(baseTemperature)));
      }
    } else if (base === "fahrenheit") {
      if (to === "celcius") {
        setResultTemperature(FahrenheitToCelcius(parseFloat(baseTemperature)));
      } else if (to === "kelvin") {
        setResultTemperature(FahrenheitToKelvin(parseFloat(baseTemperature)));
      } else if (to === "reamur") {
        setResultTemperature(FahrenheitToReamur(parseFloat(baseTemperature)));
      }
    }
  });

  return (
    <div>
      <Head>
        <title>Temperature Converter</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <Hero title="Temperature Converter"></Hero>
        <Main>
          <SimpleGrid columns={2} spacing={5}>
            <Box>
              <NumberInput mb={0} min={-100}>
                <SelectComponent options={optionsOperator}></SelectComponent>
                <NumberInputField onChange={getFormValue} />
              </NumberInput>
              <SelectComponent
                options={optionsItems}
                title="From"
                handleChange={getFrom}
              ></SelectComponent>
            </Box>
            <Box>
              <NumberInput mb={0} isReadOnly>
                <NumberInputField value={resultTemperature} />
              </NumberInput>
              <SelectComponent
                options={optionsItems}
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
