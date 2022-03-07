import { PageHeader, Table } from "antd";
import React, { useContext } from "react";
import ContentTab from "../../component/tabs/ContentTab";
import NavigatorContext from "../../../service/context/NavigatorContext";

const HomePage = () => {
  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("home");
  return (
    <>
      <PageHeader title="Home" subTitle="Announcement and Events" />
      <ContentTab
        content={[
          {
            title: "Tab 1",
            key: "tab1",
          },
        ]}
      />
    </>
  );
};

export default HomePage;
