import { Drawer, Typography } from "antd";
import React from "react";
import UserManagementForm from "./UserManagementForm";

const { Title } = Typography;

const AddDrawer = ({ visible, onClose }) => {
  return (
    <Drawer
      title="Add New User"
      visible={visible}
      onClose={onClose}
      width={"30%"}
    >
      <UserManagementForm.AddUser />
    </Drawer>
  );
};
const UserManagementDrawer = {
  AddDrawer,
};

export default UserManagementDrawer;
