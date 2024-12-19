import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "../layout/defaultLayout";
import { Login } from "../pages/login/Login";
import { Splash } from "../pages/splash/Splash";
import { Main } from "../pages/main/Main";

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
    ],
  },
]);
