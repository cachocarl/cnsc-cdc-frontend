import React from "react";
import { Drawer, Button, Space, Steps, Modal, Divider, Typography } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import UserRdiForm from "./UserRdiForm";

const { Title } = Typography;
const { confirm } = Modal;
const { Step } = Steps;

const CreateRdiDrawer = ({ visible, onClose }) => {
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
        title="Registration of Request Copies"
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
        <UserRdiForm.CreateRdiForm/>
      </Drawer>
  );
};

const ViewRdiDrawer = ({ visible, onClose }) => {


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
        <UserRdiForm.ViewRdiForm/>
      </Drawer>
  );
};

const UserRdiDrawer = {
  CreateRdiDrawer,
  ViewRdiDrawer,
};

export default UserRdiDrawer;
