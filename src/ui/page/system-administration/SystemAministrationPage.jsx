import React, { useContext } from "react";
import { PageHeader } from "antd";
import ContentTab from "../../component/tabs/ContentTab";
import UserManagementPage from "./UserManagementPage";
import OfficePage from "./OfficePage";
import DocumentTypePage from "./DocumentTypePage";
import NavigatorContext from "../../../service/context/NavigatorContext";

const SystemAministrationPage = () => {
  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("user-management");
  return (
    <>
      <div className="base-container">
        <PageHeader title="System Administration"></PageHeader>
        <ContentTab
          content={[
            {
              title: "Office",
              key: "tab1",
              content: <OfficePage />,
            },
            {
              title: "User",
              key: "tab2",
              content: <UserManagementPage />,
            },
            {
              title: "Document Type",
              key: "tab3",
              content: <DocumentTypePage />,
            },
          ]}
        />
      </div>
    </>
  );
};

export default SystemAministrationPage;
