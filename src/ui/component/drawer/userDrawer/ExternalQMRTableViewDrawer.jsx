import React from "react";
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  DatePicker,
  Typography,
  Upload,
  Steps,
  Divider,
} from "antd";

import { FileOutlined } from "@ant-design/icons";
import moment from "moment";

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

const ExternalQMRTableViewDrawer = ({ visible, onClose }) => {
  return (
    <Drawer
      title="Request Form Status"
      placement="right"
      size="large"
      visible={visible}
      closable={true}
      onClose={onClose}
      width={"850px"}
    >
      <Steps progressDot current={1}>
        <Step title="Initiating Request" description="" />
        <Step
          title="Registration Of Request"
          description="Start of Registration."
        />
        <Step
          title="Reviewing of Request"
          description="This is a description."
        />
        <Step
          title="Approving of Request"
          description="This is a description."
        />
        <Step title="Update of QMS" description="This is a description." />
      </Steps>
      <Divider></Divider>
      <br></br>
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
              rules={[{ required: true }]}
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
              name="viewfile"
              label="File Attachment"
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
              <Input disabled={true} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
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
              <Input disabled={true} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
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
    </Drawer>
  );
};

export default ExternalQMRTableViewDrawer;
