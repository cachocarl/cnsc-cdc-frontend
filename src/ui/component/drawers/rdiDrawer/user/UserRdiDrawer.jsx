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

import UserRdiForm from "./UserRdiForm";

import { ExclamationCircleOutlined } from "@ant-design/icons";
import moment from "moment";
const { confirm } = Modal;
const { Option } = Select;
const dateFormat = "YYYY-MM-DD";
const { Step } = Steps;
const { Title } = Typography;

const createRdiDrawer = ({ visible, onClose }) => {
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
    <>
      <Drawer
        title="Initiate 123 Request for Documented Information"
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

        <UserRdiForm.createRdiForm></UserRdiForm.createRdiForm>
      </Drawer>
    </>
  );
};

const viewRdiDrawer = ({ visible, onClose }) => {
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
    <>
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

        <UserRdiForm.createRdiForm></UserRdiForm.createRdiForm>
      </Drawer>
    </>
  );
};

const userRdiDrawer = {
  createRdiDrawer,
  viewRdiDrawer,
};

export default userRdiDrawer;
