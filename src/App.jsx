import "./App.css";
import { Grid, Box, Typography } from "@mui/material";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Differentials from "./components/Differentials/Differentials";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <>
      <Grid container alignItems="center" justifyContent="center">
        <Header />
        <Hero />
        <Skills />
        <Differentials />
        <AboutMe/>
       
      </Grid>
    </>
  );
}

export default App;
