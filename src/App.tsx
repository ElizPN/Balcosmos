import React from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import DrawerAppBar from "./components/DrawerAppBar";
import About from "./components/About";
import Albums from "./components/Albums";
import LiveAct from "./components/LiveAct";
import Grid from "@mui/material/Grid";
import Listen from "./components/Listen";
import ContactForm from "./components/ContactForm";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#388e3c",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <DrawerAppBar />
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        direction='column'
      >
        <LiveAct />
        <Albums />
        <About />
        <Listen />
        <ContactForm />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
