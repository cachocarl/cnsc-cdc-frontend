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
  Divider,
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
const RdiApproveForm = () => {
  return (
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
            name="name"
            label="Documented Information Type"
            rules={[{ required: false }]}
          >
            <Input disabled={true} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
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
            name="fileattachment"
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
      <Title level={4}>To be Accomplished by the Approving Authority</Title>
      <br></br>
      <Row gutter={16}>
        <Col span={16}>
          <Form.Item
            name="remarks"
            label="Review of Documents"
            rules={[{ required: true }]}
          >
            <Input />
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
            label="Name of Approving Authority"
            rules={[{ required: true }]}
          >
            <Input disabled placeholder="Approving Authority Name" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="proposedDate"
            label="Date of Approval:"
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
const ApprovingRdiForm = {
  RdiApproveForm,
};
export default ApprovingRdiForm;
