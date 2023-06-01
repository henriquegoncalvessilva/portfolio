import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const AboutMe = () => {
  return (
    <Grid
    lg={12}
    style={{
      background: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <section
      style={{
        display: "flex",
        alignItems:"center",
        flexDirection: "row",
        gap: "72px",
        padding: "112px",

      }}
    >
      <img src="../src/assets/img.png" />
      <Box sx={{ display: "flex", gap: "24px", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            gap: "24px",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="span"
            style={{
              color: "#030E15",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "120%",
            }}
          >
            Olá, prazer! 👋🏻
          </Typography>
          <Typography
            variant="h1"
            style={{
              fontFamily: "Inter",
              fontWeight: "600",
              fontSize: "40px",
              color: "#030E15",
              display: 'flex',
                flexDirection: 'column',
                gap: '4px'
            }}
          >
            Henrique Gonçalves
            <br />
            <span style={{ fontSize: "18px", fontFamily: "Inter" }}>
              Desenvolvedor Front-End Jr
            </span>
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            width: "484px",
          }}
        >
          <Typography
            variant="p"
            fontSize={"16px"}
            color={"#78797A"}
            fontFamily={"Inter"}
          >
            Sou formado em Ciência da Computação e trabalho como
            desenvolvedor front-end há 5 anos. Minhas experiências na área
            de programação me fizeram evoluir como profissional, e como
            consequência do amor pelo que faço, desenvolver se tornou meu
            hobby favorito.
          </Typography>
          <a href="#" style={{color:"#030E15", textDecoration:"underline", fontWeight:'600', fontFamily:'Inter'}}>@Henrique</a>
        </div>
        <div style={{display:"flex", justifyContent:'center', alignItems:'flex-start', flexDirection:'row', gap:"8px"}}>
          <div style={{width:"fit-content",height:'56px', display:'flex', alignItems:"center", justifyContent:'center', gap:"8px", background:'#FFFFFF', borderRadius:'100px', border: '1px solid #F7F7F7',padding:'12px 16px', color:'#030E15', fontSize:'14px', fontFamily:'Inter'}}>
            <span>ICONE</span>
            <span>2 anos de experiência</span>
          </div>  
          <div style={{width:"fit-content",height:'56px', display:'flex', alignItems:"center", justifyContent:'center', gap:"8px", background:'#FFFFFF', borderRadius:'100px', border: '1px solid #F7F7F7',padding:'12px 16px', color:'#030E15', fontSize:'14px', fontFamily:'Inter'}}>
            <span>ICONE</span>
            <span>Desenvolvedor</span>
          </div>               
          <div style={{width:"fit-content",height:'56px', display:'flex', alignItems:"center", justifyContent:'center', gap:"8px", background:'#FFFFFF', borderRadius:'100px', border: '1px solid #F7F7F7',padding:'12px 16px', color:'#030E15', fontSize:'14px', fontFamily:'Inter'}}>
            <span>ICONE</span>
            <span>Pixel Perfect</span>
          </div>               
        </div>
      </Box>
    </section>
  </Grid>
  )
}

export default AboutMe