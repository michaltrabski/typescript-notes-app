import React from "react";
import Header from "./components/Header";
import MuiThemeProvider from "./muiTheme/muiThemeProvider";

function App() {
  return (
    <MuiThemeProvider>
      <Header />
    </MuiThemeProvider>
  );
}

export default App;
