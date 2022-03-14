import React from "react";
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  DatePicker,
  Space,
  Typography,
  Upload,
  Modal,
  Steps,
  Divider,
} from "antd";

import CdcInternalForm from "./CdcInternalForm";

import { FileOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import moment from "moment";
const { confirm } = Modal;
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
const ListRequestDrawer = ({ visible, onClose }) => {
  function showReturn() {
    confirm({
      title: "Return DICR request?",
      icon: <ExclamationCircleOutlined />,
      content:
        "Returning this request will postpone the current request and will require the requestor to perform a new request again.",

      onOk() {
        console.log("OK");
        onClose();
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  }
  function showRegister() {
    confirm({
      title: "Register DICR?",
      icon: <ExclamationCircleOutlined />,
      content:
        "By registering this DICR it will automatically generate a DICR no. and forward it to a Reviewing Authority.",

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
      title="Register Document Information Change Request (DICR)"
      placement="right"
      size="large"
      visible={visible}
      closable={true}
      onClose={onClose}
      width={"850px"}
      extra={
        <Space>
          <Button type="ghost" onClick={showReturn}>
            Return Request
          </Button>
          <Button type="primary" onClick={showRegister}>
            Register Request
          </Button>
        </Space>
      }
    >
      <br />

      <CdcInternalForm.RegisterForm></CdcInternalForm.RegisterForm>
    </Drawer>
  );
};

const CdcInternalDrawer = {
  ListRequestDrawer,
};

export default CdcInternalDrawer;
