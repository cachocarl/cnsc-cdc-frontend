import React from "react";
import { Table, Input, Row, Col } from "antd";

const column = [
  {
    title: "RDI NO",
    dataIndex: "rdino",
    key: "rdino",
    width: "50px",
  },
  {
    title: "EFFECTIVE DATE",
    dataIndex: "effecdate",
    key: "effecdate",
  },
  {
    title: "REV",
    dataIndex: "rev",
    key: "rev",
  },
  {
    title: "ISSUANCE",
    children: [
      {
        title: "NAME",
        dataIndex: "name",
        key: "name",
        width: "300px",
      },
      {
        title: "DATE",
        dataIndex: "date",
        key: "date",
        width: "150px",
      },
      {
        title: "SIGNATURE OF COPY HOLDER",
        dataIndex: "sign",
        key: "sign",
      },
    ],
  },
  {
    title: "RETRIEVAL",
    children: [
      {
        title: "NAME",
        dataIndex: "name",
        key: "name",
        width: "300px",
      },
      {
        title: "DATE",
        dataIndex: "date",
        key: "date",
        width: "150px",
      },
      {
        title: "SIGNATURE OF COPY HOLDER",
        dataIndex: "sign",
        key: "sign",
      },
    ],
  },
];

const IssuanceAndRetrievalPage = () => {
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

export default IssuanceAndRetrievalPage;
