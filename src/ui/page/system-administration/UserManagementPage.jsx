import { Button, Table, Row, Col, Typography } from "antd";
import React, { useContext } from "react";
import NavigatorContext from "../../../service/context/NavigatorContext";
import { PlusOutlined } from "@ant-design/icons";
import useDrawerVisibility from "../../../service/hooks/useDrawerVisibility";
import UserManagementDrawer from "../../component/drawers/systemAdministration/userManagement/UserManagementDrawer";

const { Column } = Table;
const UserManagementPage = () => {
  const { add } = useDrawerVisibility();

  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("user-management");
  return (
    <>
      <div className="base-container">
        <Row justify="space-between">
          <Col>
            <Typography.Title style={{ margin: 10 }} level={4}>
              User Management
            </Typography.Title>
          </Col>
          <Col>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => add.setVisible(true)}
              style={{ margin: 10 }}
            >
              Add User
            </Button>
          </Col>
        </Row>
        <br></br>
        <Table bordered>
          <Column title="Username"></Column>
          <Column title="Name"></Column>
          <Column title="Access"></Column>
          <Column title="Role"></Column>
        </Table>

        <UserManagementDrawer.AddDrawer
          visible={add.visible}
          onClose={() => add.setVisible(false)}
        ></UserManagementDrawer.AddDrawer>
      </div>
    </>
  );
};

export default UserManagementPage;
