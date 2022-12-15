import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./components/Footer";
import DrawerAppBar from "./components/DrawerAppBar";
import Music from "./components/Audio";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <DrawerAppBar />
      <Music />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
