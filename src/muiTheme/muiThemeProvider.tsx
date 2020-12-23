import React, { createContext, useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    // primary: {
    //   light: "#757ce8",
    //   main: "#3f50b5",
    //   dark: "#002884",
    //   contrastText: "#fff",
    // },
    // secondary: {
    //   light: "#ff7961",
    //   main: "#f44336",
    //   dark: "#ba000d",
    //   contrastText: "#000",
    // },
  },
});
const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
});

export const Context = createContext<any>({});

const MuiThemeProvider = (props: any) => {
  const [theme, setTheme] = useState<boolean>(true);

  const toogleTheme = () => {
    setTheme((theme) => !theme);
  };

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <Context.Provider value={{ theme, toogleTheme }}>
        {props.children}
      </Context.Provider>
    </ThemeProvider>
  );
};

export default MuiThemeProvider;
