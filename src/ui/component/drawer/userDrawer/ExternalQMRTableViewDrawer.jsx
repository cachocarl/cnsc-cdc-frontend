import React from "react";
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Typography,
  Upload,
  Steps,
  Divider,
} from "antd";

import { FileOutlined } from "@ant-design/icons";

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
      title="Progress of Form Request"
      placement="right"
      size="large"
      visible={visible}
      closable={true}
      onClose={onClose}
      width={"850px"}
    >
      <Steps direction="vertical" current={1}>
        <Step title="Initiating Request" description="Initiate New Request" />
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
        <Title level={4}>Description of Documented Information</Title>
        <br></br>
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

        {/* 2nd Row */}

        <Row gutter={16}>
        <Col span={16}>
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
              name="name"
              label="Source/Author:"
              rules={[{ required: true }]}
            >
              <Input disabled={true} />
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
              <Input disabled={true} />
            </Form.Item>
          </Col>
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

export default ExternalQMRTableViewDrawer;
