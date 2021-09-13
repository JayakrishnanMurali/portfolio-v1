import React from "react";
import styled from "styled-components";

function ResumeItems({ year, title, subtitle }) {
  return (
    <ResumeItemsStyled>
      <div className="left-content">
        <p>{year}</p>
      </div>
      <div className="right-content">
        <h5>{title}</h5>
        <h6>{subtitle}</h6>
      </div>
    </ResumeItemsStyled>
  );
}

const ResumeItemsStyled = styled.div`
  display: flex;
  .left-content {
    width: 30%;
    p {
      display: inline-block;
      font-size: 1.1rem;
    }
  }
  .right-content {
    margin-left: 3rem;
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
      color: var(--white-color);
    }
  }
`;
export default ResumeItems;
