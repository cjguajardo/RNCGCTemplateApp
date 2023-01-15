import React from "react";
import useStorage from "./useStorage";
import { useToast } from "native-base";

import es from "../constants/strings/es";
import en from "../constants/strings/en";

import { getLocales } from "expo-localization";

function useStrings() {
  const deviceLanguage = getLocales()[0].languageCode;
  const availableLanguages = [
    { label: "Español", value: "es" },
    { label: "English", value: "en" },
  ];
  const checkIfDeviceLanguageIsAvailable = () => {
    const lang = availableLanguages.find((lang) => lang.value === deviceLanguage);
    if (lang) {
      return true;
    } else {
      return false;
    }
  };
  const stor = useStorage();
  const toast = useToast();
  const strings = {
    es: es,
    en: en,
  };
  const [language, setLanguage] = React.useState(
    checkIfDeviceLanguageIsAvailable() ? deviceLanguage : "en",
  );

  const fallbackLabels = en.labels;
  const fallbackErrors = en.errors;

  const setStringsLanguage = (lang) => {
    const selectedLanguage = availableLanguages.find(
      (langAvailable) => langAvailable.value === lang,
    );
    if (!selectedLanguage) return;

    switch (lang) {
      case "es":
        setLanguage(lang);
        toast.show({ description: `Language changed to ${selectedLanguage?.label}` });
        break;
      case "en":
        setLanguage(lang);
        toast.show({ description: `Language changed to ${selectedLanguage?.label}` });
        break;
      default:
        break;
    }
  };

  const getLanguageName = () => {
    return availableLanguages.find((lang) => lang.value === language);
  };

  const getLabel = (key) => {
    if (Object.keys(strings).findIndex((lang) => lang === language) === -1) return key;

    const labels = strings[language].labels;
    const keyExists = typeof labels[key] !== "undefined";
    // console.log("getLabel", { language, keyExists, key });
    if (!keyExists) {
      const fallbackKeyExists = typeof fallbackLabels[key] !== "undefined";
      if (fallbackKeyExists) {
        return fallbackLabels[key];
      } else {
        return key;
      }
    }
    const text = keyExists ? labels[key] : key;
    // console.log({ text });

    return text;
  };

  const getError = (key) => {
    if (Object.keys(strings).findIndex((lang) => lang === language) === -1) return key;

    const errors = strings[language].errors;
    const keyExists = typeof errors[key] !== "undefined";
    // console.log("getError", { language, keyExists, key });
    if (!keyExists) {
      const fallbackKeyExists = typeof fallbackErrors[key] !== "undefined";
      if (fallbackKeyExists) {
        return fallbackErrors[key];
      } else {
        return key;
      }
    }
    const text = errors[key];
    // console.log({ text });

    return text;
  };

  React.useEffect(() => {
    stor.set("language", language);
  }, [language]);

  return {
    getLabel,
    getError,
    language,

    availableLanguages,
    setStringsLanguage,
    getLanguageName,
  };
}

export default useStrings;
