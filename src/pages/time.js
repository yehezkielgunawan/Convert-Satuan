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

const timeOptions = [
  { value: "milisecond", label: "Milisecond" },
  { value: "second", label: "Second" },
  { value: "minute", label: "Minute" },
  { value: "hour", label: "Hour" },
  { value: "day", label: "Day" },
  { value: "week", label: "Week" },
  { value: "month", label: "Month" },
  { value: "year", label: "Year" },
  { value: "decade", label: "Decade" },
];

let optionsTime = timeOptions.map((time) => (
  <option key={time.value} value={time.value}>
    {time.label}
  </option>
));

function expo(x, f) {
  return Number.parseFloat(x).toExponential(f);
}

function milisecondToSecond(number) {
  return number / 1000;
}

function milisecondToMinute(number) {
  return number / 60000;
}

function milisecondToHour(number) {
  return expo(number / 3.6e6, 5);
}

function milisecondToDay(number) {
  return expo(number / 8.64e7, 5);
}

function milisecondToWeek(number) {
  return expo(number / 6.048e8, 5);
}

function milisecondToMonth(number) {
  return expo(number / 2.628e9, 5);
}

function milisecondToYear(number) {
  return expo(number / 3.154e10, 5);
}

function milisecondToDecade(number) {
  return expo(number / 3.154e11, 5);
}

function secondToMilisecond(number) {
  return number * 1000;
}

function secondToMinute(number) {
  return number / 60;
}

function secondToHour(number) {
  return number / 3600;
}

function secondToDay(number) {
  return number / 86400;
}

function secondToWeek(number) {
  return number / 604800;
}

function secondToMonth(number) {
  return expo(number / 2.628e6, 5);
}

function secondToYear(number) {
  return expo(number / 3.154e7, 5);
}

function secondToDecade(number) {
  return expo(number / 3.154e8, 5);
}

function minuteToMilisecond(number) {
  return number * 600000;
}

function minuteToSecond(number) {
  return number * 60;
}

function minuteToHour(number) {
  return number / 60;
}

function minuteToDay(number) {
  return number / 1440;
}

function minuteToWeek(number) {
  return number / 10080;
}

function minuteToMonth(number) {
  return number / 43800;
}

function minuteToYear(number) {
  return number / 525600;
}

function minuteToDecade(number) {
  return expo(number / 5.256e6, 5);
}

function hourTomilisecond(number) {
  return expo(number * 3.6e6, 5);
}

function hourToSecond(number) {
  return number * 3600;
}

function hourToMinute(number) {
  return number * 60;
}

function hourToDay(number) {
  return number / 24;
}

function hourToWeek(number) {
  return number / 168;
}

function hourToMonth(number) {
  return number / 730;
}

function hourToYear(number) {
  return number / 8760;
}

function hourToDecade(number) {
  return number / 87600;
}

function dayToMilisecond(number) {
  return expo(number * 8.64e7, 5);
}

function dayToSecond(number) {
  return number * 86400;
}

function dayToMinute(number) {
  return number * 1440;
}

function dayToHour(number) {
  return number * 24;
}

function dayToWeek(number) {
  return number / 7;
}

function dayToMonth(number) {
  return number / 30.417;
}

function dayToYear(number) {
  return number / 365;
}

function dayToDecade(number) {
  return number / 3650;
}

function weekToMilisecond(number) {
  return expo(number * 6.048e8, 5);
}

function weekToSecond(number) {
  return number * 604800;
}

function weekToMinute(number) {
  return number * 10080;
}

function weekToHour(number) {
  return number * 168;
}

function weekToDay(number) {
  return number * 7;
}

function weekToMonth(number) {
  return number / 4.345;
}

function weekToYear(number) {
  return number / 52.143;
}

function weekToDecade(number) {
  return number / 521;
}

function monthToMilisecond(number) {
  return expo(number * 2.628e9, 5);
}

function monthToSecond(number) {
  return expo(number * 2.628e6, 5);
}

function monthToMinute(number) {
  return number * 43800;
}

function monthToHour(number) {
  return number * 730;
}

function monthToDay(number) {
  return number * 30.417;
}

function monthToWeek(number) {
  return number * 4.345;
}

function monthToYear(number) {
  return number / 12;
}

function monthToDecade(number) {
  return number / 120;
}

function yearToMilisecond(number) {
  return expo(number * 3.154e10, 5);
}

function yearToSecond(number) {
  return expo(number * 3.154e7, 5);
}

function yearToMinute(number) {
  return number * 525600;
}

function yearToHour(number) {
  return number * 8760;
}

function yearToDay(number) {
  return number * 365;
}

function yearToWeek(number) {
  return number * 52.143;
}

function yearToMonth(number) {
  return number * 12;
}

function yearToDecade(number) {
  return number / 10;
}

function decadeToMilisecond(number) {
  return expo(number * 3.154e11, 5);
}

function decadeToSecond(number) {
  return expo(number * 3.154e8, 5);
}

function decadeToMinute(number) {
  return expo(number * 5.256e6, 5);
}

function decadeToHour(number) {
  return number * 87600;
}

function decadeToDay(number) {
  return number * 3650;
}

function decadeToWeek(number) {
  return number * 521;
}

function decadeToMonth(number) {
  return number * 120;
}

function decadeToYear(number) {
  return number * 10;
}

export default function Time() {
  const [baseTime, setBaseTime] = useState(0);
  const [resultTime, setResultTime] = useState(0);
  const [base, setBase] = useState(0);
  const [to, setTo] = useState(0);

  const getFrom = (e) => {
    setBase(e.target.value);
  };

  const getFromValue = (e) => {
    setBaseTime(e.target.value);
  };

  const getTo = (e) => {
    setTo(e.target.value);
  };

  useEffect(() => {
    if (isNaN(resultTime)) {
      setBaseTime(0);
    }

    if (base === to) {
      setResultTime(parseFloat(baseTime));
    }

    if (base === "milisecond") {
      if (to === "second") {
        setResultTime(milisecondToSecond(parseFloat(baseTime)));
      } else if (to === "minute") {
        setResultTime(milisecondToMinute(parseFloat(baseTime)));
      } else if (to === "hour") {
        setResultTime(milisecondToHour(parseFloat(baseTime)));
      } else if (to === "day") {
        setResultTime(milisecondToDay(parseFloat(baseTime)));
      } else if (to === "week") {
        setResultTime(milisecondToWeek(parseFloat(baseTime)));
      } else if (to === "month") {
        setResultTime(milisecondToMonth(parseFloat(baseTime)));
      } else if (to === "year") {
        setResultTime(milisecondToYear(parseFloat(baseTime)));
      } else if (to === "decade") {
        setResultTime(milisecondToDecade(parseFloat(baseTime)));
      }
    } else if (base === "second") {
      if (to === "milisecond") {
        setResultTime(secondToMilisecond(parseFloat(baseTime)));
      } else if (to === "minute") {
        setResultTime(secondToMinute(parseFloat(baseTime)));
      } else if (to === "hour") {
        setResultTime(secondToHour(parseFloat(baseTime)));
      } else if (to === "day") {
        setResultTime(secondToDay(parseFloat(baseTime)));
      } else if (to === "week") {
        setResultTime(secondToWeek(parseFloat(baseTime)));
      } else if (to === "month") {
        setResultTime(secondToMonth(parseFloat(baseTime)));
      } else if (to === "year") {
        setResultTime(secondToYear(parseFloat(baseTime)));
      } else if (to === "decade") {
        setResultTime(secondToDecade(parseFloat(baseTime)));
      }
    } else if (base === "minute") {
      if (to === "milisecond") {
        setResultTime(minuteToMilisecond(parseFloat(baseTime)));
      } else if (to === "second") {
        setResultTime(minuteToSecond(parseFloat(baseTime)));
      } else if (to === "hour") {
        setResultTime(minuteToHour(parseFloat(baseTime)));
      } else if (to === "day") {
        setResultTime(minuteToDay(parseFloat(baseTime)));
      } else if (to === "week") {
        setResultTime(minuteToWeek(parseFloat(baseTime)));
      } else if (to === "month") {
        setResultTime(minuteToMonth(parseFloat(baseTime)));
      } else if (to === "year") {
        setResultTime(minuteToYear(parseFloat(baseTime)));
      } else if (to === "decade") {
        setResultTime(minuteToDecade(parseFloat(baseTime)));
      }
    } else if (base === "hour") {
      if (to === "milisecond") {
        setResultTime(hourTomilisecond(parseFloat(baseTime)));
      } else if (to === "second") {
        setResultTime(hourToSecond(parseFloat(baseTime)));
      } else if (to === "minute") {
        setResultTime(hourToMinute(parseFloat(baseTime)));
      } else if (to === "day") {
        setResultTime(hourToDay(parseFloat(baseTime)));
      } else if (to === "week") {
        setResultTime(hourToWeek(parseFloat(baseTime)));
      } else if (to === "month") {
        setResultTime(hourToMonth(parseFloat(baseTime)));
      } else if (to === "year") {
        setResultTime(hourToYear(parseFloat(baseTime)));
      } else if (to === "decade") {
        setResultTime(hourToDecade(parseFloat(baseTime)));
      }
    } else if (base === "day") {
      if (to === "milisecond") {
        setResultTime(dayToMilisecond(parseFloat(baseTime)));
      } else if (to === "second") {
        setResultTime(dayToSecond(parseFloat(baseTime)));
      } else if (to === "minute") {
        setResultTime(dayToMinute(parseFloat(baseTime)));
      } else if (to === "hour") {
        setResultTime(dayToHour(parseFloat(baseTime)));
      } else if (to === "week") {
        setResultTime(dayToWeek(parseFloat(baseTime)));
      } else if (to === "month") {
        setResultTime(dayToMonth(parseFloat(baseTime)));
      } else if (to === "year") {
        setResultTime(dayToYear(parseFloat(baseTime)));
      } else if (to === "decade") {
        setResultTime(dayToDecade(parseFloat(baseTime)));
      }
    } else if (base === "week") {
      if (to === "milisecond") {
        setResultTime(weekToMilisecond(parseFloat(baseTime)));
      } else if (to === "second") {
        setResultTime(weekToSecond(parseFloat(baseTime)));
      } else if (to === "minute") {
        setResultTime(weekToMinute(parseFloat(baseTime)));
      } else if (to === "hour") {
        setResultTime(weekToHour(parseFloat(baseTime)));
      } else if (to === "day") {
        setResultTime(weekToDay(parseFloat(baseTime)));
      } else if (to === "month") {
        setResultTime(weekToMonth(parseFloat(baseTime)));
      } else if (to === "year") {
        setResultTime(weekToYear(parseFloat(baseTime)));
      } else if (to === "decade") {
        setResultTime(weekToDecade(parseFloat(baseTime)));
      }
    } else if (base === "month") {
      if (to === "milisecond") {
        setResultTime(monthToMilisecond(parseFloat(baseTime)));
      } else if (to === "second") {
        setResultTime(monthToSecond(parseFloat(baseTime)));
      } else if (to === "minute") {
        setResultTime(monthToMinute(parseFloat(baseTime)));
      } else if (to === "hour") {
        setResultTime(monthToHour(parseFloat(baseTime)));
      } else if (to === "day") {
        setResultTime(monthToDay(parseFloat(baseTime)));
      } else if (to === "week") {
        setResultTime(monthToWeek(parseFloat(baseTime)));
      } else if (to === "year") {
        setResultTime(monthToYear(parseFloat(baseTime)));
      } else if (to === "decade") {
        setResultTime(monthToDecade(parseFloat(baseTime)));
      }
    } else if (base === "year") {
      if (to === "milisecond") {
        setResultTime(yearToMilisecond(parseFloat(baseTime)));
      } else if (to === "second") {
        setResultTime(yearToSecond(parseFloat(baseTime)));
      } else if (to === "minute") {
        setResultTime(yearToMinute(parseFloat(baseTime)));
      } else if (to === "hour") {
        setResultTime(yearToHour(parseFloat(baseTime)));
      } else if (to === "day") {
        setResultTime(yearToDay(parseFloat(baseTime)));
      } else if (to === "week") {
        setResultTime(yearToWeek(parseFloat(baseTime)));
      } else if (to === "month") {
        setResultTime(yearToMonth(parseFloat(baseTime)));
      } else if (to === "decade") {
        setResultTime(yearToDecade(parseFloat(baseTime)));
      }
    } else if (base === "decade") {
      if (to === "milisecond") {
        setResultTime(decadeToMilisecond(parseFloat(baseTime)));
      } else if (to === "second") {
        setResultTime(decadeToSecond(parseFloat(baseTime)));
      } else if (to === "minute") {
        setResultTime(decadeToMinute(parseFloat(baseTime)));
      } else if (to === "hour") {
        setResultTime(decadeToHour(parseFloat(baseTime)));
      } else if (to === "day") {
        setResultTime(decadeToDay(parseFloat(baseTime)));
      } else if (to === "week") {
        setResultTime(decadeToWeek(parseFloat(baseTime)));
      } else if (to === "month") {
        setResultTime(decadeToMonth(parseFloat(baseTime)));
      } else if (to === "year") {
        setResultTime(decadeToYear(parseFloat(baseTime)));
      }
    }
  });

  return (
    <div>
      <Head>
        <title>Time Converter</title>
        <link rel="icon" href="https://www.flaticon.com/svg/static/icons/svg/3399/3399737.svg"></link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <Hero title="⏱️Time Converter"></Hero>
        <Main>
          <SimpleGrid columns={2} spacing={5}>
            <Box>
              <NumberInput mb={0} defaultValue={0}>
                <NumberInputField onChange={getFromValue} />
              </NumberInput>
              <SelectComponent
                options={optionsTime}
                title="From"
                handleChange={getFrom}
              ></SelectComponent>
            </Box>
            <Box>
              <NumberInput mb={0} isReadOnly>
                <NumberInputField value={resultTime} />
              </NumberInput>
              <SelectComponent
                options={optionsTime}
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
