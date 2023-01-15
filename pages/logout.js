import React, { useEffect, useState } from "react";
import { Box, Button, Checkbox, Text } from "native-base";
import useAuth from "../hooks/useAuth";
import ScreenPage from "../layout/screen";
import useStrings from "../hooks/useStrings";
import { Dimensions } from "react-native";

const LogoutPage = () => {
  const { logoutWithRedirect } = useAuth();
  const [isLoginOut, setIsLoginOut] = useState(false);
  const { getLabel, getError } = useStrings();

  const screenHeight = Dimensions.get("window").height;
  const screenWidth = Dimensions.get("window").width;

  const boxWidth = screenWidth * 0.8;
  const boxHeight = screenHeight / 3;
  // Center the box vertically
  const top = (screenHeight - boxHeight) / 4;
  // Center the box horizontally
  const left = (screenWidth - boxWidth) / 2;

  useEffect(() => {
    logoutWithRedirect();
  }, []);

  return (
    <ScreenPage>
      <Box h={boxHeight} marginTop={top} variant="card">
        {!isLoginOut ? (
          <>
            <Checkbox.Group>
              <Checkbox value="1" flexWrap="wrap">
                {getLabel("deleteStoredData")}
              </Checkbox>
            </Checkbox.Group>

            <Button marginTop={10} colorScheme="danger">
              {getLabel("logout")}
            </Button>
          </>
        ) : (
          <Text textAlign="center" color="red.600" marginTop={10}>
            {getLabel("loginOut")}
          </Text>
        )}
      </Box>
    </ScreenPage>
  );
};

export default LogoutPage;
