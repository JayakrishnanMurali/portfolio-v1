import React from "react";
import styled from "styled-components";
import Skills from "../Components/Skills";
import WorkExperience from "../Components/WorkExperience";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import PrimaryButton from "../Components/PrimaryButton";

function ResumePage() {
  return (
    <ResumePageStyled>
      <MainLayout>
        <Skills />
        <div className="dwnldCVbtn">
          <PrimaryButton title={"DOWNLOAD RESUME"} />
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
