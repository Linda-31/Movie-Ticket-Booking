import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";


const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
 
  function activeLink ({isActive}) {
      return {color:isActive?"skyblue":"white"};
    }
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center"}}>
      <Typography
        color={"lightblue"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2, backgroundColor:"black" }}
        
      >
        Fast Ticketing
         <img src={logo} alt="logo" height={"70"} width="200" />
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/home"} style={activeLink}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/movie"} style={activeLink}>Movie</NavLink>
        </li>
        <li>
          <NavLink to={"/Theatres"} style={activeLink}>Theatres</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"} style={activeLink}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"lightblue"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
               Fast Ticketing
            <img src={logo} alt="logo" height={"70"} width="100" />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>
                  
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/home"} style={activeLink}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/movie"} style={activeLink}>Movie</NavLink>
                </li>
                <li>
                  <NavLink to={"/Theatres"} style={activeLink}>Theatres</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"} style={activeLink}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
