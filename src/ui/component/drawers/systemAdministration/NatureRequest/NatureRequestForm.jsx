import React from "react";
import { Button, Form, Input, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import FormItem from "antd/lib/form/FormItem";

const { confirm } = Modal;

const AddRequestForm = ({ visible, onClose }) => {
  function showConfirm() {
    confirm({
      title: "Are You Sure you want to Add this Document Information Type?",
      icon: <ExclamationCircleOutlined />,
      content: "This Will Be Added as A New Document Information Type ",
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
          name={"nature"}
          label="Nature:"
          rules={[
            {
              required: true,
              message: "Please Input Nature of Request Here",
            },
          ]}
        >
          <Input placeholder="Input Nature of Request Here" />
        </Form.Item>
        <Form.Item
          name={"ndescription"}
          label="Description:"
          rules={[
            {
              required: true,
              message: "Please Input Description Here",
            },
          ]}
        >
          <Input placeholder="Input Description Here" />
        </Form.Item>
        <FormItem>
          <Button type="primary" onClick={showConfirm}>
            Add Nature of Request
          </Button>
        </FormItem>
      </Form>
    </Form>
  );
};
const NatureRequestForm = {
  AddRequestForm,
};
export default NatureRequestForm;
