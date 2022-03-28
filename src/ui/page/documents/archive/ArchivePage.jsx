import React, { useContext } from "react";
import { PageHeader, Input, Table, DatePicker, Space } from "antd";
import NavigatorContext from "../../../../service/context/NavigatorContext";

const { Search } = Input;

const { RangePicker } = DatePicker;

const column = [
  {
    title: "College/Department/Office/Unit",
    dataIndex: "cdou",
    key: "cdou",
  },
  {
    title: "Type of Record",
    dataIndex: "typerec",
    key: "typerec",
  },
  {
    title: "Year Generated",
    dataIndex: "year",
    key: "year",
  },
  {
    title: "Confidential",
    dataIndex: "confi",
    key: "confi",
  },
];

const ArchivePage = () => {
  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("archive");

  return (
    <>
      <PageHeader title="Archived Documents"></PageHeader>
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

export default ArchivePage;
