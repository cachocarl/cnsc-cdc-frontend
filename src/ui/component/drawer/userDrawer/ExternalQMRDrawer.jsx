import React from "react";
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
  Space,
  Typography,
  Upload,
  Modal,
  Divider,
} from "antd";

import { UploadOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import moment from "moment";

const { confirm } = Modal;

const { Option } = Select;

const dateFormat = "YYYY-MM-DD";

const { Title } = Typography;

const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const ExternalQMRDrawer = ({ visible, onClose }) => {
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
      title="Initiate Document Information Change Request (DICR)"
      placement="right"
      size="large"
      visible={visible}
      closable={true}
      onClose={onClose}
      width={"850px"}
      extra={
        <Space>
          <Button type="primary" onClick={showConfirm}>
            Submit Request
          </Button>
        </Space>
      }
    >
      <Form layout="vertical">
        {/* 1st Row */}

        <Row gutter={16}>
        <Col span={8}>
            <Form.Item
              name="name"
              label="DICR Number (For Registration)"
              rules={[{ required: false }]}
            >
              <Input disabled={true} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="dct"
              label="College/Office/Unit:"
              rules={[{ required: true, message: "Please choose" }]}
            >
              <Select placeholder="Choose here">
                <Option value="policy">ICS</Option>
                <Option value="procedure">CBPA</Option>
                <Option value="procedure">Engineering</Option>
                <Option value="procedure">CBPA</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="proposedDate"
              label="Date Requested (Current Date):"
              rules={[{ required: false }]}
            >
              <DatePicker
                defaultValue={moment("2022-03-04", dateFormat)}
                disabled
                style={{ width: 255 }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Divider></Divider>
        <Title level={4}> Description of Document Information</Title>
        <br></br>
        <Row gutter={16}>
          <Col span={16}>
            <Form.Item
              name="name"
              label="Document Information Title:"
              rules={[{ required: true }]}
            >
              <Input placeholder="Please type your Document Information Title" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="source"
              label="Source/ Author:"
              rules={[{ required: true }]}
            >
              <Input placeholder="Type Source Author Here" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
        <Col span={8}>
            <Form.Item
              name="copytype"
              label="Copy Type:"
              rules={[{ required: true, message: "Please choose" }]}
            >
              <Select placeholder="Choose here">
                <Option value="policy">ICS</Option>
                <Option value="procedure">CBPA</Option>
                <Option value="procedure">Engineering</Option>
                <Option value="procedure">CBPA</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="proposedDate"
              label="Proposed Effective Date:"
              rules={[{ required: false }]}
            >
              <DatePicker
                defaultValue={moment("2022-03-04", dateFormat)}
                disabled
                style={{ width: 255 }}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="upload"
              label="Upload"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button icon={<UploadOutlined />}>Click to upload</Button>
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
              <Input.TextArea
                rows={4}
                placeholder="please enter url description"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};

export default ExternalQMRDrawer;
