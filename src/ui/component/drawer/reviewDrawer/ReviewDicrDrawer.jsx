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
  Steps,
  Divider,
} from "antd";

import { FileOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import moment from "moment";

const { confirm } = Modal;

const { Option } = Select;

const dateFormat = "YYYY-MM-DD";

const { Title } = Typography;

const { Step } = Steps;

const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const ReviewDicrDrawer = ({ visible, onClose }) => {
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
      title="Review Document Information Change Request (DICR)"
      placement="right"
      size="large"
      visible={visible}
      closable={true}
      onClose={onClose}
      width={"850px"}
      extra={
        <Space>
          <Button type="primary" onClick={showConfirm}>
            Submit for Approval
          </Button>
        </Space>
      }
    >
      <Steps direction="vertical" current={2}>
        <Step
          title="Step 1: Initiating Request"
          description="Create a Documented Information Change Request"
        />
        <Step
          title="Step 2: Registration Of Request"
          description="DICR is being examined for registration by CDC"
        />
        <Step
          title="Step 3: Reviewing of Request"
          description="DICR is being reviewed by a Reviewing Authority"
        />
        <Step
          title="Step 4: Approving of Request"
          description="DICR is being evaluated by an Approving Authority"
        />
        <Step title="Step 5: Update of QMS" />
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
              label="Initiator:"
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
              <Input disabled={true} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="proposedDate"
              label="Date Requested (Current Date):"
              rules={[{ required: false }]}
            >
              <Input disabled={true} />
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
              <Input disabled={true} />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item
              name="name"
              label="Document Information Title:"
              rules={[{ required: true }]}
            >
              <Input disabled={true} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name="proposedDate"
              label="Proposed Effective Date:"
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
              <Input placeholder="Please type your Remarks Here" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="action"
              label="Action Taken/Disposition:"
              rules={[{ required: true, message: "Please choose" }]}
            >
              <Select placeholder="Choose Action">
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
              <Input disabled placeholder="Reviewing Authority Name" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="proposedDate"
              label="Date:"
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
              <Input disabled={true} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="action"
              label="Action Taken/Disposition:"
              rules={[{ required: true, message: "Please choose" }]}
            >
              <Input disabled={true} />
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
              <Input disabled={true} placeholder="Approving Authority Name" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="proposedDate"
              label="Date:"
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
    </Drawer>
  );
};

export default ReviewDicrDrawer;
