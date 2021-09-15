import React from "react";
import styled from "styled-components";

function Button({ filter, button }) {
  return (
    <ButtonsStyled>
      {button.map((but, i) => {
        return (
          <ButtonStyled key={i} onClick={() => filter(but)}>
            {but}
          </ButtonStyled>
        );
      })}
    </ButtonsStyled>
  );
}

const ButtonStyled = styled.button`
  outline: none;
  border: none;
  background-color: var(--background-light-color-2);
  padding: 0.5rem 2rem;
  font-size: inherit;
  color: var(--white-color);
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    margin-bottom: 0.5rem;
    margin-top: 1rem;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
  @media screen and (max-width: 540px) {
    display: none;
  }
  &:active,
  &:focus {
    background-color: var(--primary-color);
  }
  &:hover {
    background-color: var(--primary-color);
  }
  &:not(:last-child) {
    margin-right: 0.6rem;
  }
`;

const ButtonsStyled = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 2.4 auto;
`;

export default Button;
