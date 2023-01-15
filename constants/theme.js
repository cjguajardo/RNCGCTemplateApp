import { PreventRemoveProvider } from "@react-navigation/native";
import { extendTheme } from "native-base";
import colors from "./colors";
import ButtonTheme from "./componentsThemes/button";

const theme = extendTheme({
  colors: {
    ...colors,
  },
  components: {
    Button: {
      ...ButtonTheme,
    },
    Box: {
      variants: {
        card: {
          rounded: "lg",
          overflow: "hidden",
          borderColor: "primaryLight.900",
          borderWidth: "1",
          background: "white",
          p: 4,
          marginBottom: 4,
          _dark: {
            borderColor: "primaryDark.300",
            background: "primaryDark.700",
          },
        },
      },
    },
    Text: {
      variants: {
        primary: {
          color: "primary.600",
          _dark: {
            color: "primary.300",
          },
        },
        secondary: {
          color: "secondary.600",
          _dark: {
            color: "secondary.300",
          },
        },
        danger: {
          color: "danger.600",
          _dark: {
            color: "danger.300",
          },
        },
        success: {
          color: "success.600",
          _dark: {
            color: "success.300",
          },
        },
        info: {
          color: "info.600",
          _dark: {
            color: "info.300",
          },
        },
        warning: {
          color: "warning.600",
          _dark: {
            color: "warning.300",
          },
        },
        light: {
          color: "light.600",
          _dark: {
            color: "light.300",
          },
        },
        dark: {
          color: "dark.600",
          _dark: {
            color: "dark.300",
          },
        },
      },
    },
    Heading: {
      defaultProps: {
        color: colors.primaryLight[600],
      },
    },
    Divider: {
      baseStyle: (props) => {
        return {
          ...props,
          bg: "primaryLight.100",
          _dark: {
            bg: "primaryDark.300",
          },
        };
      },
    },
    Input: {
      baseStyle: {
        _dark: {
          placeholderTextColor: "primaryDark.200",
        },
      },
    },
    Heading: {
      baseStyle: {
        _dark: {
          color: "white",
        },
      },
    },
  },

  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "light",
  },
});

export default theme;
