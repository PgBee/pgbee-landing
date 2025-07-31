import React, { useState } from "react";
import Logo from "../Assets/PgBee.svg";
// import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import HomeIcon from "@mui/icons-material/Home";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
// import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "About",
      icon: <InfoOutlinedIcon />,
      href: "#About"
    },
    {
      text: "Working",
      icon: <WorkOutlineIcon />,
      href: "#Work"
    },
    {
      text: "Contact",
      icon: <ContactMailOutlinedIcon />,
      href: "#Contact"
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" width="100"/>
      </div>
      <div className="navbar-links-container">
        <a href="#About">About</a>
        <a href="#Work">Working</a>
        <a href="#Contact">Contact</a>
        <a href="https://app.pgbee.in" target="_blank" rel="noopener noreferrer">
          <button className="primary-button">Search Now</button>
        </a>
      </div>
      <div className="navbar-menu-container" onClick={() => setOpenMenu(!openMenu)}>
        <div className={`hamburger-icon${openMenu ? " open" : ""}`}>
          {openMenu ? <IoClose size={32} /> : <HiOutlineBars3 size={32} />}
        </div>
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right" transitionDuration={400}>
        <Box
          sx={{ width: 260, background: '#fff', height: '100%', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, boxShadow: 3, p: 2 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
                <ListItemButton component="a" href={item.href} sx={{ borderRadius: 2, background: '#f6f6f6', mb: 1, '&:hover': { background: '#fff200' } }}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={<span style={{fontWeight:600, fontFamily:'Red Hat Display, sans-serif'}}>{item.text}</span>} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
            <ListItemButton component="a" href="https://app.pgbee.in" target="_blank" rel="noopener noreferrer" sx={{ borderRadius: 2, background: '#fff200', mt: 2 }}>
              <ListItemText primary={<span style={{fontWeight:800, fontSize:'1.15rem', fontFamily:'Red Hat Display, sans-serif', display:'block', textAlign:'center'}}>Search Now</span>} sx={{ color: '#000' }} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;