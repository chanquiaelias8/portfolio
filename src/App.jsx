import { Box, Container } from "@mui/material";
import Menu from "./components/Menu/Menu.jsx";
import { Route, Routes } from "react-router-dom";
import './app.css'

import Home from "./views/Home/Home.jsx";
import AboutMe from "./views/AboutMe/AboutMe.jsx";
import Projects from "./views/Projects/Projects.jsx";
import ContactMe from "./views/ContactMe/ContactMe.jsx";


import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';
import DataObjectRoundedIcon from '@mui/icons-material/DataObjectRounded';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { useState } from "react";

const navArrayLinks = [
  {
      title: "Inicio", 
      path: "/",
      icon: <HomeRoundedIcon/>
  },
  {
      title: "Sobre Mi", 
      path: "/aboutme",
      icon: <EmojiPeopleRoundedIcon/>
  },
  {
      title: "Projectos", 
      path: "/projects",
      icon: <DataObjectRoundedIcon/>
  },
   {
      title: "Contacto", 
      path: "/contactme",
      icon: <ContactPageRoundedIcon/>
  }
]

function App() {

  const [toggle, setToggle] = useState(false);

  const changeToggle = () => toggle ? setToggle(false) : setToggle(true);

  return (
    <>
      <Container sx={{
        display: "flex",
        p: {
          xs: 0,
          sm: 3
        },
        m: 0,
        height: "100vh"
        }}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}>
          <Menu navArrayLinks={navArrayLinks} toggle={toggle}/>
        </Box>
        <button
          className={ toggle ? "active" : ""}
          onClick={() => changeToggle()}
        >
          {
            toggle
            ? <HighlightOffOutlinedIcon sx={{ fontSize: "3rem", color: "white"}}/>
            : <GridViewRoundedIcon sx={{ fontSize: "3rem", color: "#1976d2"}}/>
          }
        </button>
        <Container
          sx={{ 
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aboutme" element={<AboutMe/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contactme" element={<ContactMe/>}/>
          </Routes>
        </Container>
      </Container>
    </>
  )
}

export default App