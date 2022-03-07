import { PageHeader } from "antd";
import React, { useContext } from "react";
import NavigatorContext from "../../../service/context/NavigatorContext";

const AboutPage = () => {
  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("about");
  return (
    <>
      <PageHeader title="About Camarines Norte State College" />

      <div className="base-container">This is about page</div>
    </>
  );
};

export default AboutPage;
