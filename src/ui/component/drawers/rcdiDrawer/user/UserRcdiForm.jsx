import React from "react";
import {
  Form,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
  Typography,
  Divider,
} from "antd";

import moment from "moment";

const { Option } = Select;

const dateFormat = "YYYY-MM-DD";

const { Title } = Typography;

const CreateRcdiForm = ({ visible, onClose }) => {
  return (
    <Form layout="vertical">
      {/* 1st Row */}

      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            name="name"
            label="Requested By:"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="date" label="Date:" rules={[{ required: false }]}>
            <DatePicker
              defaultValue={moment("2022-03-04", dateFormat)}
              style={{ width: 255 }}
            />
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
        <Col span={16}>
          <Form.Item
            name="dct"
            label="Requested From (College/Unit):"
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
            name="nocopy"
            label="Number of Copies:"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Divider></Divider>
      <Title level={4}>Description of Documented Information</Title>
      <br></br>

      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            name="name"
            label="Document Information Number:"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={16}>
          <Form.Item
            name="name"
            label="Document Information Title:"
            rules={[{ required: true }]}
          >
            <Input placeholder="Please type your Document Information Title" />
          </Form.Item>
        </Col>
        <Col span={16}>
          <Form.Item
            name="dct"
            label="Copy type:"
            rules={[{ required: true, message: "Please choose" }]}
          >
            <Select placeholder="Choose here">
              <Option value="hard">Hard Copy</Option>
              <Option value="soft">Physical Copy</Option>
            </Select>
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
      <Divider></Divider>
      <Title level={4}>To be Accomplished by the Approving Authority</Title>

      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="approve"
            label="Approve By:"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="designation"
            label="Designation:"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="date" label="Date:" rules={[{ required: false }]}>
            <DatePicker
              defaultValue={moment("2022-03-04", dateFormat)}
              style={{ width: 390 }}
            />
          </Form.Item>
        </Col>
      </Row>

      <br></br>
      <Col span={16}>
        <Form.Item
          name="dct"
          label="Requested From (College/Unit):"
          rules={[{ required: true, message: "Please choose" }]}
        >
          <Select placeholder="Choose here">
            <Option value="controlled">Controlled</Option>
            <Option value="uncontrolled">Uncontrolled</Option>
          </Select>
        </Form.Item>
      </Col>
    </Form>
  );
};

const ViewRcdiForm = ({ visible, onClose }) => {
  return (
    <Form layout="vertical">
      {/* 1st Row */}

      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            name="name"
            label="Requested By:"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="date" label="Date:" rules={[{ required: false }]}>
            <DatePicker
              defaultValue={moment("2022-03-04", dateFormat)}
              style={{ width: 255 }}
            />
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
        <Col span={16}>
          <Form.Item
            name="dct"
            label="Requested From (College/Unit):"
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
            name="nocopy"
            label="Number of Copies:"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Divider></Divider>
      <Title level={4}>Description of Documented Information</Title>
      <br></br>

      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            name="name"
            label="Document Information Number:"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={16}>
          <Form.Item
            name="name"
            label="Document Information Title:"
            rules={[{ required: true }]}
          >
            <Input placeholder="Please type your Document Information Title" />
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

const UserRdiForm = {
  CreateRcdiForm,
  ViewRcdiForm,
};

export default UserRdiForm;
