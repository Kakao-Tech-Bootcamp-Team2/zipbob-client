import { GlobalStyle } from "./styles/global";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
