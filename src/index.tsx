import React from "react";
import ReactDOM from "react-dom/client";
import {
  ChakraProvider,
  StyleFunctionProps,
  extendTheme,
} from "@chakra-ui/react";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { BrowserRouter } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyBV3s6-QDYzFagbhKXqfPIQv3tjgO0lcFs",
  authDomain: "papa-website-47ec1.firebaseapp.com",
  projectId: "papa-website-47ec1",
  storageBucket: "papa-website-47ec1.appspot.com",
  messagingSenderId: "1052422173129",
  appId: "1:1052422173129:web:123670c5cbe7b12c57f818",
  measurementId: "G-P4E5E13QT7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = extendTheme({
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
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "Raleway, sans-serif",
      },
    },
    Button: {
      baseStyle: {
        borderRadius: "7.5px",
        padding: "7.5px !important",
      },
    },
  },
});

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
