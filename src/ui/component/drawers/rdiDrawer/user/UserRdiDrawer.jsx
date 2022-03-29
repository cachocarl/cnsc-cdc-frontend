import React from "react";
import { Drawer, Button, Space, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import UserRdiForm from "./UserRdiForm";

const { confirm } = Modal;

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
      title="Adding Item to Masterlist of Records"
      placement="right"
      size="large"
      visible={visible}
      closable={true}
      onClose={onClose}
      width={"850px"}
      extra={
        <Space>
          <Button type="primary" onClick={showConfirm}>
            Add to Masterlist
          </Button>
        </Space>
      }
    >
      <UserRdiForm.CreateRdiForm />
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
      <UserRdiForm.ViewRdiForm />
    </Drawer>
  );
};

const UserRdiDrawer = {
  CreateRdiDrawer,
  ViewRdiDrawer,
};

export default UserRdiDrawer;
