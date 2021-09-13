import React from "react";
import styled from "styled-components";

function PrimaryButton({ title }) {
  return <PrimaryButtonStyled>{title}</PrimaryButtonStyled>;
}

const PrimaryButtonStyled = styled.a`
  background-color: var(--primary-color);
  padding: 0.8rem 2.5rem;
  color: var(--white-color);
  cursor: pointer;
  display: inline-block;
  font-style: inherit;
  position: relative;

  &:hover::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.25rem;
    background-color: var(--white-color);
    left: 0;
    bottom: 0;
  }
`;

export default PrimaryButton;
