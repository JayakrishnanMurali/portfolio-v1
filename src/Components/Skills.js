import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";

function Skills() {
  return (
    <SkillsStyled>
      <Title title={"Skills"} span={"Skills"} />
      <InnerLayout className="grid">
        <div className="mar-class-util">
          <div className="programminglanguages">
            <h3>Programming Languages</h3>
            <ul>
              <li>Javascript (ES6+)</li>
            </ul>
            <ul>
              <li>Java</li>
            </ul>
            <ul>
              <li>Python</li>
            </ul>
            <ul>
              <li>VB Script</li>
            </ul>
          </div>
          <div className="programminglanguages">
            <h3>Tools & Frameworks</h3>
            <ul>
              <li>React</li>
            </ul>
            <ul>
              <li>Styled-components</li>
            </ul>
            <ul>
              <li>Firebase</li>
            </ul>
            <ul>
              <li>Photoshop</li>
            </ul>
          </div>
          <div className="tech-Stacks">
            <h3>Tech Stacks</h3>
            <p>HTML5 CSS3 Git GitHub Selenium Bootstrap</p>
            <p>AdobeXD Illustrator Jenkins QTP/UFT</p>
          </div>
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .mar-class-util {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;

    @media screen and (max-width: 560px) {
      margin-top: 1rem;
      margin-bottom: 2.5rem;
    }

    @media screen and (max-width: 560px) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 1rem;
    }
    h3 {
      font-size: 1.1rem;
      margin-bottom: 0.3rem;
      color: var(--primary-color);
      font-weight: 600;
    }
    p {
      font-size: 0.918rem;
      word-spacing: 7px;
      @media screen and (max-width: 560px) {
        font-size: 0.718rem;
      }
    }
    ul {
      list-style: none;
      li {
        font-size: 0.918rem;
        @media screen and (max-width: 560px) {
          font-size: 0.718rem;
        }
      }
    }
  }
`;
export default Skills;
