import React, { useContext } from "react";
import { PageHeader } from "antd";
import ContentTab from "../../../component/tabs/ContentTab";

import NavigatorContext from "../../../../service/context/NavigatorContext";
import DicrRegistrationAndMonitoringFormPage from "./DicrRegistrationAndMonitoringFormPage";
import MasterListPageInternal from "./MasterListPageInternal";
import IssuanceAndRevisionHistoryPage from "./IssuanceAndRevisionHistoryPage";
import IssuanceAndRetrievalPage from "./IssuanceAndRetrievalPage";
import ScheduleAndMonitoringPage from "./ScheduleAndMonitoringPage";

const CdcInternalDocumentsPage = () => {
  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("cdc-internal-documents");
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
            content: <IssuanceAndRevisionHistoryPage />,
          },
          {
            title: "Issuance And Retrieval",
            key: "tab4",
            content: <IssuanceAndRetrievalPage />,
          },
          {
            title:
              "Schedule and Monitoring of QMS Documented Information Backup",
            key: "tab5",
            content: <ScheduleAndMonitoringPage />,
          },
        ]}
      />
    </>
  );
};

export default CdcInternalDocumentsPage;
