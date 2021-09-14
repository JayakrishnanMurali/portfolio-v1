import React from "react";
import styled from "styled-components";
import GitHub from "@material-ui/icons/GitHub";
import Language from "@material-ui/icons/Language";

function Menu({ menuItem }) {
  return (
    <MenuStyled>
      {menuItem.map((item) => {
        return (
          <div className="grid-item" key={item.id}>
            <div className="portfolio-content">
              <div className="portfolio-image">
                <img src={item.image} alt="" />
                <ul>
                  <li>
                    <a href={item.gitLink} target="_blank" rel="noreferrer">
                      <GitHub />
                    </a>
                  </li>
                  <li>
                    <a href={item.appLink} target="_blank" rel="noreferrer">
                      <Language />
                    </a>
                  </li>
                </ul>
              </div>
              <h6>{item.title}</h6>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  .grid-item {
    &:not(:last-child) {
      margin-bottom: 3rem;
    }
    .portfolio-content {
      position: relative;
      p {
        font-size: 0.918rem;
        margin-top: 0.4rem;
      }
      h6 {
        font-size: 1.5rem;
        margin-top: 0.2rem;
      }
      .portfolio-image {
        display: block;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          left: 15px;
          top: 15px;
          transition: all 0.4s ease-in-out;
          height: 0;
          width: 0;
        }
        img {
          width: 100%;
          height: 70vh;
          object-fit: cover;
        }
        ul {
          transform: translateY(-100px);
          transition: all 0.4s ease-in-out;
          position: absolute;
          left: 50%;
          top: 50%;
          opacity: 0;
          display: flex;
          list-style: none;
          align-items: center;
          justify-content: center;

          svg {
            font-size: 3rem;
          }

          li {
            background-color: var(--border-color);
            display: flex;
            list-style: none;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            border-radius: 50%;
            width: 4rem;
            height: 4rem;
            margin: 0 0.7rem;
            transition: all 0.4s ease-in-out;

            &:hover {
              background-color: var(--primary-color);
            }

            a {
              display: flex;
              list-style: none;
              align-items: center;
              justify-content: center;
              transition: all 0.4s ease-in-out;
            }
          }
        }
      }
      .portfolio-image:hover {
        ul {
          transform: translateY(0);
          transform: translate(-50%, -50%);
          display: flex;
          list-style: none;
          align-items: center;
          justify-content: center;
          opacity: 1;
          li {
            transition: all 0.4s ease-in-out;

            &:hover {
              background-color: var(--primary-color);
            }

            a {
              display: flex;
              list-style: none;
              align-items: center;
              justify-content: center;
              transition: all 0.4s ease-in-out;
            }
          }
          li:hover {
            svg {
              color: var(--white-color);
            }
          }
          svg {
            font-size: 3rem;
          }
        }
        &::before {
          height: calc(100% - 30px);
          width: calc(100% - 30px);
          background-color: white;
          opacity: 0.9;
          transform-origin: center;
        }
      }
    }
  }
`;
export default Menu;
