import React from "react";
import styled from "styled-components";
import SmallTitle from "./SmallTitle";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";
import ResumeItems from "./ResumeItems";

function WorkExperience() {
  const briefCase = <WorkIcon />;
  const certificates = <CollectionsBookmarkIcon />;
  const school = <SchoolIcon />;

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
          text={
            "Write Automated test scripts for testing front-end of an application using Selenium and UFT. Maintained and enhanced Data-Driven Framework for integration testing of GUI and Web Applications"
          }
        />
        <div className="utility-marbottom">
          <ResumeItems
            year={"2020 Mar - 2020 Aug"}
            title={"Front-End Developer"}
            subtitle={"ClaySys"}
            text={
              "Created Appforms which is a metadata driven, future proof Forms and Application & Workflow builder platform. Performed various Accessibility development following WCAG 2.0 Guidelines"
            }
          />
        </div>
      </div>
      <div className="small-title">
        <SmallTitle icon={certificates} title={"Certificates"} />
      </div>
      <div className="resume-content">
        <ResumeItems
          year={"2021"}
          title={"Front-End Developer"}
          subtitle={"Certified by Infosys"}
        />
        <ResumeItems
          year={"2020"}
          title={"Python Associate Developer"}
          subtitle={"Certified by Infosys"}
        />
        <div className="utility-marbottom">
          <ResumeItems
            year={"2020"}
            title={"Selenium Automation"}
            subtitle={"Certified by Infosys"}
          />
        </div>
      </div>
      <div className="small-title">
        <SmallTitle icon={school} title={"Education"} />
      </div>
      <div className="resume-content">
        <ResumeItems
          year={"2017 - 2020"}
          title={"Bachelor of Computer Applications"}
          subtitle={"Kerala University"}
        />
        <ResumeItems
          year={"2015 - 2017"}
          title={"Higher Secondary Education - Computer Science"}
          subtitle={"CBSE"}
        />
        <ResumeItems
          year={"2014 - 2015"}
          title={"Secondary Education"}
          subtitle={"CBSE"}
        />
      </div>
    </WorkExperienceStyled>
  );
}

const WorkExperienceStyled = styled.div`
  .small-title {
    padding-bottom: 3rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;

export default WorkExperience;
