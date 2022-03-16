import { PageHeader, Button, Table, } from "antd";
import React, { useContext } from "react";
import NavigatorContext from "../../../service/context/NavigatorContext";
import { PlusOutlined } from "@ant-design/icons";

const {Column,} = Table
const UserManagementPage = () => {
  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("user-management");
  return (
    <>
      <PageHeader title="User Management"       
      extra={[
          <Button
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
      </div>
    </>
  );
};

export default UserManagementPage;