import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../constants/colors";
import { ScrollView } from "react-native-gesture-handler";
import { useColorMode } from "native-base";

const ScreenPage = (props) => {
  const { children, variant } = props;
  const { colorMode } = useColorMode();

  const additionalStyling = variant
    ? {
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.primaryDark[600],
        height: "100%",
        scrollEnabled: false,
      }
    : {};

  const bg = colorMode === "dark" ? colors.primaryDark[600] : colors.primaryLight[50];

  return (
    <SafeAreaView
      paddingHorizontal={15}
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        ...additionalStyling,
        backgroundColor: bg,
      }}
    >
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default ScreenPage;
