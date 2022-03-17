import { Form, Input, Button, Select, Modal, } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons';

import React from 'react'

const { confirm } = Modal;
const { Option } = Select;
const AddUser = ({visible, onClose}) => {
    function showConfirm() {
        confirm({
          title: "Are You Sure you want to Add this User?",
          icon: <ExclamationCircleOutlined />,
          content:
            "This Will Be Added as A New User ",
          onOk() {
            console.log("OK");
    
            onClose();
          },
          onCancel() {
            console.log("Cancel");
          },
        });
      }
  return (
    <Form >
        <Form layout="vertical">
        <Form.Item name={"fname"} 
                   label="First Name:" 
                   rules={[{ required: true, message: "Please Input First Name Here" }]}>
        <Input placeholder="Input Firtst Name Here" />
      </Form.Item>
      <Form.Item name={"mname"} 
                   label="Middle Name" 
                   rules={[{ required: true, message: "Please Input Middle Name Here" }]}>
        <Input placeholder="Input Middle Name Here" />
      </Form.Item>
      <Form.Item name={"lname"} 
                   label="Last Name" 
                   rules={[{ required: true, message: "Please Input Last Name Here" }]}>
        <Input placeholder="Input Last Name Here" />
      </Form.Item>
      <Form.Item name={"designation"} 
                   label="Designation" 
                   rules={[{ required: true, message: "Please Designation Here" }]}>
        <Input placeholder="Input Designation Here" />
      </Form.Item>
      <Form.Item
              name="role"
              label="Role:"
              rules={[{ required: true, message: "Please choose" }]}
            >
              <Select placeholder="Choose Roles Here">
                <Option value="user">Common User</Option>
                <Option value="pres">Approving Authority</Option>
                <Option value="vps">Reviewing Authority</Option>
                <Option value="qmr">Quality Management Representative</Option>
              </Select>
            </Form.Item>
            <Form.Item 
                  name={"username"} 
                  label="Username" 
                  rules={[{  required: true, message: "Please Input Username Here" }]}>
        <Input placeholder="Input Username Here"/>
      </Form.Item>
      <Form.Item
        name="password"
        label="Password:"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
         <Button type="primary" onClick={showConfirm}>
            Add User
          </Button>
      </Form.Item>
      </Form>
    </Form>
  )
}
const UserManagementForm = {
    AddUser
}

export default UserManagementForm