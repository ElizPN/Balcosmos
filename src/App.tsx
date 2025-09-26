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
import { BrowserRouter, Routes, Route } from "react-router-dom";

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


function MainContent() {
  return (
    <>
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
    </>
  );
}


function ExternalRedirect({ to }: { to: string }) {
  React.useEffect(() => {
    window.location.replace(to);
  }, [to]);
  return null;
}

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/epk" element={<ExternalRedirect to="https://e.pcloud.link/publink/show?code=kZItubZRl6DI304KCpdnSzfzz1WShbKYMqy#/filemanager?folder=5497700063" />} />
          <Route path="/*" element={<MainContent />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
