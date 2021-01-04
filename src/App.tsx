import React, { useEffect } from "react";
import Container from "./components/Container";
import Header from "./components/Header/Header";
import MuiThemeProvider from "./muiTheme/muiThemeProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SimpleHeader from "./components/Header/SimpleHeader";
import LoginPage from "./firebase/LoginPage";
import { settings } from "./settings/settings";
import RegisterPage from "./firebase/RegisterPage";
import ResetPasswordPage from "./firebase/ResetPasswordPage";
import { auth } from "./firebase/firebase";
import { useDispatch } from "react-redux";
import { GetUserFirestoreDataByUid } from "./store/actions/authActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        console.log("currentUser = ", currentUser);
        dispatch(GetUserFirestoreDataByUid(currentUser.uid));
      } else {
        console.log("No user is signed in.");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <MuiThemeProvider>
      <Router>
        {/* <Header /> */}
        <SimpleHeader />
        <Container>
          <Switch>
            <Route path={settings.loginPage.to} component={LoginPage} />
            <Route path={settings.registerPage.to} component={RegisterPage} />
            <Route
              path={settings.resetPasswordPage.to}
              component={ResetPasswordPage}
            />

            <Route path={settings.homePage.to} component={HomePage} />
          </Switch>
        </Container>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
