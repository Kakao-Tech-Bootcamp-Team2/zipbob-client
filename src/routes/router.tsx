import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "../layout/defaultLayout";
import { Login } from "../pages/login/Login";
import { Splash } from "../pages/splash/Splash";
import { Main } from "../pages/main/Main";
import { SignUp } from "../pages/signup/SignUp";
import { Ingredient } from "../pages/ingredient/Ingredient";
import { Home } from "../pages/home/Home";

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
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/ingredient",
        element: <Ingredient />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/error",
        element: <Home />,
      },
      {
        path: "/ingredient-select",
        element: <Home />,
      },
    ],
  },
]);
