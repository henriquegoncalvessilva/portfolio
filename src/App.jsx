import "./App.css";
import { Grid } from "@mui/material";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Differentials from "./components/Differentials/Differentials";

function App() {
  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
      >
        <Header />
        <Hero />
        <Skills/>
        <Differentials/>
      </Grid>
    </>
  );
}

export default App;
