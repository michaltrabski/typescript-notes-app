import React from "react";
import Container from "./components/Container";
import Header from "./components/Header/Header";
import MuiThemeProvider from "./muiTheme/muiThemeProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SimpleHeader from "./components/Header/SimpleHeader";
import LoginPage from "./pages/LoginPage";
import { settings } from "./settings/settings";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const { homePage, loginPage, registerPage } = settings;

  return (
    <MuiThemeProvider>
      <Router>
        {/* <Header /> */}
        <SimpleHeader />
        <Container>
          <Switch>
            <Route path={loginPage.to}>
              <LoginPage />
            </Route>

            <Route path={registerPage.to} component={RegisterPage} />
            <Route path={homePage.to} component={HomePage} />
          </Switch>
        </Container>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
