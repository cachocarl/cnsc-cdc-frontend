import React from "react";
import { Table } from "antd";

const InternalDocumentTable = (column, dataSource) => {
  return (
    <>
      <Table columns={column} dataSource={dataSource} />;
    </>
  );
};

export default InternalDocumentTable;
