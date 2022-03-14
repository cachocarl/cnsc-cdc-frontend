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
  Divider,
} from "antd";

import UserExternalForm from "./UserExternalForm";

import { UploadOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import moment from "moment";
const { confirm } = Modal;
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

const CreateExternalDrawer = ({ visible, onClose }) => {
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
      title="Initiate New External Document Request "
      placement="right"
      size="large"
      visible={visible}
      closable={true}
      onClose={onClose}
      width={"850px"}
      extra={
        <Space>
          <Button type="primary" onClick={showConfirm}>
            Submit Request
          </Button>
        </Space>
      }
    >
      <UserExternalForm.CreateExternalForm></UserExternalForm.CreateExternalForm>
    </Drawer>
  );
};

const ViewExternalDrawer = ({ visible, onClose }) => {
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
      title="View External Document Requests "
      placement="right"
      size="large"
      visible={visible}
      closable={true}
      onClose={onClose}
      width={"850px"}
      extra={
        <Space>
          <Button type="primary" onClick={showConfirm}>
            Submit Request
          </Button>
        </Space>
      }
    >
      <UserExternalForm.ViewExternalForm></UserExternalForm.ViewExternalForm>
    </Drawer>
  );
};

const UserExternalDrawer = {
  CreateExternalDrawer,
  ViewExternalDrawer,
};

export default UserExternalDrawer;
