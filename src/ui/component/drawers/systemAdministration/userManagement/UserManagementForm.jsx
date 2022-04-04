import {
  Form,
  Input,
  Button,
  Select,
  Modal,
  Row,
  Col,
  Divider,
  Typography,
  notification,
} from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import {
  OfficeAPI,
  UserAPI,
  UserInfoAPI,
} from "../../../../../data/call/Resource";
import React from "react";

const { confirm } = Modal;
const { Option } = Select;
const { Title } = Typography;

const AddUser = ({ visible, onClose }) => {
  const [form] = Form.useForm();
  const [officeData, setOfficeData] = React.useState([]);

  const [tableData, setTableData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  //loading offices into drop down
  const _handleButton = () => {
    setLoading(true);
    OfficeAPI.retrieveList()
      .then((res) => {
        setTableData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        notification.error({
          message: "An error has occured",
        });
        setLoading(false);
      });
  };

  function _handleOnClick() {
    //form validation for adding user
    form.validateFields().then((value) => {
      console.log(value);

      UserAPI.create(value)
        .then((res) => {
          notification.success({
            message: "User Added Successfully",
          });
          form.resetFields();
        })
        .catch((err) => {
          console.log(err);
          notification.error({
            message: "Failed Adding User",
          });
          form.resetFields();
        });

      UserInfoAPI.create(value)
        .then((res) => {
          form.resetFields();
        })
        .catch((err) => {
          console.log(err);

          form.resetFields();
        });
    });
  }

  return (
    <Form form={form} layout="vertical">
      <Divider orientation="left">
        <Title level={4}>User Account</Title>
      </Divider>
      <Form.Item
        name="username"
        label="Username"
        rules={[{ required: true, message: "Please Input Username Here" }]}
      >
        <Input placeholder="Input Username Here" />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Input Password" />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        placeholder="Confirm Password"
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password placeholder="Confirm Password" />
      </Form.Item>

      <br />

      <Divider orientation="left">
        <Title level={4}>User Information</Title>
      </Divider>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="first_name"
            label="First Name:"
            rules={[
              { required: true, message: "Please Input First Name Here" },
            ]}
          >
            <Input placeholder=" First Name " />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="middle_name"
            label="Middle Name"
            rules={[
              { required: true, message: "Please Input Middle Name Here" },
            ]}
          >
            <Input placeholder=" Middle Name " />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        name="last_name"
        label="Last Name"
        rules={[{ required: true, message: "Please Input Last Name Here" }]}
      >
        <Input placeholder=" Last Name " />
      </Form.Item>
      <Form.Item
        name="designation"
        label="Designation"
        rules={[{ required: true, message: "Please Designation Here" }]}
      >
        <Input placeholder=" Designation " />
      </Form.Item>

      <Form.Item
        name="office"
        label="College/Office/Unit:"
        rules={[{ required: true, message: "Please choose" }]}
      >
        <Select onClick={_handleButton} placeholder="Choose Here">
          {tableData.map((data) => {
            return (
              <Option value={data.id}>
                {data.code} - {data.name}
              </Option>
            );
          })}
        </Select>
      </Form.Item>

      <Form.Item
        name="account_level"
        label="User:"
        rules={[{ required: true, message: "Please choose" }]}
      >
        <Select placeholder="Choose Here">
          <Option value={1}>Admin</Option>
          <Option value={2}>Common User</Option>
          <Option value={3}>Approving Authority</Option>
          <Option value={4}>Reviewing Authority</Option>
          <Option value={5}>Quality Management Representative</Option>
        </Select>
      </Form.Item>
      <br />
      <Form.Item>
        <Button onClick={_handleOnClick} type="primary">
          Add User
        </Button>
      </Form.Item>
    </Form>
  );
};
const UserManagementForm = {
  AddUser,
};

export default UserManagementForm;
