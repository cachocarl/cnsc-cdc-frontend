import { PageHeader, Button, Table, } from "antd";
import React, { useContext } from "react";
import NavigatorContext from "../../../service/context/NavigatorContext";
import { PlusOutlined } from "@ant-design/icons";
import useDrawerVisibility from "../../../service/hooks/useDrawerVisibility";
import UserManagementDrawer from "../../component/drawers/systemAdministration/userManagement/UserManagementDrawer";


const {Column,} = Table
const UserManagementPage = () => {

  const { add } = useDrawerVisibility();

  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("user-management");
  return (
    <>
      <PageHeader title="User Management"       
      extra={[
          <Button
            onClick={() => add.setVisible(true)}
            type="primary"
            icon={<PlusOutlined />}
          >
            Add User
          </Button>,
        ]} >

      </PageHeader>

      <div className="base-container">
          <Table> 
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