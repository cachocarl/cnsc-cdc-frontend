import React, { useContext } from "react";
import { PageHeader } from "antd";
import ContentTab from "../../../component/tabs/ContentTab";

import NavigatorContext from "../../../../service/context/NavigatorContext";
import MasterListPageExternal from "./MasterListPageExternal";
import IssuanceAndRetrievalPage from "../internal-documents/IssuanceAndRetrievalPage";

const CdcExternalDocumentsPage = () => {
  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("cdc-external-documents");
  return (
    <>
      <PageHeader title="External Documents">

      <ContentTab
        content={[
          {
            title: "Masters List of External Documented Information",
            key: "tab1",
            content: <MasterListPageExternal />,
          },
          {
            title: "Issuance And Retrieval",
            key: "tab2",
            content: <IssuanceAndRetrievalPage/>
          },
        ]}
      />

      </PageHeader>
    </>
  );
};

export default CdcExternalDocumentsPage;
