import React from "react";
import styled from "styled-components";
import profile from "../img/profile.jpg";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <p className="paragraph">
          Hello! My name is Jayakrishnan and I enjoy designing and creating
          things. I make simple things in web. I am currently working as an
          Automation tester at Infosys.
        </p>
        <p className="paragraph">
          I am a die-hard cricket fan who loves occacional football matches.
          Watches lot of Netflix and Anime. I would rather spend my day binging
          Netflix than going for a trip.
        </p>
        <p className="paragraph">
          Here are a few technologies I’ve been working with recently:
          <div className="flex">
            <ul>
              <li>
                <span>JavaScript (ES6+)</span>
              </li>
              <li>
                <span>React</span>
              </li>
            </ul>
            <ul>
              <li>
                <span>Firebase</span>
              </li>
              <li>
                <span>Styled-components</span>
              </li>
            </ul>
          </div>
        </p>
      </div>
      <div className="right-content">
        <img src={profile} alt="" />
        <div className="img-border"></div>
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  display: flex;
  margin-top: 5rem;
  position: relative;
  .right-content {
    width: 100%;
    margin-left: 2rem;
    img {
      width: 70%;
      height: 13rem;
      object-fit: cover;
    }
    .img-border {
      width: 30%;
      height: 13rem;
      z-index: -1;
      right: 105px;
      top: 25px;
      border: 2px solid var(--primary-color);
      position: absolute;
    }
  }
  .left-content {
    .paragraph {
      padding: 0.5rem 0;
      font-size: 0.868rem;
      .flex {
        display: flex;
        align-items: center;
        margin-top: 0.5rem;
      }

      ul {
        margin-right: 2rem;
        padding-left: 1rem;
        li {
          font-size: 0.868rem;
          list-style: circle;
          color: var(--primary-color);

          span {
            color: var(--font-light-color);
            font-size: 0.768rem;
          }
        }
      }
    }
  }
`;

export default ImageSection;
