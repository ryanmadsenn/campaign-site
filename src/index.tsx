import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendBaseTheme } from "@chakra-ui/react";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = extendBaseTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Raleway, sans-serif",
      },
    },
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
});

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
