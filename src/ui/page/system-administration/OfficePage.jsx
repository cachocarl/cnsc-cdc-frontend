import React from "react";
import { Button, Table, Row, Col, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Column from "antd/lib/table/Column";
import useDrawerVisibility from "../../../service/hooks/useDrawerVisibility";
import OfficeDrawer from "../../component/drawers/systemAdministration/office.jsx/OfficeDrawer";

const OfficePage = () => {
  const { add } = useDrawerVisibility();

  return (
    <>
      <div className="base-container">
        <Row justify="space-between">
          <Col>
            <Typography.Title style={{ margin: 10 }} level={4}>
              Office
            </Typography.Title>
          </Col>
          <Col>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => add.setVisible(true)}
              style={{ margin: 10 }}
            >
              Add Office
            </Button>
          </Col>
        </Row>
        <br></br>
        <Table>
          <Column title="Code"></Column>
          <Column title="Name"></Column>
          <Column title="Head"></Column>
        </Table>
        <OfficeDrawer.AddOfficeDrawer
          visible={add.visible}
          onClose={() => add.setVisible(false)}
          style={{ margin: 10 }}
        />
      </div>
    </>
  );
};

export default OfficePage;
