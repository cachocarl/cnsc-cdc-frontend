import React from "react";
import {
  Drawer,
  Button,
  Space,
  Modal,
  Divider,
  Steps,
  Typography
} from "antd";

import UserExternalForm from "./UserExternalForm";

import { ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;
const { Title } = Typography;
const { Step } = Steps;

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
  //function to show a modal after a button click
  return (
    <Drawer
      title="View External Document Requests "
      placement="right"
      size="large"
      visible={visible}
      closable={true}
      onClose={onClose}
      width={"850px"}
    >
      <Divider orientation="left">
          <Title level={4}>PROGRESS OF FORM REQUEST:</Title>
        </Divider>
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
        <Divider orientation="left">
          <Title level={3}>Description Of Documented Information</Title>
        </Divider>

        <br></br>
      <UserExternalForm.ViewExternalForm></UserExternalForm.ViewExternalForm>
    </Drawer>
  );
};

const UserExternalDrawer = {
  CreateExternalDrawer,
  ViewExternalDrawer,
};

export default UserExternalDrawer;
