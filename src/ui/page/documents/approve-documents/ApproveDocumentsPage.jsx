import React, { useContext } from "react";
import { PageHeader, Table, Input, Space, DatePicker } from "antd";
import NavigatorContext from "../../../../service/context/NavigatorContext";

const { Search } = Input;

const { RangePicker } = DatePicker;

const column = [
  {
    title: "Document Information Title",
    dataIndex: "D",
    key: "docuinfotitle",
  },
  {
    title: "Document Type",
    dataIndex: "asade",
    key: "docutype",
  },
  {
    title: "Date Initiated",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Status",
    dataIndex: "address",
    key: "status",
  },
];

const ApproveDocumentsPage = () => {
  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("approve-documents");
  return (
    <>
      <PageHeader title="Approved Documents"></PageHeader>
      <div className="base-container">
        <Space>
          <Search
            placeholder="Input search text"
            style={{ width: 250, margin: 18 }}
            allowClear
          />
          <RangePicker picker="year" />
        </Space>
        <Table columns={column} />
      </div>
    </>
  );
};

export default ApproveDocumentsPage;
