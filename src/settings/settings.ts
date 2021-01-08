import { UserType } from "../reduxStore/types/authActionsTypes";

export const firebaseSettings = {
  users: "users",
};

export const userTemplate: UserType = {
  uid: "",
  email: "",
  registerdAt: "",
  role: "USER",
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
  superAdminPage: {
    headerLabel: "Super Admin",
    to: "/super-admin",
    title: "Super Admin",
  },
  userAccountPage: {
    headerLabel: "Account",
    to: "/your-account",
    title: "Your Account",
  },
};
