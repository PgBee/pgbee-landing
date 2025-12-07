'use client'

import React, { useState } from "react"
import Image from 'next/image'
import HamburgerIcon from "./HamburgerIcon"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import WorkOutlineIcon from "@mui/icons-material/WorkOutline"
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const menuOptions = [
    {
      text: "About",
      icon: <InfoOutlinedIcon />,
      href: "#about"
    },
    {
      text: "Working",
      icon: <WorkOutlineIcon />,
      href: "#work"
    },
    {
      text: "Contact",
      icon: <ContactMailOutlinedIcon />,
      href: "#contact"
    },
  ]
  return (
    <nav className="sticky m-1">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4  mx-auto">
        <div className="shrink-0 w-[90px] p-4 sm:w-[100px] lg:w-[110px]">
          <Image src="/PgBee.svg" alt="PgBee Logo" width={110} height={50} className="w-full h-auto" priority />
        </div>
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          <a href="#about" className="text-gray-700 font-medium text-sm xl:text-base hover:text-yellow-500 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-yellow-500 after:transition-all after:duration-300">About</a>
          <a href="#work" className="text-gray-700 font-medium text-sm xl:text-base hover:text-yellow-500 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-yellow-500 after:transition-all after:duration-300">How it Works</a>
          <a href="#contact" className="text-gray-700 font-medium text-sm xl:text-base hover:text-yellow-500 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-yellow-500 after:transition-all after:duration-300">Contact</a>
          <a href="https://app.pgbee.in" target="_blank" rel="noopener noreferrer">
            <button className="px-6 xl:px-8 py-2.5 xl:py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-sm xl:text-base rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">Get Started</button>
          </a>
        </div>
        <div className="flex lg:hidden items-center justify-center z-50">
          <HamburgerIcon isOpen={openMenu} toggle={() => setOpenMenu(!openMenu)} />
        </div>
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right" transitionDuration={400}>
        <Box
          sx={{ width: 280, background: '#fff', height: '100%', borderTopLeftRadius: 24, borderBottomLeftRadius: 24, boxShadow: 4, p: 3 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List sx={{ mt: 2 }}>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding sx={{ mb: 2 }}>
                <ListItemButton component="a" href={item.href} sx={{ borderRadius: 3, background: '#f6f6f6', py: 1.5, '&:hover': { background: '#fff200', transform: 'scale(1.02)' }, transition: 'all 0.3s' }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={<span className="font-semibold text-base">{item.text}</span>} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding sx={{ mt: 3 }}>
            <ListItemButton component="a" href="https://app.pgbee.in" target="_blank" rel="noopener noreferrer" sx={{ borderRadius: 3, background: '#fff200', py: 2, '&:hover': { background: '#ffed4e', transform: 'scale(1.02)' }, transition: 'all 0.3s', boxShadow: 2 }}>
              <ListItemText primary={<span className="font-bold text-lg block text-center text-black">Search Now</span>} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </nav>
  )
}

export default Navbar
