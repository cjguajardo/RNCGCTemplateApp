import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  VStack,
  Box,
  Text,
  Center,
  Divider,
  Image,
  useTheme,
  useColorMode,
} from "native-base";
import Login from "../pages/login";
import Perfil from "../pages/perfil";
import Logout from "../pages/logout";
import Help from "../pages/help";
import Home from "../pages/home";
import Config from "../pages/config";
import { StatusBar } from "expo-status-bar";
import CGCMainContext from "../context/CGCMainContext";
import { Entypo } from "@expo/vector-icons";
import DrawerFooter from "./drawerfooter";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const { colorMode } = useColorMode();
  return (
    <DrawerContentScrollView {...props}>
      <Box h="48" m={2.5}>
        <Center>
          <Image source={require("../assets/icon.png")} alt="CGCApps" size="xl" />
          <Text
            color={colorMode === "dark" ? "primaryLight.50" : "primaryLight.600"}
            bold
            fontSize={18}
            marginTop={4}
          >
            CGCApps
          </Text>
        </Center>
      </Box>

      <DrawerItemList {...props} />

      <DrawerFooter />
    </DrawerContentScrollView>
  );
}

function CGCDrawer() {
  const { colors } = useTheme();
  const { colorMode } = useColorMode();
  const { getLabel } = React.useContext(CGCMainContext);

  const DrawerTheme = {
    dark: colorMode === "dark" ? true : false,
    colors: {
      primary: colorMode === "dark" ? colors.primaryLight[50] : colors.primaryLight[600],
      background: colorMode === "dark" ? colors.primaryDark[600] : "white",
      card: colorMode === "dark" ? colors.primaryDark[600] : "white",
      text: colorMode === "dark" ? "white" : colors.primaryLight[600],
      border: colorMode === "dark" ? "white" : colors.primaryDark[900],
      notification: colorMode === "dark" ? "white" : colors.primaryDark[600],
    },
  };
  return (
    <>
      <NavigationContainer theme={DrawerTheme}>
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          screenOptions={({ route }) => ({
            drawerIcon: ({ focused }) => {
              const normalColor =
                colorMode === "dark" ? colors.coolGray[600] : colors.primaryLight[100];
              const activeColor =
                colorMode === "dark" ? "white" : colors.primaryDark[600];

              // console.log({ normalColor, activeColor, focused });
              if (route.name === getLabel("home")) {
                return (
                  <Entypo
                    name="home"
                    size={24}
                    color={focused ? activeColor : normalColor}
                  />
                );
              } else if (route.name === getLabel("login")) {
                return (
                  <Entypo
                    name="login"
                    size={24}
                    color={focused ? activeColor : normalColor}
                  />
                );
              } else if (route.name === getLabel("profile")) {
                return (
                  <Entypo
                    name="user"
                    size={24}
                    color={focused ? activeColor : normalColor}
                  />
                );
              } else if (route.name === getLabel("logout")) {
                return (
                  <Entypo
                    name="log-out"
                    size={24}
                    color={focused ? activeColor : normalColor}
                  />
                );
              } else if (route.name === getLabel("settings")) {
                return (
                  <Entypo
                    name="cog"
                    size={24}
                    color={focused ? activeColor : normalColor}
                  />
                );
              } else if (route.name === getLabel("help")) {
                return (
                  <Entypo
                    name="help"
                    size={24}
                    color={focused ? activeColor : normalColor}
                  />
                );
              }
            },
            headerTintColor: colorMode === "dark" ? "white" : colors.primaryLight[600],
          })}
        >
          <Drawer.Screen name={getLabel("home")} component={Home} />
          <Drawer.Screen name={getLabel("login")} component={Login} />
          <Drawer.Screen name={getLabel("profile")} component={Perfil} />
          <Drawer.Screen name={getLabel("logout")} component={Logout} />
          <Drawer.Screen name={getLabel("settings")} component={Config} />
          <Drawer.Screen name={getLabel("help")} component={Help} />
        </Drawer.Navigator>
      </NavigationContainer>
      <StatusBar style={colorMode === "dark" ? "light" : "dark"} />
    </>
  );
}

export default CGCDrawer;
