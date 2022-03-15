import React from "react";
import {
  Drawer,
  Typography,
  Divider,
  Steps,
} from "antd";

const { Step } = Steps;
const { Title } = Typography;

const createRdiDrawer = ({ visible, onClose }) => {

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
      </Drawer>
    </>
  );
};

const viewRdiDrawer = ({ visible, onClose }) => {


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
      </Drawer>
    </>
  );
};

const userRdiDrawer = {
  createRdiDrawer,
  viewRdiDrawer,
};

export default userRdiDrawer;
