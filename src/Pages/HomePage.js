import { Facebook, GitHub, Instagram } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Particle from "../Components/Particle";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="p-particles-js">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi I'm <span>Jayakrishnan</span>
        </h1>
        <p>I build things for the web.</p>
        <div className="icons">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100009589212408"
            className="icon i-facebook"
          >
            <Facebook />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/JayakrishnanMurali"
            className="icon i-github"
          >
            <GitHub />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/the_rollinsoul/"
            className="icon i-instagram"
          >
            <Instagram />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .p-particles-js {
    position: absolute;
    top: 0;
    left: 0;
  }

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.5s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }
    }
  }
`;

export default HomePage;
