import React from "react";
import { Drawer, Typography } from "antd";
import NatureRequestForm from "./NatureRequestForm";

const { Title } = Typography;

const AddRequestDrawer = ({ visible, onClose }) => {
  return (
    <Drawer
      title="Add New Nature of Request"
      visible={visible}
      onClose={onClose}
      width={"30%"}
    >
      <NatureRequestForm.AddRequestForm />
    </Drawer>
  );
};
const NatureRequestDrawer = {
  AddRequestDrawer,
};
export default NatureRequestDrawer;
