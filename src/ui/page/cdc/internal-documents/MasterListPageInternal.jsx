import React from "react";
import { Table, Input, Row, Col } from "antd";

const column = [
  {
    title: "N0",
    dataIndex: "no",
    key: "no",
  },
  {
    title: "DOCUMENT NUMBER",
    dataIndex: "docno",
    key: "docno",
  },
  {
    title: "DOCUMENT TITLE",
    dataIndex: "doctitle",
    key: "doctitle",
  },
  {
    title: "INITIAL ISSUANCE",
    children: [
      {
        title: "REV",
        dataIndex: "rev",
        key: "rev",
      },
      {
        title: "PAGES",
        dataIndex: "pages",
        key: "pages",
      },
      {
        title: "EFFECTIVE DATE",
        dataIndex: "effectdate",
        key: "effectdate",
      },
    ],
  },
  {
    title: "CURRENT REVISION",
    children: [
      {
        title: "REV",
        dataIndex: "rev",
        key: "rev",
      },
      {
        title: "PAGES",
        dataIndex: "pages",
        key: "pages",
      },
      {
        title: "EFFECTIVE DATE",
        dataIndex: "effectdate",
        key: "effectdate",
      },
    ],
  },
];

const MasterListPageInternal = () => {
  return (
    <div className="base-container">
      <Table
        columns={column}
        title={(c) => {
          return (
            <Input.Group>
              <Row gutter={6}>
                <Col span={4}>
                  <Input addonBefore="As of." />
                </Col>
              </Row>
            </Input.Group>
          );
        }}
      />
    </div>
  );
};

export default MasterListPageInternal;
