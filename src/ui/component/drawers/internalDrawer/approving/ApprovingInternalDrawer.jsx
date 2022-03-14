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
  Steps,
  Divider,
} from "antd";

import ApprovingInternalForm from "./ApprovingInternalForm";

import { FileOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import moment from "moment";
const { confirm } = Modal;
const { Option } = Select;
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

const ApproveDrawer = ({ visible, onClose }) => {
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
  return (
    <Drawer
      title="Approve Document Information Change Request (DICR)"
      placement="right"
      size="large"
      visible={visible}
      closable={true}
      onClose={onClose}
      width={"850px"}
      extra={
        <Space>
          <Button type="primary" onClick={showConfirm}>
            Submit for Approval
          </Button>
        </Space>
      }
    >
      <Steps direction="vertical" current={3}>
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
      <ApprovingInternalForm.ApproveForm></ApprovingInternalForm.ApproveForm>
    </Drawer>
  );
};

const ApprovingInternalDrawer = {
  ApproveDrawer,
};

export default ApprovingInternalDrawer;