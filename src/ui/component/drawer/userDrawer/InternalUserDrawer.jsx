import React from "react";
import {
  Drawer,
  Form,
  Button,
  Space,
  Modal,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
  Typography,
  Divider,
  Steps,
  Upload,
} from "antd";
import {
  ExclamationCircleOutlined,
  FileOutlined,
} from "@ant-design/icons";

import moment from "moment";
import DicrForm from "../../forms/DicrForm";

const { Option } = Select;
const dateFormat = "YYYY-MM-DD";
const { Title } = Typography;
const { Step } = Steps;
const { confirm } = Modal;
const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const Add = ({ visible, onClose }) => {
  function showConfirm() {
    confirm({
      title: "Submit Document Information Change Request?",
      icon: <ExclamationCircleOutlined />,
      content:
        "Submitting your request will forward it to CDC for registration. ",
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
      title="Initiate Document Information Change Request"
      visible={visible}
      onClose={onClose}
      width={"850px"}
      extra={
        <Space>
          <Button type="primary" onClick={showConfirm}>
            Submit New Request
          </Button>
        </Space>
      }
    >
      <Title level={3}>Document Information Change Request</Title>
      <br></br>

      <DicrForm></DicrForm>

      <br />
    </Drawer>
  );
};

const View = ({ visible, onClose }) => {
  return (
    <Drawer
      title="View Documented Information Change Request"
      visible={visible}
      onClose={onClose}
      width={"850px"}
    >
      <Title level={4}>PROGRESS OF FORM REQUEST:</Title>
      <br />
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
          <Col span={8}>
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
          <Col span={8}>
            <Form.Item
              name="file"
              label="File Attachment:"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button icon={<FileOutlined />}>
                  Clicl Here to View Files
                </Button>
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

const Edit = ({ visible, onClose }) => {
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
      title="View Document Information Change Request (DICR)"
      placement="right"
      size="large"
      visible={visible}
      closable={true}
      onClose={onClose}
      width={"850px"}
      extra={
        <Space>
          <Button type="primary" onClick={showConfirm}>
            Edit
          </Button>
        </Space>
      }
    >
      <Form layout="vertical">
        {/* 1st Row */}

        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name="natureOfChange"
              label="DICR No:"
              rules={[{ required: true, message: "Please choose" }]}
            >
              <Input disabled={true} placeholder="DICR-001" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="docinfotype"
              label="Date Received:"
              rules={[{ required: true, message: "Please choose" }]}
            >
              <Input disabled={true} placeholder="2022-03-10" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="name"
              label="Doc No/Doc Title"
              rules={[{ required: false }]}
            >
              <Input
                disabled={true}
                placeholder="Sample Documented Information Change Request Title"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name="natureOfChange"
              label="Requested By:"
              rules={[{ required: true, message: "Please choose" }]}
            >
              <Input disabled={true} placeholder="New" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="docinfotype"
              label="Action Taken:"
              rules={[{ required: true, message: "Please choose" }]}
            >
              <Input disabled={true} placeholder="" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="name"
              label="Date Completed"
              rules={[{ required: false }]}
            >
              <Input disabled={true} placeholder="" />
            </Form.Item>
          </Col>
        </Row>

        {/* 2nd Row */}
      </Form>
    </Drawer>
  );
};

const InternalUserDrawer = {
  Add,
  View,
  Edit,
};

export default InternalUserDrawer;
