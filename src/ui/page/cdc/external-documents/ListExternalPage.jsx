import React from "react";
import { Input, Table, Row, Col } from "antd";

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
      <Table
        bordered
        columns={column}
        dataSource={dataSource}
        scroll={{ x: 1200 }}
        title={(c) => {
          return (
            <Input.Group>
              <Row justify="space-between">
                <Col span={12}>
                  <Input.Search addonBefore="COLLEGE/DEPARTMENT/OFFICE:" />
                </Col>
                <Col>
                  <Input.Search addonBefore="As of:" />
                </Col>
              </Row>
            </Input.Group>
          );
        }}
      />
    </div>
  );
};

export default ListExternalPage;
