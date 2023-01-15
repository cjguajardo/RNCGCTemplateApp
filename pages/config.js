import React from "react";

import { Box, Flex, useColorMode, Radio, Stack, FormControl, Divider } from "native-base";
import ScreenPage from "../layout/screen";
import CGCMainContext from "../context/CGCMainContext";
import useStorage from "../hooks/useStorage";

const ConfigPage = () => {
  const { setColorMode, colorMode } = useColorMode();
  // const stor = useStorage();
  const { getLabel, getError, language, setStringsLanguage, availableLanguages } =
    React.useContext(CGCMainContext);
  const stor = useStorage();

  return (
    <ScreenPage>
      <Box variant="card">
        <Flex direction="row" wrap>
          <FormControl>
            <FormControl.Label>{getLabel("selectColorMode")}</FormControl.Label>
            <Radio.Group
              name="rbgColorMode"
              accessibilityLabel={getLabel("selectColorMode")}
              value={colorMode}
              onChange={(nextValue) => {
                setColorMode(nextValue);
                stor.set("colorMode", nextValue);
              }}
            >
              <Stack
                direction={{
                  base: "row",
                }}
                alignItems="center"
                space={4}
                w="75%"
                maxW="300px"
              >
                <Radio value="light" my={1}>
                  {getLabel("light")}
                </Radio>
                <Radio value="dark" my={1}>
                  {getLabel("dark")}
                </Radio>
              </Stack>
            </Radio.Group>
          </FormControl>

          <Divider my={2} />

          <FormControl>
            <FormControl.Label>{getLabel("selectLanguage")}</FormControl.Label>
            <Radio.Group
              name="rbgLanguage"
              accessibilityLabel={getLabel("selectLanguage")}
              value={language}
              onChange={(nextValue) => {
                setStringsLanguage(nextValue);
              }}
            >
              <Stack
                direction={{
                  base: "row",
                }}
                alignItems="center"
                space={4}
                w="75%"
                maxW="300px"
              >
                {availableLanguages.map((lang, index) => {
                  return (
                    <Radio key={`${lang.value}__${index}`} my={1} value={lang.value}>
                      {lang.label}
                    </Radio>
                  );
                })}
              </Stack>
            </Radio.Group>
          </FormControl>

          <Divider my={2} />
        </Flex>
      </Box>
    </ScreenPage>
  );
};

export default ConfigPage;
