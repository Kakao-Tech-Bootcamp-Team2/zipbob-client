import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "../layout/defaultLayout";
import { Login } from "../pages/login/Login";
import { Splash } from "../pages/splash/Splash";
import { SignUp } from "../pages/signup/SignUp";
import { Ingredient } from "../pages/ingredient/Ingredient";
import { Home } from "../pages/home/Home";
import { Select } from "../pages/ingredient/Select";
import { MyInfo } from "../pages/myinfo/Myinfo";
import { Error } from "../pages/error/Error";
import { Recipe } from "../pages/recipe/Recipe";
import { Loading } from "../pages/loading/Loading";

export const router = createBrowserRouter([
  {
    path: "",
    element: <DefaultLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        path: "/ingredient/2",
        element: <Select />,
      },
      {
        path: "/myinfo",
        element: <MyInfo />,
      },
      {
        path: "/recipe",
        element: <Recipe />,
      },
      // {
      //   path: "/result",
      //   element: <Result />
      // },
      {
        path: "/loading",
        element: <Loading />,
      },
    ],
  },
]);
