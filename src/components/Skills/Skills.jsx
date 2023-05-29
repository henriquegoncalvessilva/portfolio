import React from "react";
import { Grid } from "@mui/material";
import TerminalIcon from '@mui/icons-material/Terminal';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CodeIcon from '@mui/icons-material/Code';
const Skills = () => {
  return (
    <>
      <Grid  alignContent={"center"} justifyContent={"center"} style={{ background: "#653DF5" }} lg={12}>
        <Grid
          style={{ padding: "24px 0 24px 0", color:'#F6F6F6' }}
          display={"flex"}          
          gap={4}
          alignContent={"center"} justifyContent={"center"}>
          <span style={{display:'inherit', justifyContent:'center', gap:'8px', padding:'16px 32px 16px 32px', background:'rgba(255, 255, 255, 0.06)'}}><CodeIcon/>FrontEnd</span>
          <span style={{display:'inherit', justifyContent:'center',padding:'16px 32px 16px 32px', background:'rgba(255, 255, 255, 0.06)', gap:'8px'}}><TerminalIcon/>Desenvolvimento</span>
          <span style={{display:'inherit', justifyContent:'center',padding:'16px 32px 16px 32px', background:'rgba(255, 255, 255, 0.06)', gap:'8px'}}><EmojiEventsIcon/>Especialista</span>
          <span style={{display:'inherit', justifyContent:'center',padding:'16px 32px 16px 32px', background:'rgba(255, 255, 255, 0.06)', gap:'8px'}}><JavascriptIcon/>Code</span>
          <span style={{display:'inherit', justifyContent:'center',padding:'16px 32px 16px 32px', background:'rgba(255, 255, 255, 0.06)', gap:'8px'}}><EmojiObjectsIcon/>Design</span>
        </Grid>
      </Grid>
    </>
  );
};

export default Skills;
