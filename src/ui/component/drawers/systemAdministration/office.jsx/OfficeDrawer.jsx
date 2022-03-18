import { Drawer, Typography } from "antd";
import React from "react";
import OfficeForm from "./OfficeForm";

const { Title } = Typography;
const AddOfficeDrawer = ({ visible, onClose }) => {
  return (
    <Drawer
      title="Add New Office"
      visible={visible}
      onClose={onClose}
      width={"30%"}
    >
      <OfficeForm.AddOfficeForm />
    </Drawer>
  );
};
const OfficeDrawer = {
  AddOfficeDrawer,
};

export default OfficeDrawer;
