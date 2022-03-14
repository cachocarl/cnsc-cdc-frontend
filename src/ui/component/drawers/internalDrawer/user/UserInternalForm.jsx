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
  message,
} from "antd";
import {
  ExclamationCircleOutlined,
  FileOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import moment from "moment";

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

const AddForm = () => {
  return (
    <Form>
      <Form layout="vertical">
        {/* 1st Row */}
        <Row gutter={16}>
          {/* Drop-down for Nature of Change, enabled */}
          <Col span={8}>
            <Form.Item
              name="natureOfChange"
              label="Nature of Change:"
              rules={[{ required: true, message: "Please choose" }]}
            >
              <Select placeholder="New">
                <Option value="private">New</Option>
                <Option value="public">Revision</Option>
                <Option value="public">Deletion/Obsolete</Option>
              </Select>
            </Form.Item>
          </Col>

          {/* Drop-down for Document Information Type, enabled */}
          <Col span={8}>
            <Form.Item
              name="docinfotype"
              label="Document Information Type:"
              rules={[{ required: true, message: "Please choose" }]}
            >
              <Select placeholder="Policy">
                <Option value="private">Policy</Option>
                <Option value="public">Procedure</Option>
                <Option value="public">Form</Option>
                <Option value="public">Attachment</Option>
              </Select>
            </Form.Item>
          </Col>

          {/* Text Field for Document Information Type, it's only enabled for cdc so it's disabled for all other users */}
          <Col span={8}>
            <Form.Item
              name="dicrNumber"
              label="DICR Number (For Registration)"
              rules={[{ required: false }]}
            >
              <Input disabled={true} />
            </Form.Item>
          </Col>
        </Row>

        {/* 2nd Row */}
        <Row gutter={16}>
          {/* Text Field for name of initiator, it might be autofilled by the name of the user so it's disabled for now */}
          <Col span={8}>
            <Form.Item
              name="initiatorName"
              label="Initiator:"
              rules={[{ required: true }]}
            >
              <Input disabled placeholder="Sample Name" />
            </Form.Item>
          </Col>

          {/* Drop-down for College/Office/Unit, enabled */}
          <Col span={8}>
            <Form.Item
              name="officeType"
              label="College/Office/Unit:"
              rules={[{ required: true, message: "Please choose" }]}
            >
              <Select placeholder="Choose College/Office/Unit">
                <Option value="policy">ICS</Option>
                <Option value="procedure">CBPA</Option>
                <Option value="procedure">Engineering</Option>
                <Option value="procedure">CBPA</Option>
              </Select>
            </Form.Item>
          </Col>

          {/* Current Date for the creation of the request, disabled  */}
          <Col span={8}>
            <Form.Item
              disabled
              name="requestDate"
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

        {/* 2nd Row */}
        <Row gutter={16}>
          {/* Text Field for Document Information Number, enabled */}
          <Col span={8}>
            <Form.Item
              name="docInfoNumber"
              label="Document Information Number:"
              rules={[{ required: true }]}
            >
              <Input placeholder="Please enter Document Information Number" />
            </Form.Item>
          </Col>

          {/* Text Field for Document Information Title, enabled */}
          <Col span={8}>
            <Form.Item
              name="docInfoTitle"
              label="Document Information Title:"
              rules={[{ required: true }]}
            >
              <Input placeholder="Please enter Document Information Title" />
            </Form.Item>
          </Col>

          {/* File Upload for Attachments, sample code only from antD */}
          <Col span={8}>
            <Form.Item
              name="file"
              label="File Attachment:"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button icon={<UploadOutlined />}>Upload File(s)</Button>
              </Upload>
            </Form.Item>
          </Col>
        </Row>

        {/* Text field for description and purpose, enabled for user*/}
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
                placeholder="Please enter Description and Purpose of Documentation Request"
              />
            </Form.Item>
          </Col>
        </Row>

        <Divider></Divider>

        {/* 5th Row, Only enabled for the reviewing authority */}

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

        {/* 5th Row, Only enabled for the reviewing authority */}

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
    </Form>
  );
};

const ViewForm = ({ visible, onClose }) => {
  return (
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

      <Divider orientation="left">
        <Title level={4}>Document Information</Title>
      </Divider>

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
            <Input disabled placeholder="Example Document Information Title" />
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

      <Divider orientation="left">
        <Title level={4}>To be Accomplished by the Reviewing Authority</Title>
      </Divider>

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

      <Divider orientation="left">
        <Title level={4}>To be accomplished by the Approving Authority</Title>
      </Divider>
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
  );
};

const UserInternalForm = {
  AddForm,
  ViewForm,
};

export default UserInternalForm;