import React from "react";
import { Row, Button, Table, Col, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import useDrawerVisibility from "../../../service/hooks/useDrawerVisibility";
import Column from "antd/lib/table/Column";

const DocumentTypePage = () => {
  const { add } = useDrawerVisibility();
  return (
    <>
      <div className="base-container">
        <Row justify="space-between">
          <Col>
            <Typography.Title level={4}>
              Documnent Information Type
            </Typography.Title>
          </Col>
          <Col>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => add.setVisible(true)}
            >
              Add New Document Information Type
            </Button>
          </Col>
        </Row>
        <br></br>
        <Table>
          <Column title="Type"></Column>
          <Column title="Description"></Column>
        </Table>
      </div>
      <div className="base-container">
        <Row justify="space-between">
          <Col>
            <Typography.Title level={4}>Nature of Request</Typography.Title>
          </Col>
          <Col>
            <Button type="primary">Add New Nature of Request</Button>
          </Col>
        </Row>
        <br></br>
        <Table>
          <Column title="Nature"></Column>
          <Column title="Description"></Column>
        </Table>
      </div>
    </>
  );
};

export default DocumentTypePage;
