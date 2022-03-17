import { Drawer, Typography } from 'antd'

import React from 'react'

import UserManagementForm from './UserManagementForm';

const { Title } = Typography;

const AddDrawer = ({visible, onClose}) => {

  return (
    <Drawer
    title=""
    visible={visible}
    onClose={onClose}
    width={"30%"}
    >
        <Title level={3}>Add User</Title>
        <br></br>

      <UserManagementForm.AddUser/>
    </Drawer>
  )
}
const UserManagementDrawer = {
    AddDrawer
}

export default UserManagementDrawer