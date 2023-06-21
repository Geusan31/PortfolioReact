import React, { useState } from "react";

const Tabs = ({config}) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div className="header">
        <h2>Project</h2>
        <div className="tabs">
          <ul>
            {
              config.map((entry, index) => {
                console.log(index, entry)
                return (
                  <li key={index} className={activeTab === index ? "active" : ""} onClick={() => setActiveTab(index)}>{entry.header}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
      <div className="contents">
        <div className="content">
          {
            config[activeTab].components
          }
        </div>
      </div>
    </>
  );
};

export default Tabs;
