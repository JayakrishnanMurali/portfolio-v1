import React from "react";
import styled from "styled-components";
import SmallTitle from "./SmallTitle";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItems from "./ResumeItems";

function WorkExperience() {
  const briefCase = <WorkIcon />;

  return (
    <WorkExperienceStyled>
      <div className="small-title">
        <SmallTitle icon={briefCase} title={"Work Experience"} />
      </div>
      <div className="resume-content">
        <ResumeItems
          year={"2020 Aug - Present"}
          title={"Automation Test Engineer"}
          subtitle={"Infosys"}
        />
      </div>
    </WorkExperienceStyled>
  );
}

const WorkExperienceStyled = styled.div`
  .small-title {
    padding-bottom: 3rem;
  }
`;

export default WorkExperience;
