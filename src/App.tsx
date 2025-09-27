import React, { useEffect } from "react";
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
import { HashRouter, Routes, Route } from "react-router-dom";

declare global {
  function gtag(...args: any[]): void;
}

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
  useEffect(() => {
    const handleRouteChange = () => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
          page_path: window.location.pathname + window.location.search + window.location.hash,
        });
      }
    };

    window.addEventListener('hashchange', handleRouteChange);

    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <HashRouter>
        <Routes>
          <Route path="/epk" element={<ExternalRedirect to="https://e.pcloud.link/publink/show?code=kZItubZRl6DI304KCpdnSzfzz1WShbKYMqy#/filemanager?folder=5497700063" />} />
          <Route path="/*" element={<MainContent />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
