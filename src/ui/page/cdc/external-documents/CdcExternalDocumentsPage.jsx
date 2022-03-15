import React, { useContext } from "react";
import { PageHeader } from "antd";
import ContentTab from "../../../component/tabs/ContentTab";

import NavigatorContext from "../../../../service/context/NavigatorContext";
import MasterListPageExternal from "./MasterListPageExternal";
import IssuanceAndRetrievalPage from "../internal-documents/IssuanceAndRetrievalPage";
import ExternalListRequestPage from "./ExternalListRequestPage";

const CdcExternalDocumentsPage = () => {
  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("cdc-external-documents");
  return (
    <>
      <PageHeader title="External Documents">

      <ContentTab
        content={[
          {
            title: "List of Requests",
            key: "tab1",
            content: <ExternalListRequestPage />,
          },
          {
            title: "Masters List of External Documented Information",
            key: "tab2",
            content: <MasterListPageExternal />,
          },
          {
            title: "Issuance And Retrieval",
            key: "tab3",
            content: <IssuanceAndRetrievalPage/>
          },
        ]}
      />

      </PageHeader>
    </>
  );
};

export default CdcExternalDocumentsPage;
