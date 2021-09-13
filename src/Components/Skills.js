import React from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";

function Skills() {
  return (
    <SkillsStyled>
      <Title title={"Skills"} span={"Skills"} />
      <InnerLayout className="grid">
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
      </InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    h3 {
      font-size: 1.1rem;
      margin-bottom: 0.3rem;
      color: var(--primary-color);
      font-weight: 600;
    }
    p {
      font-size: 0.918rem;
      word-spacing: 7px;
    }
    ul {
      list-style: none;
      li {
        font-size: 0.918rem;
      }
    }
  }
`;
export default Skills;
