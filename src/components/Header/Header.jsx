import { Button, Grid } from "@mui/material";
import React from "react";
import './Header.css';
import Logo from "../../assets/logo.png"

const style ={
    color:'white',
    fontSize: '16px',
    lineHeight: '19px',
    fontFamily:'Inter, sans-serif'
}

const Header = () => {
  return (
    <>
      <Grid lg={10} md={11} sm={10}>
        <header
          className="Header"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            justifyContent: "space-between",
            paddingTop: "33px",
          }}
        >
          <div className="ContainerLogo">
            LOGOOOOOOOOOOOOOO
            {/* <img src={Logo} /> */}
          </div>
          <div className="ContainerMenu">
            <Button sx={style}>Quem sou eu</Button>
            <Button sx={style}>Cases</Button>
            <Button sx={style}>Contato</Button>
          </div>
        </header>
      </Grid>
    </>
  );
};

export default Header;
