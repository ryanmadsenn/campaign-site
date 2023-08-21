import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendBaseTheme } from "@chakra-ui/react";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);

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
