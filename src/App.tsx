import React from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import MuiThemeProvider from "./muiTheme/muiThemeProvider";

function App() {
  return (
    <MuiThemeProvider>
      <Container>
        <Header />
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
