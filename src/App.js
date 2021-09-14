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

  return (
    <AppStyled className="App">
      <BrowserRouter>
        <Sidebar navToggle={navToggle} />

        <div className="ham-burger-menu">
          <IconButton onClick={() => setNavToggle(!navToggle)}>
            <MenuIcon id="menuBtn" />
            <Close id="closeBtn" />
          </IconButton>
        </div>

        <MainContentStyled>
          {/* <div className="lines">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
            <div className="line-4"></div>
          </div> */}

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

  /* .lines {
    position: absolute;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  } */
`;

export default App;
