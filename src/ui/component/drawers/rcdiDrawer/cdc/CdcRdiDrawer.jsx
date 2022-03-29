import React from 'react'
import {
    Drawer,
    Button,
    Space,
    Modal,
  
  } from "antd";
  
import CdcRdiForm from './CdcRdiForm';

import { ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;

const CdcListRdiDrawer = ({ visible, onClose }) => {
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
    title="Registration For Request of Copies"
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
      <CdcRdiForm.CdcRegister/>
  </Drawer>
  )

};
const CdcRdiDrawer = {
    CdcListRdiDrawer
}
export default CdcRdiDrawer