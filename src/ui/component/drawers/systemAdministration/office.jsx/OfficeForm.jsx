import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Form, Input, Button, Modal } from "antd";
import React from "react";

const { confirm } = Modal;
const AddOfficeForm = ({ visible, onClose }) => {
  function showConfirm() {
    confirm({
      title: "Are You Sure you want to Add this User?",
      icon: <ExclamationCircleOutlined />,
      content: "This Will Be Added as A New User ",
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
    <Form>
      <Form layout="vertical">
        <Form.Item
          name={"office-code"}
          label="Office Code"
          rules={[{ required: true, message: "Please Input Office Code Here" }]}
        >
          <Input placeholder="Input Office Code Here" />
        </Form.Item>
        <Form.Item
          name={"office-name"}
          label="Office Name"
          rules={[{ required: true, message: "Please Input Office Name Here" }]}
        >
          <Input placeholder="Input Office Name Here" />
        </Form.Item>
        <Form.Item
          name={"office-head"}
          label="Office Head"
          rules={[{ required: true, message: "Please Input Office Head Here" }]}
        >
          <Input placeholder="Input Office Head Here" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={showConfirm}>
            Add Office
          </Button>
        </Form.Item>
      </Form>
    </Form>
  );
};
const OfficeForm = {
  AddOfficeForm,
};

export default OfficeForm;
