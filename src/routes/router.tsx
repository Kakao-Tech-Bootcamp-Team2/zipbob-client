import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "../layout/defaultLayout";

export const router = createBrowserRouter([
  {
    path: "",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        // element: <App />,
      },
    ],
  },
]);
