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
const { Step } = Steps;
const { Title } = Typography;

const ReqDocInfoDrawer = ({ visible, onClose }) => {
  function showConfirm() {
    confirm({
      title: "Edit Request Information?",
      icon: <ExclamationCircleOutlined />,
      content: "Edit Request Information?",
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
      title="View My Request for Documented Information"
      placement="right"
      size="large"
      visible={visible}
      closable={true}
      onClose={onClose}
      width={"850px"}
    >
      <Title level={4}>DIR Status:</Title>
      <br />
      <Steps progressDot current={2}>
        <Step title="Creating your Request" description="Finished" />
        <Step
          title="Your request is being registered by CDC"
          description="Finished"
        />

        <Step
          title="Your request is being reviewed for approval"
          description="Waiting."
        />
      </Steps>
      <Divider />

      <Form layout="vertical">
        {/* 1st Row */}

        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name="name"
              label="Requested By:"
              rules={[{ required: true }]}
            >
              <Input disabled />
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
              <Select disabled placeholder="Choose here">
                <Option value="policy">ICS</Option>
                <Option value="procedure">CBPA</Option>
                <Option value="procedure">Engineering</Option>
                <Option value="procedure">CBPA</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="numcopies"
              label="Number of Copies:"
              rules={[{ required: true }]}
            >
              <Input disabled />
            </Form.Item>
          </Col>

          <Divider></Divider>
          <Title level={4}>Document Information</Title>
          <br></br>
        </Row>

        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name="name"
              label="Documented Information No."
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
    </Drawer>
  );
};

export default ReqDocInfoDrawer;
