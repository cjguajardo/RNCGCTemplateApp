import React from "react";
import { Dimensions } from "react-native";
import {
  Box,
  Button,
  Divider,
  Heading,
  Input,
  Text,
  VStack,
  useColorMode,
  Flex,
} from "native-base";
import ScreenPage from "../layout/screen";
import CGCMainContext from "../context/CGCMainContext";

const HomePage = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const { getLabel, getError, language } = React.useContext(CGCMainContext);

  const colorSchemes = [
    "light",
    "dark",
    "primary",
    "secondary",
    "danger",
    "success",
    "info",
    "warning",
  ];
  const variants = ["solid", "link", "outline", "ghost", "unstyled"];

  return (
    <ScreenPage>
      <Box variant="card">
        <Text>{language}</Text>
        <Text>{getLabel("login")}</Text>
        <Text>{getError("userNameError")}</Text>
      </Box>
      <Box variant="card">
        <Heading textAlign="center">{colorMode}</Heading>
        <Divider my={4} />
        <VStack>
          <Input
            variant="underlined"
            placeholder={getLabel("username")}
            w="100%"
            marginY={4}
          />
        </VStack>

        <Flex direction="row" wrap>
          {colorSchemes.map((color) => {
            // console.log("Text", { color });
            return (
              <Text key={color} variant={color} fontSize="sm" m={2}>
                {`text-${color}`}
              </Text>
            );
          })}
        </Flex>
      </Box>

      {variants.map((variant) => (
        <Box variant="card" key={`box_${variant}`}>
          <Heading>{variant.toUpperCase()}</Heading>
          <Flex direction="row" wrap>
            {colorSchemes.map((color) => (
              <Button key={`${color}_${variant}`} variant={variant} colorScheme={color}>
                {color}
              </Button>
            ))}
          </Flex>
        </Box>
      ))}
    </ScreenPage>
  );
};

export default HomePage;
