import "./App.css";
import { Grid, Typography } from "@mui/material";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

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
        <Grid
          lg={12}
         
          style={{ background: "#653DF5"}}
        >
          <Grid style={{padding: "24px 0 24px 0" }}  display={"flex"} alignContent={"center"}  justifyContent={"center"} gap={16}   >
            <span>FrontEnd</span>
            <span>Desenvolvimento</span>
            <span>Especialista</span>
            <span>Code</span>
            <span>Design</span>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
