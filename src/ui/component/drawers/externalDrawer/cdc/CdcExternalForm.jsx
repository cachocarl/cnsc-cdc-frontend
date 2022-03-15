import React from 'react'
import {
    Drawer,
    Form,
    Button,
    Col,
    Row,
    Input,
    Space,
    Upload,
    Modal,
  
  } from "antd";
  
  import { FileOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
  
  
  const { confirm } = Modal;
  
  const normFile = (e) => {
    console.log("Upload event:", e);
  
    if (Array.isArray(e)) {
      return e;
    }
  
    return e && e.fileList;
  };
const CdcRegisterForm = ({ visible, onClose }) => {
    function showConfirm() {
        confirm({
          title: "Submit Request?",
          icon: <ExclamationCircleOutlined />,
          content:
            "Submitting your request will forward it to CDC for further processing",
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
    <Drawer
    title="Register and Send to Approving Authority"
    placement="right"
    size="large"
    visible={visible}
    closable={true}
    onClose={onClose}
    width={"850px"}
    extra={
      <Space>
        <Button type="ghost" onClick={showConfirm}>
          Cancel
        </Button>
        <Button type="primary" onClick={showConfirm}>
          Submit
        </Button>
      </Space>
    }
  >
    <br />
      <Form layout="vertical">
      {/* 1st Row */}

      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            name="natureOfChange"
            label="Nature of Change:"
            rules={[{ required: true, message: "Please choose" }]}
          >
            <Input disabled={true} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="docinfotype"
            label="Document Information Type:"
            rules={[{ required: true, message: "Please choose" }]}
          >
            <Input disabled={true} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="name"
            label="DICR Number (For Registration)"
            rules={[{ required: false }]}
          >
            <Input disabled={true} />
          </Form.Item>
        </Col>
      </Row>

      {/* 2nd Row */}

      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            name="name"
            label="Name of Requestor:"
            rules={[{ required: false }]}
          >
            <Input disabled={true} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="source"
            label="Source/ Author:"
            rules={[{ required: true }]}
          >
            <Input disabled={true} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="name"
            label="Document Information Number:"
            rules={[{ required: true }]}
          >
            <Input disabled={true} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
      <Col span={8}>
          <Form.Item
            name="name"
            label="Document Information Title:"
            rules={[{ required: true }]}
          >
            <Input disabled={true} />
          </Form.Item>
        </Col>
      <Col span={8}>
          <Form.Item
            name="copytype"
            label="Copy Type:"
            rules={[{ required: true, message: "Please choose" }]}
          >
         <Input disabled={true} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="file"
            label="File Attachment:"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button icon={<FileOutlined />}>Click Here to View File</Button>
            </Upload>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="description"
            label="Description and Purpose of Documentation Request"
            rules={[
              {
                required: true,
                message: "please enter url description",
              },
            ]}
          >
            <Input disabled={true} />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  </Drawer>
);
};
const CdcExternalForm = {
  CdcRegisterForm
}
export default CdcExternalForm