import React, { useState } from "react";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import projects from "../data/Projects";
import Menu from "../Components/Menu";
import Button from "../Components/Button";

const allButtons = ["All", ...new Set(projects.map((item) => item.category))];

function ProjectsPage() {
  const [menuItem, setMenuItem] = useState(projects);
  const [button, setbutton] = useState(allButtons);

  const filter = (button) => {
    if (button === "All") {
      setMenuItem(projects);
      return;
    }

    const filteredData = projects.filter((item) => item.category === button);
    setMenuItem(filteredData);
  };

  return (
    <MainLayout>
      <Title title={"Projects"} span={"Projects"} />
      <InnerLayout>
        <Button filter={filter} button={button} />
        <Menu menuItem={menuItem} />
      </InnerLayout>
    </MainLayout>
  );
}

export default ProjectsPage;
