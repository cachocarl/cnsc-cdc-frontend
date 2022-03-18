import React from "react";
import { Row, Button, Table, Col, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import useDrawerVisibility from "../../../service/hooks/useDrawerVisibility";
import Column from "antd/lib/table/Column";
import DocInfoTypeDrawer from "../../component/drawers/systemAdministration/DocumentType/DocInfoType/DocInfoTypeDrawer";
import NatureRequestDrawer from "../../component/drawers/systemAdministration/NatureRequest/NatureRequestDrawer";

const DocumentTypePage = () => {
  const { add, edit } = useDrawerVisibility();

  return (
    <>
      <div className="base-container">
        <Row justify="space-between">
          <Col>
            <Typography.Title style={{ margin: 10 }} level={4}>
              Document Information Type
            </Typography.Title>
          </Col>

          <Col>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => edit.setVisible(true)}
              style={{ margin: 10 }}
            >
              Add New Document Info Type
            </Button>
          </Col>
        </Row>

        <br></br>
        <Table>
          <Column title="Type  "></Column>
          <Column colSpan={200} title="Description"></Column>
        </Table>

        <DocInfoTypeDrawer.AddDocTypeDrawer
          visible={add.visible}
          onClose={() => add.setVisible(false)}
        ></DocInfoTypeDrawer.AddDocTypeDrawer>
      </div>

      <div className="base-container">
        <Row justify="space-between">
          <Col>
            <Typography.Title style={{ margin: 10 }} level={4}>
              Nature of Request
            </Typography.Title>
          </Col>
          <Col>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => add.setVisible(true)}
              style={{ margin: 10 }}
            >
              Add New Nature of Request
            </Button>
          </Col>
        </Row>
        <br></br>
        <Table>
          <Column title="Nature"></Column>
          <Column colSpan={200} title="Description"></Column>
        </Table>
        <NatureRequestDrawer.AddRequestDrawer
          visible={add.visible}
          onClose={() => add.setVisible(false)}
        />
        <DocInfoTypeDrawer.AddDocTypeDrawer
          visible={edit.visible}
          onClose={() => edit.setVisible(false)}
        />
      </div>
    </>
  );
};

export default DocumentTypePage;
