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
  Divider,
  Upload,
  notification,
  message,
  Modal,
} from "antd";
import {
  FileOutlined,
  UploadOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import {
  RequestNatureAPI,
  DicrInitiationAPI,
  InfoTypeAPI,
} from "../../../../../data/call/Resource";
import { useSessionStorageState } from "ahooks";

import moment from "moment";

const { Option } = Select;
const dateFormat = "MM-DD-YY";
const { Title } = Typography;
const { confirm } = Modal;

//sample code for file uploading
const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

//Code for restricting selection of past dates (Bawal na i select yung nakaraan )
function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf("day");
}

const AddForm = ({ visible, onClose }) => {
  const [form] = Form.useForm();
  const [reqNatureData, setReqNatureData] = React.useState([]);
  const [infoType, setInfoType] = React.useState([]);
  const [userInfo, setUserInfo] = useSessionStorageState("user");

  const fullName =
    userInfo.first_name + " " + userInfo.middle_name + " " + userInfo.last_name;

  //loading offices into drop down
  function showConfirm() {
    confirm({
      title: "Submit Request?",
      icon: <ExclamationCircleOutlined />,
      content:
        "Submitting this request will forward it to the Approving Authority ",
      onOk() {
        console.log("OK");
        onClose();
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  }

  const _handleButton = () => {};

  //For request nature drop-down data
  React.useEffect(() => {
    RequestNatureAPI.retrieveList()
      .then((res) => {
        setReqNatureData(res.data);
      })
      .catch((err) => {
        notification.error({
          message: "An error has occured",
        });
      });
  }, []);

  //For info type drop-down data
  React.useEffect(() => {
    InfoTypeAPI.retrieveList()
      .then((res) => {
        setInfoType(res.data);
      })
      .catch((err) => {
        notification.error({
          message: "An error has occured",
        });
      });
  }, []);

  function _handleOnClick() {
    form.validateFields().then((value) => {
      //Data Transforming
      DicrInitiationAPI.create({
        ...value,
        user_info: userInfo.id,
        officeType: userInfo._office.id,
        req_prop_date: moment(value.req_prop_date).format("YYYY-MM-DD"),
      })
        .then((res) => {
          console.log(res);
          notification.success({
            message: "Request Sent Successfully!",
          });
          form.resetFields();
        })
        .catch((err) => {
          console.log(err);
          form.resetFields();
        })
        .catch((err) => {
          notification.error({
            message: "Error Sending Request !",
          });
        });
    });
  }

  return (
    <Form form={form} layout="vertical">
      {/* 1st Row */}
      <Row gutter={16}>
        {/* Drop-down for Nature of Change */}
        <Col span={8}>
          <Form.Item
            name="req_nature"
            label="Nature of Change:"
            rules={[{ required: true, message: "Required" }]}
          >
            <Select placeholder="Choose Here">
              {reqNatureData.map((data) => {
                return <Option value={data.id}>{data.nature}</Option>;
              })}
            </Select>
          </Form.Item>
        </Col>

        {/* Drop-down for Document Information Type */}
        <Col span={8}>
          <Form.Item
            name="req_info_type"
            label="Document Information Type:"
            rules={[
              {
                required: true,
                message: "Required",
              },
            ]}
          >
            <Select placeholder="Choose Here">
              {infoType.map((data) => {
                return <Option value={data.id}>{data.type}</Option>;
              })}
            </Select>
          </Form.Item>
        </Col>

        {/* Text Field for DICR number  */}
        <Col span={8}>
          <Form.Item
            name="dicr_number"
            label="DICR Number (For Registration)"
            rules={[{ required: false }]}
          >
            <Input disabled={true} placeholder="Generated after registered " />
          </Form.Item>
        </Col>
      </Row>

      {/* 2nd Row */}
      <Row gutter={16}>
        {/* Text Field for name of initiator */}
        <Col span={8}>
          <Form.Item
            initialValue={fullName}
            name="user_info"
            label="Initiator:"
            rules={[{ required: false }]}
          >
            {/* use id as default value? */}
            <Input disabled></Input>
          </Form.Item>
        </Col>

        {/* Drop-down for College/Office/Unit */}
        <Col span={8}>
          <Form.Item
            initialValue={userInfo._office.code}
            name="officeType"
            label="College/Office/Unit:"
            rules={[{ required: false, message: "Please choose" }]}
          >
            <Input disabled></Input>
          </Form.Item>
        </Col>

        {/* Current Date for the creation of the request  */}
        <Col span={8}>
          <Form.Item
            disabled
            name="requestDate"
            label="Date Requested (Current Date):"
            rules={[{ required: false }]}
          >
            <DatePicker
              disabled
              defaultValue={moment()}
              format={dateFormat}
              style={{ width: 255 }}
            />
          </Form.Item>
        </Col>
      </Row>

      {/* 2nd Row */}
      <Row gutter={16}>
        {/* Text Field for Document Information Number */}
        <Col span={8}>
          <Form.Item
            name="req_info_number"
            label="Document Information Number:"
            rules={[
              {
                required: true,
                message: "Required",
              },
            ]}
          >
            <Input
              required
              placeholder="Please enter Document Information Number"
            />
          </Form.Item>
        </Col>

        {/* Text Field for Document Information Title */}
        <Col span={8}>
          <Form.Item
            name="req_info_title"
            label="Document Information Title:"
            rules={[
              {
                required: true,
                message: "Required",
              },
            ]}
          >
            <Input placeholder="Please enter Document Information Title" />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            disabled
            name="req_prop_date"
            label="Proposed Effective Date:"
            rules={[
              {
                required: true,
                message: "Required",
              },
            ]}
          >
            <DatePicker
              style={{ width: 255 }}
              format={dateFormat}
              disabledDate={disabledDate}
              showTime={{ defaultValue: moment("00:00:00") }}
            />
          </Form.Item>
        </Col>
      </Row>

      {/* Text field for description and purpose*/}
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="req_description"
            label="Description and Purpose of Documentation Request"
            rules={[
              {
                required: false,
                message: "Please enter request description",
              },
            ]}
          >
            <Input.TextArea
              rows={4}
              placeholder="Please enter Description and Purpose of Documentation Request"
            />
          </Form.Item>
        </Col>
        {/* File Upload for Attachments */}
        <Col span={8}>
          <Form.Item
            name="req_attachment"
            label="File Attachment(s):"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button icon={<UploadOutlined />}>Upload File(s)</Button>
            </Upload>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={45}>
        <Col span={18}>
          <Form.Item>
            <Button type="primary" onClick={_handleOnClick}></Button>
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item>
            <Button type="primary" onClick={_handleOnClick}>
              Submit New Request
            </Button>
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
            rules={[{ required: false }]}
          >
            <Input disabled placeholder="Please type your Remarks Here" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="action"
            label="Action Taken/Disposition:"
            rules={[{ required: false, message: "Please choose" }]}
          >
            <Select disabled placeholder="Select Action">
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
            rules={[{ required: false }]}
          >
            <Input disabled />
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

      {/* 5th Row, Only enabled for the reviewing authority */}

      <Divider></Divider>
      <Title level={4}>To be Accomplished by the Approving Authority</Title>
      <br></br>
      <Row gutter={16}>
        <Col span={16}>
          <Form.Item
            name="remarks"
            label="Remarks: (if any)"
            rules={[{ required: false }]}
          >
            <Input disabled placeholder="Please type your Remarks Here" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="action"
            label="Action Taken/Disposition:"
            rules={[{ required: false, message: "Please choose" }]}
          >
            <Select disabled placeholder="Select Action">
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
            rules={[{ required: false }]}
          >
            <Input disabled />
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
            rules={[{ required: false, message: "Please choose" }]}
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
            rules={[{ required: false, message: "Please choose" }]}
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
