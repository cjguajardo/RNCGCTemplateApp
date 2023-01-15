import React from "react";
import { Box, Button, Text, Heading, Flex, VStack, Input, Divider } from "native-base";
import ScreenPage from "../layout/screen";
import CGCMainContext from "../context/CGCMainContext";

const PerfilPage = () => {
  const { getLabel, getError } = React.useContext(CGCMainContext);
  return (
    <ScreenPage>
      <Box variant="card">
        <Flex direction="row" wrap>
          <Text w="100%" marginY={4}>
            {getLabel("personalInfo")}
          </Text>
          <Input
            variant="underlined"
            placeholder={getLabel("name")}
            w="100%"
            marginY={4}
          />
          <Input
            variant="underlined"
            placeholder={getLabel("lastname")}
            w="100%"
            marginY={4}
          />
          <Input
            variant="underlined"
            placeholder={getLabel("email")}
            w="100%"
            marginY={4}
          />
          <Input
            variant="underlined"
            placeholder={getLabel("phone")}
            w="100%"
            marginY={4}
          />

          <Text w="100%" marginY={4}>
            {getLabel("passwordChange")}
          </Text>
          <Input
            variant="underlined"
            placeholder={getLabel("newPassword")}
            w="100%"
            marginY={4}
          />
          <Input
            variant="underlined"
            placeholder={getLabel("confirmPassword")}
            w="100%"
            marginY={4}
          />
        </Flex>
        <Button w="100%" marginY={4}>
          {getLabel("save")}
        </Button>
      </Box>
    </ScreenPage>
  );
};

export default PerfilPage;
