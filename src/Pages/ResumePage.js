import React from "react";
import styled from "styled-components";
import Skills from "../Components/Skills";
import WorkExperience from "../Components/WorkExperience";
import { MainLayout } from "../styles/Layouts";
import PrimaryButton from "../Components/PrimaryButton";
import resume from "../img/Resume.docx";

function ResumePage() {
  return (
    <ResumePageStyled>
      <MainLayout>
        <Skills />
        <div className="dwnldCVbtn">
          <a href={resume} download>
            <PrimaryButton title={"DOWNLOAD RESUME"} />
          </a>
        </div>
        <WorkExperience />
      </MainLayout>
    </ResumePageStyled>
  );
}

const ResumePageStyled = styled.div`
  .dwnldCVbtn {
    margin-bottom: 6rem;
  }
`;

export default ResumePage;
