import React from "react";
import { Drawer, Button, Space, Steps, Modal, Divider, Typography } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import UserInternalForm from "./UserInternalForm";

const { Title } = Typography;
const { confirm } = Modal;
const { Step } = Steps;

const Add = ({ visible, onClose }) => {
  //function to show a modal after a button click
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
    <>
      <Drawer
        title="Initiate New Document Information Change Request"
        visible={visible}
        onClose={onClose}
        width={"850px"}
        extra={
          <Space>
            <Button type="primary" onClick={showConfirm}>
              {/*Submit New Request*/}
            </Button>
          </Space>
        }
      >
        <Title level={3}>Document Information Change Request</Title>
        <br></br>

        <UserInternalForm.AddForm />
      </Drawer>
    </>
  );
};

const View = ({ visible, onClose }) => {
  //function to show a modal after a button click

  return (
    <>
      <Drawer
        title="View Document Information Change Request"
        visible={visible}
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
          <Title level={3}>Document Information Change Request</Title>
        </Divider>

        <UserInternalForm.ViewForm />
      </Drawer>
    </>
  );
};

const UserInternalDrawer = {
  Add,
  View,
};

export default UserInternalDrawer;
