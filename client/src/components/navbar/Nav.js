import * as React from "react";
import { NavLink} from "react-router-dom"
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";


import logo from "../../imgs/toned-logo.svg"
import logoTitle from "../../imgs/toned-title.svg"

export default function Navbar(props) {

  let username = props.user

  React.useEffect(() => {
    console.log(props)
  })

  const NavBarStyle = [
    {backgroundColor: "#535D65"},
    {borderBottom: 2},
    {borderColor: "black"},
  ]

  const NavLinkStyle = {textDecoration: "none", color: "#2D3339"}


  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static" sx={NavBarStyle}>
        <Toolbar sx={[{justifyContent: "space-between"}, {alignItems: "center"}]}>
          <Box sx={[{display: "flex"},{alignItems: "center"}]}>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={[{ mr: 2 }, {color: "white"}]}
              onClick={handleMenu}
            >
              <MenuIcon sx={{fontSize: "1.5em"}}/>
            </IconButton>
            <img src={logoTitle} alt="toned" className="navbarImg" style={{width: "10%"}}/>
            <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <NavLink style={NavLinkStyle} to="/"><MenuItem onClick={handleClose}>Home</MenuItem></NavLink>
                  <NavLink style={NavLinkStyle} to={{pathname: `/add?user=${username}`}}><MenuItem onClick={handleClose}>Add Workout</MenuItem></NavLink>
                  <NavLink style={NavLinkStyle} to={{pathname: `/pastworkouts?user=${username}`}}><MenuItem onClick={handleClose}>Past Workouts</MenuItem></NavLink>
            </Menu>
          </Box>
          <Box sx = {{flexGrow: 0}}>
            <img src={logo} alt="toned-logo" className="navbarImg" />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
