import React from "react";
import { Box, Button, Grid,  Typography } from "@mui/material";
import Slide from "./Slide/Slide";
import Img from "../../assets/img.png";
const Hero = () => {
  return (
    <>
      <Grid
        lg={10}
        role="main"
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexGrow: "1",
        }}
        padding={'112px 0 112px 0'}
      >
        <Grid
          lg={6}
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap:'16px'
          }}
        >
          <Box sx={{display:'flex',gap:'16px', flexDirection:'column'}}>
            <Typography
              variant="span"
              style={{ color: "#9A9D9E", letterSpacing: "2px" }}
            >
              Hi, I`m 
              <span
                style={{
                  fontWeight: "bold",
                  color: "white",
                  letterSpacing: "inherit",
                }}
              >
                 Henrique Gonçalves
              </span>
              🎧
            </Typography>
            <Typography
              variant="h1"
              style={{
                color: "#F7F7F7",
                fontSize: "64px",
                fontWeight: "600",
                fontFamily: "Poppins",
              }}
            >
              Desenvolvedor
              <br />
              Front-End Jr
            </Typography>
          </Box>
         
          <Box style={{display:'flex', flexDirection:"column", gap:'64px'}}>
          <Typography
            variant="p"
            style={{
              color: "#9A9D9E",
              width: "520px",
              fontSize: "18px",
              lineHeight: "150%",
            }}
          >
            Desenvolvedor com experiência em React, VR, AR e que busca sempre o
            pixel perfect. Atualmente trabalhando como Front-End Jr no CESAR.
          </Typography>
            <a style={{ color: "white", textDecoration: "underline" }}>
              Vamos conversar?
            </a>
          </Box>
        </Grid>
        <Grid lg={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Slide/>
        </Grid>
      </Grid>
    </>
  );
};

export default Hero;
