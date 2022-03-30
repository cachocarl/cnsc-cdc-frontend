import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Form, Input, Button, Modal, notification } from "antd";
import React from "react";
import { OfficeAPI } from "../../../../../data/call/Resource";

const { confirm } = Modal;
const AddOfficeForm = ({ visible, onClose }) => {
  const [form] = Form.useForm();

  function _handleOnClick() {
    form.validateFields().then((value) => {
      console.log(value);
      OfficeAPI.create(value)
        .then((res) => {
          notification.success({
            message: "Office Created",
          });
          form.resetFields();
        })
        .catch((err) => {
          console.log(err);
          notification.error({
            message: "Office Creation Failed",
          });
          form.resetFields();
        });
    });
  } //Asynchronous programming
  return (
    <Form layout="vertical" form={form}>
      <Form.Item
        name="code"
        label="Office Code"
        rules={[{ required: true, message: "Please Input Office Code Here" }]}
      >
        <Input placeholder="Input Office Code Here" />
      </Form.Item>
      <Form.Item
        name="name"
        label="Office Name"
        rules={[{ required: true, message: "Please Input Office Name Here" }]}
      >
        <Input placeholder="Input Office Name Here" />
      </Form.Item>
      <Form.Item
        name="head"
        label="Office Head"
        rules={[{ required: true, message: "Please Input Office Head Here" }]}
      >
        <Input placeholder="Input Office Head Here" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={_handleOnClick}>
          Add Office
        </Button>
      </Form.Item>
    </Form>
  );
};
const OfficeForm = {
  AddOfficeForm,
};

export default OfficeForm;
