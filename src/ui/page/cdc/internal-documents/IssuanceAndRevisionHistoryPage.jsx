import React from "react";
import { Table, Input, Row, Col } from "antd";

const column = [
  {
    title: "REV DATE (mm/dd/yy)",
    dataIndex: "revdate",
    key: "revdate",
    width: "200px",
  },
  {
    title: "REV",
    dataIndex: "rev",
    key: "rev",
    width: "100px",
  },
  {
    title: "PAGE REVISED",
    dataIndex: "pagerev",
    key: "pagerev",
    width: "50px",
  },
  {
    title: "DISCRIPTION OF ISSUANCE/REVISION",
    dataIndex: "disrev",
    key: "disrev",
  },
  {
    title: "EFFECTIVE DATE (mm/dd/yy)",
    dataIndex: "effectdate",
    key: "effectdate",
    width: "200px",
  },
];

const IssuanceAndRevisionHistoryPage = () => {
  return (
    <Table
      bordered
      columns={column}
      title={(c) => {
        return (
          <Input.Group>
            <Row gutter={6}>
              <Col span={8}>
                <Input addonBefore="Doc no." />
              </Col>
              <Col span={12}>
                <Input addonBefore="Title" />
              </Col>
            </Row>
          </Input.Group>
        );
      }}
    />
  );
};

export default IssuanceAndRevisionHistoryPage;
