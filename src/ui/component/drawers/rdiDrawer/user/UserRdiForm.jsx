import React from "react";
import {
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
  Typography,
  Upload,
} from "antd";

import { FileOutlined } from "@ant-design/icons";

import moment from "moment";

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
const CreateRdiForm = ({ visible, onClose }) => {
  return (
    <Form layout="vertical">
      <Title level={4}>Description of Documented Information</Title>
      <br></br>
      {/* 1st Row */}

      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            name="name"
            label="Record / File Code"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={16}>
          <Form.Item
            name="name"
            label="Record / File Name"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      {/* 2nd Row */}

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="dct"
            label="Format:"
            rules={[{ required: true, message: "Please choose" }]}
          >
            <Select placeholder="Choose here">
              <Option value="policy">Electronic Copy</Option>
              <Option value="procedure">Printed</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="dct"
            label="Type:"
            rules={[{ required: true, message: "Please choose" }]}
          >
            <Select placeholder="Choose here">
              <Option value="policy">Confidential</Option>
              <Option value="procedure">Not Confidential</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            name="name"
            label="Active Period:"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={16}>
          <Form.Item
            name="name"
            label="Active Location:"
            rules={[{ required: true }]}
          >
            <Input placeholder="" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            name="name"
            label="RET'N Period:"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={16}>
          <Form.Item
            name="name"
            label="Active Location:"
            rules={[{ required: true }]}
          >
            <Input placeholder="" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="description"
            label="Remarks"
            rules={[
              {
                required: false,
                message: "Please ",
              },
            ]}
          >
            <Input.TextArea
              rows={4}
              placeholder="Please enter your description and purpose of documentation request here"
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

const ViewRdiForm = ({ visible, onClose }) => {
  return (
    <Form layout="vertical">
      {/* 1st Row */}
      <Title level={4}>Description of Documented Information</Title>
      <br></br>
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
        <Col span={8}>
          <Form.Item
            name="proposedDate"
            label="Proposed Effective Date:"
            rules={[{ required: true }]}
          >
            <DatePicker
              defaultValue={moment("2022-03-04", dateFormat)}
              disabled
              style={{ width: 255 }}
            />
          </Form.Item>
        </Col>
      </Row>

      {/* 2nd Row */}

      <Row gutter={16}>
        <Col span={16}>
          <Form.Item
            name="dct"
            label="Requested From (College/Unit):"
            rules={[{ required: true, message: "Please choose" }]}
          >
            <Select disabled placeholder="Choose Here">
              <Option value="policy">ICS</Option>
              <Option value="procedure">CBPA</Option>
              <Option value="procedure">Engineering</Option>
              <Option value="procedure">CBPA</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="docInfoNumber"
            label="Document Information Number:"
            rules={[{ required: true }]}
          >
            <Input
              disabled
              placeholder="Please enter Document Information Number"
            />
          </Form.Item>
        </Col>
      </Row>
      {/* 3rd Row */}
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            name="name"
            label="Documented Information Type"
            rules={[{ required: false }]}
          >
            <Input disabled={true} />
          </Form.Item>
        </Col>
        <Col span={16}>
          <Form.Item name="name" label="Title:" rules={[{ required: true }]}>
            <Input
              disabled
              placeholder="Please type your Document Information Title"
            />
          </Form.Item>
        </Col>
      </Row>
      {/* 4rth Row */}
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            name="name"
            label="Number of Copies:"
            rules={[{ required: false }]}
          >
            <Input disabled={true} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="name"
            label="Copy Type:"
            rules={[{ required: false }]}
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
              <Button icon={<FileOutlined />}>Click Here to View Files</Button>
            </Upload>
          </Form.Item>
        </Col>
      </Row>
      {/* 5rth Row */}
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="description"
            label="Description and Purpose of Documentation Request"
            rules={[
              {
                required: false,
                message: "Please ",
              },
            ]}
          >
            <Input.TextArea
              disabled
              rows={4}
              placeholder="Please enter your description and purpose of documentation request here"
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

const UserRdiForm = {
  CreateRdiForm,
  ViewRdiForm,
};

export default UserRdiForm;
