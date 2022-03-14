import React from "react";
import { Table, Input, Row, Col } from "antd";

const { Column, ColumnGroup } = Table;

const IssuanceAndRetrievalPage = () => {
  return (
    <div className="base-container">
      <Table
        title={(c) => {
          return (
            <Input.Group>
              <Row gutter={6}>
                <Col span={4}>
                  <Input addonBefore="Doc no." />
                </Col>
                <Col>
                  <Input addonBefore="Title" />
                </Col>
              </Row>
            </Input.Group>
          );
        }}
      >
        <Column title="RDI NO"></Column>
        <Column title="EFFECTIVE DATE"></Column>
        <Column title="REV"></Column>

        <ColumnGroup title="INITIAL ISSUANCE">
          <Column title="NAME" dataIndex="rev1" key="rev1" />

          <Column title="DATE" dataIndex="pages1" key="pages1" />

          <Column
            title="SIGNATURE OF COPY HOLDER"
            dataIndex="effectivedate1"
            key="effectivedate1"
          />
        </ColumnGroup>

        <ColumnGroup title="RETRIEVAL">
          <Column title="NAME" dataIndex="rev1" key="rev1" />

          <Column title="DATE" dataIndex="pages1" key="pages1" />

          <Column
            title="SIGNATURE OF COPY HOLDER"
            dataIndex="effectivedate1"
            key="effectivedate1"
          />
        </ColumnGroup>
      </Table>
    </div>
  );
};

export default IssuanceAndRetrievalPage;
