import { GlobalStyle } from "./styles/global";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};
