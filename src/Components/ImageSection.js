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

  @media screen and (max-width: 1200px) {
    flex-direction: column-reverse;
    gap: 2rem;
    .right-content {
      margin-bottom: 2rem;
      width: 100%;
    }
  }
  .right-content {
    width: 100%;
    margin-left: 2rem;
    img {
      width: 70%;
      height: 13rem;
      object-fit: cover;

      @media screen and (max-width: 1200px) {
        width: 70%;
        height: 27rem;
      }
      @media screen and (max-width: 960px) {
        width: 80%;
        height: 25rem;
      }
      @media screen and (max-width: 700px) {
        width: 80%;
        height: 19rem;
      }
      @media screen and (max-width: 540px) {
        width: 75%;
        height: 12rem;
      }
    }
    .img-border {
      width: 30%;
      height: 13rem;
      z-index: -1;
      right: 105px;
      top: 25px;
      border: 2px solid var(--primary-color);
      position: absolute;

      @media screen and (max-width: 1200px) {
        width: 70%;
        height: 27rem;
        left: 60px;
      }
      @media screen and (max-width: 960px) {
        width: 80%;
        height: 25rem;
      }
      @media screen and (max-width: 700px) {
        width: 80%;
        height: 19rem;
      }
      @media screen and (max-width: 540px) {
        width: 75%;
        height: 12rem;
      }
    }
  }
  .left-content {
    .paragraph {
      padding: 0.5rem 0;
      font-size: 0.868rem;

      @media screen and (max-width: 1200px) {
        width: 90%;
        margin-left: 2rem;
        font-size: 1.3rem;
        font-weight: 200;
      }
      @media screen and (max-width: 960px) {
        width: 90%;
        font-size: 1rem;
      }

      @media screen and (max-width: 700px) {
        width: 82%;
        font-size: 0.918rem;
        padding: 0.1rem 0;
        word-spacing: 2px;
      }
      @media screen and (max-width: 540px) {
        width: 80%;
        font-size: 0.818rem;
        padding: 0.1rem 0;
        word-spacing: 2px;
      }
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

          @media screen and (max-width: 1200px) {
            font-size: 1.2rem;
          }
          @media screen and (max-width: 960px) {
            font-size: 1rem;
          }
          @media screen and (max-width: 700px) {
            font-size: 0.968rem;
          }
          @media screen and (max-width: 540px) {
            font-size: 0.718rem;
          }

          span {
            color: var(--font-light-color);
            font-size: 0.768rem;

            @media screen and (max-width: 1200px) {
              font-size: 1.2rem;
            }
            @media screen and (max-width: 960px) {
              font-size: 0.968rem;
            }
            @media screen and (max-width: 700px) {
              font-size: 0.918rem;
            }
            @media screen and (max-width: 540px) {
              font-size: 0.718rem;
            }
          }
        }
      }
    }
  }
`;

export default ImageSection;
