import React from "react";
import Tabs from "./project/Tabs";
import Website from "./project/Website";

const Project = () => {
  return (
    <div className="project" id="project">
      <Tabs config={[
        {
          header: "Website",
          components: <Website/>
        },
        {
          header: "Other"
        },
      ]}/>
    </div>
  );
};

export default Project;
