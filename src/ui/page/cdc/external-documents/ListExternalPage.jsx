import React from "react";
import { Table } from "antd";

const dataSource = [
  {
    name: "Ramil Rano",
    docinfotitle: "kagwapohan ni ramil",
    docinfono: "0123",
    year: "2022",
  },
];

const column = [
  {
    title: "Name of Requestor",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Document Information Title",
    dataIndex: "docinfotitle",
    key: "docinfotitle",
  },
  {
    title: "Document Information Number",
    dataIndex: "docinfono",
    key: "docinfono",
  },
  {
    title: "Year Made",
    dataIndex: "year",
    key: "year",
  },
];

const ListExternalPage = () => {
  return (
    <div className="base-container">
      <Table columns={column} dataSource={dataSource} />
    </div>
  );
};

export default ListExternalPage;
