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
    }
  }
  .right-content {
    padding-left: 4rem;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 15px;
      height: 2px;
      width: 3rem;
      background-color: var(--border-color);
    }
    h5 {
      color: var(--primary-color);
      font-size: 1.2rem;
      padding-bottom: 0.4rem;
      font-weight: 500;
    }
    h6 {
      font-weight: 400;
      font-size: 0.978rem;
      color: var(--white-color);
    }
    p {
      font-size: 0.918rem;
      padding-top: 1rem;
      width: 28rem;
    }
  }
`;
export default ResumeItems;
