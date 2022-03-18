import React from "react";
import { Button, Form, Input, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import FormItem from "antd/lib/form/FormItem";

const { confirm } = Modal;

const AddDocTypeForm = (visible, onClose) => {
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
          name={"type"}
          label="Type:"
          rules={[
            {
              required: true,
              message: "Please Input Document Information Type Here",
            },
          ]}
        >
          <Input placeholder="Input  Document Information Type Here" />
        </Form.Item>
        <Form.Item
          name={"description"}
          label="description:"
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
            Add Document Information Type
          </Button>
        </FormItem>
      </Form>
    </Form>
  );
};
const DocInfoTypeForm = {
  AddDocTypeForm,
};
export default DocInfoTypeForm;
