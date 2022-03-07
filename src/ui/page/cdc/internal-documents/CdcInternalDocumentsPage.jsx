import React, { useContext } from "react";
import { PageHeader } from "antd";
import ContentTab from "../../../component/tabs/ContentTab";

import NavigatorContext from "../../../../service/context/NavigatorContext";
import DicrRegistrationAndMonitoringFormPage from "./DicrRegistrationAndMonitoringFormPage";
import MasterListPageInternal from "./MasterListPageInternal";

const CdcInternalDocumentsPage = () => {
  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("internal-documents");
  return (
    <>
      <PageHeader title="Internal Documents"></PageHeader>
      <ContentTab
        content={[
          {
            title: "DICR Registration and Monitoring Form",
            key: "tab1",
            content: <DicrRegistrationAndMonitoringFormPage />,
          },
          {
            title: "Master List of Internal Documented Information",
            key: "tab2",
            content: <MasterListPageInternal />,
          },
          {
            title: "Issuance And Revision History",
            key: "tab3",
            content: <MasterListPageInternal />,
          },
        ]}
      />
    </>
  );
};

export default CdcInternalDocumentsPage;
