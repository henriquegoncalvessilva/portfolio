import "./App.css";
import { Grid, Typography } from "@mui/material";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{ gap: "112px" }}
      >
        <Header />
        <Hero />
        <Skills/>
      </Grid>
    </>
  );
}

export default App;
