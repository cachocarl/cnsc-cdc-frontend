import React, { useContext } from "react";
import { PageHeader, Table } from "antd";
import NavigatorContext from "../../../../service/context/NavigatorContext";

const column = [
  {
    title: 'Document Information Title',
    dataIndex: 'D',
    key: 'docuinfotitle',
  },
  {
    title: 'Document Type',
    dataIndex: 'asade',
    key: 'docutype',
  },
  {
    title: 'Date Initiated',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Status',
    dataIndex: 'address',
    key: 'status',
  }
];

const ApproveDocumentsPage = () => {
  const navigatorContext = useContext(NavigatorContext)
    navigatorContext.setSelectedKey("approve-documents")
  return (
    <>
      <PageHeader title="Approve Documents">
       
      </PageHeader>
      <div className="base-container">

        <Table columns = {column} />

      </div>
    </>
  );
};

export default ApproveDocumentsPage;
