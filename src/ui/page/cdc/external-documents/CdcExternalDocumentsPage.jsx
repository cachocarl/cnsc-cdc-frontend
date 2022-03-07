import React, { useContext } from "react";
import { PageHeader } from "antd";
import NavigatorContext from "../../../../service/context/NavigatorContext";

const CdcExternalDocumentsPage = () => {
  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("external-documents");
  return (
    <>
      <PageHeader title="External Documents"></PageHeader>
    </>
  );
};

export default CdcExternalDocumentsPage;
