export const firebaseSettings = {
  users: "users",
};

export const settings = {
  homePage: { headerLabel: "Home", to: "/" },
  loginPage: {
    headerLabel: "Login",
    to: "/login",
    title: "Login",
    buttonText: "Login Now!",
    leftBottomLinkText: "Forget password?",
    leftBottomLinkTo: "/reset-password",
    rightBottomLinkText: "Don't have an account? Register here.",
    rightBottomLinkTo: "/register",
  },
  registerPage: {
    headerLabel: "Register",
    to: "/register",
    title: "Register For Free",
    buttonText: "Register Now!",
    rightBottomLinkText: "Allready have account? Login here.",
    rightBottomLinkTo: "/login",
  },
  resetPasswordPage: {
    headerLabel: "Reset Password",
    to: "/reset-password",
    title: "Password Recovery",
    buttonText: "Send.",
    leftBottomLinkText: "Login",
    leftBottomLinkTo: "/login",
    rightBottomLinkText: "Register",
    rightBottomLinkTo: "/register",
  },
  logoutPage: {
    headerLabel: "Logout",
  },
};
