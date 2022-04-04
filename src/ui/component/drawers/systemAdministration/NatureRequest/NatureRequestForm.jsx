import React from "react";
import { Button, Form, Input, Modal, notification } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import FormItem from "antd/lib/form/FormItem";
import { RequestNatureAPI } from "../../../../../data/call/Resource";

const { confirm } = Modal;

const AddRequestForm = ({ visible, onClose }) => {
  const [form] = Form.useForm();
  function _handleOnClick() {
    form.validateFields().then((value) => {
      RequestNatureAPI.create(value)
        .then((res) => {
          notification.success({
            message: "New Nature of Request Added",
          });
          form.resetFields();
        })
        .catch((err) => {
          notification.error({
            message: "Error Adding Nature of Request ",
          });
          form.resetFields();
        });
    });
  }
  return (
    <Form layout="vertical" form={form}>
      <Form.Item
        name="nature"
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
        name="description"
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
        <Button type="primary" onClick={_handleOnClick}>
          Add Nature of Request
        </Button>
      </FormItem>
    </Form>
  );
};
const NatureRequestForm = {
  AddRequestForm,
};
export default NatureRequestForm;
