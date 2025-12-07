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
  ]
  return (
    <nav className="flex items-center justify-between min-h-[90px] z-10 relative">
      <div className="max-w-[100px]">
        <Image src="/PgBee.svg" alt="PgBee Logo" width={100} height={50} />
      </div>
      <div className="hidden lg:flex lg:items-center lg:gap-12 md:gap-4">
        <a href="#About" className="text-black font-semibold text-lg md:text-base hover:text-yellow-400 transition-colors duration-200">About</a>
        <a href="#Work" className="text-black font-semibold text-lg md:text-base hover:text-yellow-400 transition-colors duration-200">Working</a>
        <a href="#Contact" className="text-black font-semibold text-lg md:text-base hover:text-yellow-400 transition-colors duration-200">Contact</a>
        <a href="https://app.pgbee.in" target="_blank" rel="noopener noreferrer">
          <button className="px-7 py-2.5 bg-white hover:bg-gray-200 border-none rounded-full text-lg md:text-base font-bold text-black cursor-pointer transition-colors duration-200">Search Now</button>
        </a>
      </div>
      <div className="flex lg:hidden items-center justify-center p-2 z-50 cursor-pointer">
        <HamburgerIcon isOpen={openMenu} toggle={() => setOpenMenu(!openMenu)} />
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
                  <ListItemText primary={<span className="font-semibold">{item.text}</span>} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
            <ListItemButton component="a" href="https://app.pgbee.in" target="_blank" rel="noopener noreferrer" sx={{ borderRadius: 2, background: '#fff200', mt: 2 }}>
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
