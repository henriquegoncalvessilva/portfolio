import { Grid, Typography } from '@mui/material'
import React from 'react'

const Differentials = () => {
  return (
    <Grid lg={12} style={{background:'white', display:'flex', alignItems:'center', justifyContent:'center'}}>
    <section style={{padding:'112px', gap:'64px', display:'flex', flexDirection:'column'}}>
      <div style={{display:'flex', justifyContent:'space-between', gap:'32px'}}>
        <Typography style={{fontSize:'32px', color:'#030E15', fontFamily:"Poppins", fontWeight:"600"}} variant="h3">Meus diferenciais</Typography>
        <p style={{fontSize:'16px', fontFamily:"Inter", color:"#78797A"}}><span style={{color:'#030E15', fontWeight:"600"}}>Transformo design</span> em páginas para a web com<br/> agilidade, qualidade e <span style={{color:'#030E15', fontWeight:"600"}}>alta perfomance.</span></p>
      </div>
      <div style={{display:'flex', flexDirection:"row", flexWrap:'wrap', gap:'32px'}}>
        <div style={{width:'384px', flexGrow:'1', height:'208px',display:"flex", gap:'16px', padding:'32px 79px 32px 32px', background:'#F7F7F7', flexDirection:'column'}}>
          <span>ICONE</span>
          <Typography variant="h4" style={{fontSize:'20px', fontFamily:"Poppins"}}>FrontEnd</Typography>
          <Typography variant="p" style={{fontSize:"16px", fontFamily:'Inter'}}>Proin commodo orci sed magna<br/> consectetur elementum.</Typography>
        </div>
        <div style={{width:'384px', flexGrow:'1', height:'208px',display:"flex", gap:'16px', padding:'32px 79px 32px 32px', background:'#F7F7F7', flexDirection:'column'}}>
          <span>ICONE</span>
          <Typography variant="h4" style={{fontSize:'20px', fontFamily:"Poppins"}}>Desenvolvimento</Typography>
          <Typography variant="p" style={{fontSize:"16px", fontFamily:'Inter'}}>Proin commodo orci sed magna<br/> consectetur elementum.</Typography>
        </div>
        <div style={{width:'384px', flexGrow:'1', height:'208px',display:"flex", gap:'16px', padding:'32px 79px 32px 32px', background:'#F7F7F7', flexDirection:'column'}}>
          <span>ICONE</span>
          <Typography variant="h4" style={{fontSize:'20px', fontFamily:"Poppins"}}>Especialista</Typography>
          <Typography variant="p" style={{fontSize:"16px", fontFamily:'Inter'}}>Proin commodo orci sed magna<br/> consectetur elementum.</Typography>
        </div>
        <div style={{width:'384px', flexGrow:'1', height:'208px',display:"flex", gap:'16px', padding:'32px 79px 32px 32px', background:'#F7F7F7', flexDirection:'column'}}>
          <span>ICONE</span>
          <Typography variant="h4" style={{fontSize:'20px', fontFamily:"Poppins"}}>Code</Typography>
          <Typography variant="p" style={{fontSize:"16px", fontFamily:'Inter'}}>Proin commodo orci sed magna<br/> consectetur elementum.</Typography>
        </div>
        <div style={{width:'384px', flexGrow:'1', height:'208px',display:"flex", gap:'16px', padding:'32px 79px 32px 32px', background:'#F7F7F7', flexDirection:'column'}}>
          <span>ICONE</span>
          <Typography variant="h4" style={{fontSize:'20px', fontFamily:"Poppins"}}>Design</Typography>
          <Typography variant="p" style={{fontSize:"16px", fontFamily:'Inter'}}>Proin commodo orci sed magna<br/> consectetur elementum.</Typography>
        </div>
        <div style={{width:'384px', flexGrow:'1', height:'208px',display:"flex", gap:'16px', padding:'32px 79px 32px 32px', background:'#F7F7F7', flexDirection:'column'}}>
          <span>ICONE</span>
          <Typography variant="h4" style={{fontSize:'20px', fontFamily:"Poppins"}}>Fidelidade</Typography>
          <Typography variant="p" style={{fontSize:"16px", fontFamily:'Inter'}}>Proin commodo orci sed magna<br/> consectetur elementum.</Typography>
        </div>
        
      </div>
    </section>
    </Grid>
  )
}

export default Differentials