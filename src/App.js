import React, { useState } from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/ContactPage";
import OtherWorks from "./Pages/OtherWorks";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const menuButtonClick = () => {
    var menuBar = document.getElementById("menuBtn");
    var close = document.getElementById("closeBtn");

    setNavToggle(!navToggle);

    if (navToggle === false) {
      close.style.display = "block";
      menuBar.style.display = "none";
    } else {
      close.style.display = "none";
      menuBar.style.display = "block";
    }
  };

  return (
    <AppStyled className="App">
      <BrowserRouter>
        <Sidebar navToggle={navToggle} />

        <div className="ham-burger-menu">
          <IconButton onClick={menuButtonClick}>
            <MenuIcon id="menuBtn" />
            <Close id="closeBtn" style={{ display: "none" }} />
          </IconButton>
        </div>

        <MainContentStyled>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/projects" exact>
              <ProjectsPage />
            </Route>
            <Route path="/resume" exact>
              <ResumePage />
            </Route>
            <Route path="/other-works" exact>
              <OtherWorks />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
          </Switch>
        </MainContentStyled>
      </BrowserRouter>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  .ham-burger-menu {
    display: none;
    z-index: 1000;
  }
  @media screen and (max-width: 1300px) {
    .ham-burger-menu {
      display: block;
    }
  }
`;

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;

  @media screen and (max-width: 1300px) {
    margin-left: 0;
  }
`;

export default App;
