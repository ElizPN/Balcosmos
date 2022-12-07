import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./components/Footer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>This app is using the dark mode</main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
