import React, { useRef, useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { Box, Button, Divider, Heading, Input, Text, VStack } from "native-base";
import useAuth from "../hooks/useAuth";
import useStrings from "../hooks/useStrings";
import { Entypo } from "@expo/vector-icons";
import ScreenPage from "../layout/screen";
import CGCMainContext from "../context/CGCMainContext";

const LoginPage = () => {
  const { user, loginWithRedirect, gotoRegisterPage } = useAuth();
  const [showError, setShowError] = useState(false);
  const [userError, setUserError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const { getLabel, getError, language } = React.useContext(CGCMainContext);

  const userRef = useRef();
  const passwordRef = useRef();

  const screenHeight = Dimensions.get("window").height;
  const boxWidth = Dimensions.get("window").width * 0.85;
  const boxHeight = screenHeight / 2.2;
  // Center the box vertically
  const top = (screenHeight - boxHeight) / 4;
  // Center the box horizontally
  const left = (Dimensions.get("window").width - boxWidth) / 2;

  useEffect(() => {
    setShowError(true);
    setUserError(getError("userNameError"));
    setPasswordError(getError("userPasswordError"));
  }, []);

  return (
    <ScreenPage variant="login">
      <Box w={boxWidth} marginTop={top} variant="card">
        <Heading textAlign="center">{getLabel("welcome")}</Heading>
        <Divider my="2" />
        <VStack>
          <Input
            variant="underlined"
            placeholder={getLabel("username")}
            w="100%"
            marginY={4}
            ref={userRef}
          />
          <Input
            variant="underlined"
            placeholder={getLabel("password")}
            w="100%"
            marginY={4}
            ref={passwordRef}
          />
        </VStack>
        {/* Error messages */}
        {showError && (
          <Box>
            {userError && (
              <Text color="red.500" fontSize="sm">
                <Entypo name="cross" />
                {getError("userNameError")}
              </Text>
            )}
            {passwordError && (
              <Text color="red.500" fontSize="sm">
                <Entypo name="cross" />
                {getError("userPasswordError")}
              </Text>
            )}
          </Box>
        )}
        <Button marginTop={8} onClick={() => loginWithRedirect}>
          {getLabel("loginButton")}
        </Button>

        <Button
          marginTop={8}
          variant="link"
          colorScheme="primary"
          onPress={() => gotoRegisterPage}
        >
          {getLabel("register")}
        </Button>
      </Box>
    </ScreenPage>
  );
};

export default LoginPage;
