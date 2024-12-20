import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "../layout/defaultLayout";
import { Login } from "../pages/login/Login";
import { Splash } from "../pages/splash/Splash";
import { Main } from "../pages/main/Main";
import { Test } from "../pages/test/Test";
import { SignUp } from "../pages/signup/SignUp";

export const router = createBrowserRouter([
  {
    path: "",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/splash",
        element: <Splash />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
