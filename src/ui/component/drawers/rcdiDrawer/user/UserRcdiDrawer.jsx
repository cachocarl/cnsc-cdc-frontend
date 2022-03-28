import React from "react";
import { Drawer, Button, Space, Steps, Modal, Divider, Typography } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import UserRcdiForm from "./UserRcdiForm";

const { Title } = Typography;
const { confirm } = Modal;
const { Step } = Steps;

const CreateRcdiDrawer = ({ visible, onClose }) => {
  //function to show a modal after a button click
  function showConfirm() {
    confirm({
      title: "Submit Request for Copies of Documented Information?",
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
      title="Request for Copy of Document Information"
      placement="right"
      size="large"
      visible={visible}
      closable={true}
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
      <UserRcdiForm.CreateRcdiForm />
    </Drawer>
  );
};

const ViewRcdiDrawer = ({ visible, onClose }) => {
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
      <Steps direction="vertical" current={2}>
        <Step
          title="Step 1: Initiating Request"
          description="Create a Request for Document Information"
        />
        <Step
          title="Step 2: Registration Of Request"
          description="Request for Document Information is being examined for registration by CDC"
        />
        <Step
          title="Step 3: Reviewing of Request"
          description="Request for Document Information is being reviewed by a Reviewing Authority"
        />
        <Step
          title="Step 4: Approving of Request"
          description="Request for Document Information is being evaluated by an Approving Authority"
        />
        <Step title="Step 5: Update of QMS" />
      </Steps>
      <Divider />
      <UserRcdiForm.ViewRcdiForm />
    </Drawer>
  );
};

const UserRdiDrawer = {
  CreateRcdiDrawer,
  ViewRcdiDrawer,
};

export default UserRdiDrawer;
