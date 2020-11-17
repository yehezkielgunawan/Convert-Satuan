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

const speedOptions = [
  { value: "km_per_hour", label: "Kilometer per hour" },
  { value: "m_per_second", label: "Meter per second" },
  { value: "miles_per_hour", label: "Miles per hour" },
  { value: "knot", label: "Knot" },
];

let optionSpeed = speedOptions.map((speed) => (
  <option key={speed.value} value={speed.value}>
    {speed.label}
  </option>
));

function kmPerHour_to_mPerSecond(number) {
  return (number * 5) / 18;
}

function mPerSecond_to_kmPerHour(number) {
  return (number * 18) / 5;
}

function kmPerHour_to_milesPerHour(number) {
  return number * 0.6214;
}

function milesPerHour_to_kmPerHour(number) {
  return (number * 1) / 0.6214;
}

function kmPerHour_to_knot(number) {
  return number * 0.539957;
}

function knot_to_kmPerHour(number) {
  return number / 0.539957;
}

function mPerSecond_to_milesPerHour(number) {
  return number * 2.23694;
}

function milesPerHour_to_mPerSecond(number) {
  return number / 2.23694;
}

function milesPerHour_to_knot(number) {
  return number * 0.868976;
}

function knot_to_milesPerHour(number) {
  return number / 0.868976;
}

function mPerSecond_to_knot(number) {
  return number * 1.94384;
}

function knot_to_mPerSecond(number) {
  return number / 1.94384;
}

export default function Speed() {
  const [baseSpeed, setBaseSpeed] = useState(0);
  const [resultSpeed, setResultSpeed] = useState(0);
  const [base, setBase] = useState("");
  const [to, setTo] = useState("");

  const getFrom = (e) => {
    setBase(e.target.value);
  };

  const getFromValue = (e) => {
    setBaseSpeed(e.target.value);
  };

  const getTo = (e) => {
    setTo(e.target.value);
  };

  useEffect(() => {
    if (isNaN(resultSpeed)) {
      setBaseSpeed(0);
    }

    if (base === to) {
      setResultSpeed(parseFloat(baseSpeed));
    }

    if (base === "km_per_hour") {
      if (to === "m_per_second") {
        setResultSpeed(kmPerHour_to_mPerSecond(parseFloat(baseSpeed)));
      } else if (to === "miles_per_hour") {
        setResultSpeed(kmPerHour_to_milesPerHour(parseFloat(baseSpeed)));
      } else if (to === "knot") {
        setResultSpeed(kmPerHour_to_knot(parseFloat(baseSpeed)));
      }
    } else if (base === "m_per_second") {
      if (to === "km_per_hour") {
        setResultSpeed(mPerSecond_to_kmPerHour(parseFloat(baseSpeed)));
      } else if (to === "miles_per_hour") {
        setResultSpeed(mPerSecond_to_milesPerHour(parseFloat(baseSpeed)));
      } else if (to === "knot") {
        setResultSpeed(mPerSecond_to_knot(parseFloat(baseSpeed)));
      }
    } else if (base === "miles_per_hour") {
      if (to === "km_per_hour") {
        setResultSpeed(milesPerHour_to_kmPerHour(parseFloat(baseSpeed)));
      } else if (to === "m_per_second") {
        setResultSpeed(milesPerHour_to_mPerSecond(parseFloat(baseSpeed)));
      } else if (to === "knot") {
        setResultSpeed(milesPerHour_to_knot(parseFloat(baseSpeed)));
      }
    } else if (base === "knot") {
      if (to === "km_per_hour") {
        setResultSpeed(knot_to_kmPerHour(parseFloat(baseSpeed)));
      } else if (to === "m_per_second") {
        setResultSpeed(knot_to_mPerSecond(parseFloat(baseSpeed)));
      } else if (to === "miles_per_hour") {
        setResultSpeed(knot_to_milesPerHour(parseFloat(baseSpeed)));
      }
    }
  });

  return (
    <div>
      <Head>
        <title>Speed Converter</title>
        <link rel="icon" href="https://www.flaticon.com/svg/static/icons/svg/3399/3399737.svg"></link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <Hero title="🚗💨Speed Converter"></Hero>
        <Main>
          <SimpleGrid columns={2} spacing={5}>
            <Box>
              <NumberInput mb={0} min={-100}>
                <NumberInputField onChange={getFromValue} />
              </NumberInput>
              <SelectComponent
                options={optionSpeed}
                title="From"
                handleChange={getFrom}
              ></SelectComponent>
            </Box>
            <Box>
              <NumberInput mb={0} min={-100} isReadOnly>
                <NumberInputField value={resultSpeed} />
              </NumberInput>
              <SelectComponent
                options={optionSpeed}
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
