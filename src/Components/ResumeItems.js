import React from "react";
import styled from "styled-components";

function ResumeItems({ year, title, subtitle, text }) {
  return (
    <ResumeItemsStyled>
      <div className="left-content">
        <p>{year}</p>
      </div>
      <div className="right-content">
        <h5>{title}</h5>
        <h6>{subtitle}</h6>
        <p>{text}</p>
      </div>
    </ResumeItemsStyled>
  );
}

const ResumeItemsStyled = styled.div`
  display: flex;
  &:not(:last-child) {
    padding-bottom: 3rem;
  }
  @media screen and (max-width: 560px) {
    flex-direction: column;
  }
  .left-content {
    width: 70%;

    padding-left: 20px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: -12px;
      background-color: var(--background-dark-color);
      top: 5px;
      height: 17px;
      width: 17px;
      border-radius: 50%;
      border: 2px solid var(--border-color);
    }
    p {
      display: inline-block;
      font-size: 1.1rem;
      @media screen and (max-width: 960px) {
        font-size: 0.918rem;
      }
      @media screen and (max-width: 700px) {
        font-size: 0.718rem;
      }
    }
  }
  .right-content {
    padding-left: 4rem;
    position: relative;
    @media screen and (max-width: 700px) {
      padding-left: 5rem;
    }
    @media screen and (max-width: 560px) {
      padding-left: 2rem;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 15px;
      height: 2px;
      width: 3rem;
      background-color: var(--border-color);
      @media screen and (max-width: 960px) {
        height: 2px;
        width: 2rem;
        left: 20px;
      }
      @media screen and (max-width: 700px) {
        height: 2px;
        width: 1.4rem;
        left: 40px;
      }
      @media screen and (max-width: 560px) {
        display: none;
      }
    }
    h5 {
      color: var(--primary-color);
      font-size: 1.2rem;
      padding-bottom: 0.4rem;
      font-weight: 500;
      @media screen and (max-width: 700px) {
        font-size: 1rem;
        width: 19rem;
      }
      @media screen and (max-width: 700px) {
        font-size: 0.969rem;
        width: 16rem;
      }
      @media screen and (max-width: 560px) {
        font-size: 0.918rem;
        width: 13rem;
      }
    }
    h6 {
      font-weight: 400;
      font-size: 0.978rem;
      color: var(--white-color);
      @media screen and (max-width: 700px) {
        font-size: 0.878rem;
        font-weight: 600;
      }
      @media screen and (max-width: 560px) {
        font-size: 0.818rem;
      }
    }
    p {
      font-size: 0.918rem;
      padding-top: 1rem;
      width: 28rem;
      @media screen and (max-width: 960px) {
        width: 20rem;
      }
      @media screen and (max-width: 700px) {
        font-size: 0.818rem;
        width: 19rem;
      }
      @media screen and (max-width: 560px) {
        font-size: 0.718rem;
        width: 13rem;
      }
    }
  }
`;
export default ResumeItems;
