import { Select, useColorMode } from "@chakra-ui/core";

export const SelectComponent = ({ options, title, handleChange }) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.100", dark: "gray.900" };

  const color = { light: "black", dark: "white" };

  return (
    <Select
      size="md"
      mt={0}
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      placeholder={title}
      onChange={handleChange}
    >
      {options}
    </Select>
  );
};
