import React from "react";

const CGCMainContext = React.createContext({
  // Add your context here
  language: {
    code: "es",
    setLanguage: (lang) => {},
    getLabel: () => {},
    getError: () => {},
  },
});

export default CGCMainContext;
