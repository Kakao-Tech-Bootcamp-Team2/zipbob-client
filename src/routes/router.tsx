import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "../layout/defaultLayout";
import { Login } from "../pages/login/Login";
import { Splash } from "../pages/splash/Splash";
import { Main } from "../pages/main/Main";
import { SignUp } from "../pages/signup/SignUp";
import { Ingredient } from "../pages/ingredient/Ingredient";
import { Home } from "../pages/home/Home";
import { Select } from "../pages/ingredient/Select";
import { MyInfo } from "../pages/myinfo/Myinfo";

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
        path: "/ingredient/1",
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
        path: "/ingredient/2",
        element: <Select />,
      },
      {
        path: "/myinfo",
        element: <MyInfo />,
      },
      {
        path: "/recipe",
        element: <Home />,
      },
    ],
  },
]);
