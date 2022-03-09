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
  Modal,
  Divider,
  Steps,
} from "antd";

import { ExclamationCircleOutlined } from "@ant-design/icons";
import moment from "moment";

const { confirm } = Modal;

const { Option } = Select;

const dateFormat = "YYYY-MM-DD";

const { Title } = Typography;

const { Step } = Steps;

const InternalDicrTableViewDrawer = ({ visible, onClose }) => {
  return (
    <Drawer
      title="View my Document Information Change Request (DICR)"
      placement="right"
      size="large"
      visible={visible}
      closable={true}
      onClose={onClose}
      width={"850px"}
    >
      <Title level={4}>DICR Status:</Title>
      <br />
      <Steps size="small" current={2}>
        <Step title="Step 1" description="Create your DICR" />
        <Step
          title="Step 2"
          description="DICR is received and registered by CDC."
        />
        <Step
          title="Step 3"
          description="DICR is being reviewed by an Authority."
        />
        <Step
          title="Step 4"
          description="DICR is being approved by Authority"
        />
      </Steps>
      <Divider />

      <Form layout="vertical">
        {/* 1st Row */}

        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name="natureOfChange"
              label="Nature of Change:"
              rules={[{ required: true, message: "Please choose" }]}
            >
              <Select disabled placeholder="New">
                <Option value="private">New</Option>
                <Option value="public">Revision</Option>
                <Option value="public">Deletion/Obslete</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="docinfotype"
              label="Document Information Type:"
              rules={[{ required: true, message: "Please choose" }]}
            >
              <Select disabled placeholder="Policy">
                <Option value="private">Policy</Option>
                <Option value="public">Procedure</Option>
                <Option value="public">Form</Option>
                <Option value="public">Attachment</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="name"
              label="DICR Number (For Registration)"
              rules={[{ required: false }]}
            >
              <Input disabled={true} placeholder="DICR-017" />
            </Form.Item>
          </Col>
        </Row>

        {/* 2nd Row */}

        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name="name"
              label="Initiator:"
              rules={[{ required: true }]}
            >
              <Input disabled placeholder="Juan Dela Cruz" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="dct"
              label="College/Office/Unit:"
              rules={[{ required: true, message: "Please choose" }]}
            >
              <Select disabled placeholder="ICS">
                <Option value="policy">ICS</Option>
                <Option value="procedure">CBPA</Option>
                <Option value="procedure">Engineering</Option>
                <Option value="procedure">CBPA</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              disabled
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
        <Title level={4}>Document Information</Title>
        <br></br>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name="name"
              label="Document Information Number:"
              rules={[{ required: true }]}
            >
              <Input disabled placeholder="DIN 087" />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item
              name="name"
              label="Document Information Title:"
              rules={[{ required: true }]}
            >
              <Input
                disabled
                placeholder="Example Document Information Title"
              />
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
              <Input.TextArea disabled rows={4} placeholder="Example Message" />
            </Form.Item>
          </Col>
        </Row>

        <Divider></Divider>
        <Title level={4}>To be Accomplished by the Reviewing Authority</Title>
        <br></br>
        <Row gutter={16}>
          <Col span={16}>
            <Form.Item
              name="remarks"
              label="Remarks: (if any)"
              rules={[{ required: true }]}
            >
              <Input disabled placeholder="Please type your Remarks Here" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="action"
              label="Action Taken/Disposition:"
              rules={[{ required: true, message: "Please choose" }]}
            >
              <Select disabled placeholder="Approved">
                <Option value="private">Approval</Option>
                <Option value="public">Disapproval</Option>
                <Option value="public">For Fine-tuning</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={16}>
            <Form.Item
              name="approveby"
              label="Approved By:"
              rules={[{ required: true }]}
            >
              <Input disabled />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              disabled
              name="proposedDate"
              label="Date Requested (Current Date):"
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

        <Divider></Divider>
        <Title level={4}>To be Accomplished by the Approving Authority</Title>
        <br></br>
        <Row gutter={16}>
          <Col span={16}>
            <Form.Item
              name="remarks"
              label="Remarks: (if any)"
              rules={[{ required: true }]}
            >
              <Input disabled placeholder="Please type your Remarks Here" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="action"
              label="Action Taken/Disposition:"
              rules={[{ required: true, message: "Please choose" }]}
            >
              <Select disabled placeholder="Approved">
                <Option value="private">Approval</Option>
                <Option value="public">Disapproval</Option>
                <Option value="public">For Fine-tuning</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={16}>
            <Form.Item
              name="approveby"
              label="Approved By:"
              rules={[{ required: true }]}
            >
              <Input disabled />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              disabled
              name="proposedDate"
              label="Date Requested (Current Date):"
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
      </Form>
      <br />
    </Drawer>
  );
};

export default InternalDicrTableViewDrawer;
