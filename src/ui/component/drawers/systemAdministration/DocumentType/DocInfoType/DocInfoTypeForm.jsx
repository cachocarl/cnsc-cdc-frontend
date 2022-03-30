import React from "react";
import { Button, Form, Input, Modal, notification } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import FormItem from "antd/lib/form/FormItem";
import { InfoTypeAPI } from "../../../../../../data/call/Resource";

const { confirm } = Modal;

const AddDocTypeForm = (visible, onClose) => {
  const [form] = Form.useForm();
  function _handleOnClick() {
    form.validateFields().then((value) => {
      InfoTypeAPI.create(value)
        .then((res) => {
          notification.success({
            message: "New Document Information Type Added",
          });
          form.resetFields();
        })
        .catch((err) => {
          notification.error({
            message: "Error Adding Document Information Type ",
          });
          form.resetFields();
        });
    });
  }
  return (
    <Form form={form} layout="vertical">
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
        <Button type="primary" onClick={_handleOnClick}>
          Add Document Information Type
        </Button>
      </FormItem>
    </Form>
  );
};
const DocInfoTypeForm = {
  AddDocTypeForm,
};
export default DocInfoTypeForm;
