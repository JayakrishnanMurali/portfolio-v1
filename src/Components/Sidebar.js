import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

function Sidebar({ navToggle }) {
  return (
    <SidebarStyled className={`${navToggle ? "nav-toggle" : ""}`}>
      <Navigation></Navigation>
    </SidebarStyled>
  );
}

const SidebarStyled = styled.div`
  width: 16.3rem;
  height: 100vh;
  background-color: var(--sidebar-dark-color);
  position: fixed;
  overflow: hidden;
  transition: all 0.4s ease-in-out;

  @media screen and (max-width: 1300px) {
    transform: translateX(-100%);
    z-index: 100;
  }
  @media screen and (max-width: 540px) {
    width: 100%;
    transform: translateX(-100%);
    z-index: 100;
  }
`;

export default Sidebar;
