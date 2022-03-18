import React from "react";
import { Drawer, Typography } from "antd";
import NatureRequestForm from "./NatureRequestForm";

const { Title } = Typography;

const AddRequestDrawer = ({ visible, onClose }) => {
  return (
    <Drawer visible={visible} onClose={onClose} width={"30%"}>
      <Title level={3}>Add Document Information Type</Title>
      <br></br>

      <NatureRequestForm.AddRequestForm />
    </Drawer>
  );
};
const NatureRequestDrawer = {
  AddRequestDrawer,
};
export default NatureRequestDrawer;
