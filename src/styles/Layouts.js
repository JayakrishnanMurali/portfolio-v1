import styled from "styled-components";

export const MainLayout = styled.div`
  padding: 5rem;
  @media screen and (max-width: 960px) {
    padding: 3rem;
  }
  @media screen and (max-width: 700px) {
    padding: 2.2rem 1.5rem;
  }
  @media screen and (max-width: 540px) {
    padding: 5rem 1rem;
  }
`;

export const InnerLayout = styled.div`
  padding: 5rem 0;

  @media screen and (max-width: 960px) {
    padding: 3rem;
  }
  @media screen and (max-width: 700px) {
    padding: 2.2rem;
  }
  @media screen and (max-width: 540px) {
    padding: 0.6rem 0;
  }
`;
