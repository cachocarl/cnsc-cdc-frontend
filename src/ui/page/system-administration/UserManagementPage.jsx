import { Button, Table, Row, Col, Typography, Input } from "antd";
import React, { useContext } from "react";
import NavigatorContext from "../../../service/context/NavigatorContext";
import { PlusOutlined, ReloadOutlined } from "@ant-design/icons";
import useDrawerVisibility from "../../../service/hooks/useDrawerVisibility";
import UserManagementDrawer from "../../component/drawers/systemAdministration/userManagement/UserManagementDrawer";

const { Column } = Table;
const { Search } = Input;
const UserManagementPage = () => {
  const { add } = useDrawerVisibility();

  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("user-management");
  return (
    <>
      <div className="base-container">
        <Typography.Title style={{ marginLeft: 20, marginTop: 20 }} level={4}>
          User Management
        </Typography.Title>
        <Row justify="space-between">
          <Col>
            <Search
              placeholder="Search User"
              allowClear
              size="medium"
              style={{ marginLeft: 20, marginTop: 20 }}
              //onSearch={onSearch}
            />
          </Col>
          <Col>
            <Button
              type="default"
              icon={<ReloadOutlined />}
              //onClick={_handleButton}
              style={{
                marginLeft: 10,
                marginTop: 20,
                marginRight: 20,
                marginBottom: 10,
              }}
            >
              Refresh
            </Button>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => add.setVisible(true)}
              style={{
                marginLeft: 10,
                marginTop: 20,
                marginRight: 20,
                marginBottom: 10,
              }}
            >
              Add New User
            </Button>
          </Col>
        </Row>
        <br></br>
        <Table style={{ margin: 20, marginTop: 5 }}>
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
