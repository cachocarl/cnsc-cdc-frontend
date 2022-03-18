import { Drawer, Typography } from "antd";
import React from "react";
import DocInfoTypeForm from "./DocInfoTypeForm";

const { Title } = Typography;

const AddDocTypeDrawer = ({ visible, onClose }) => {
  return (
    <Drawer visible={visible} onClose={onClose} width={"30%"}>
      <Title level={3}>Add Document Information Type</Title>
      <br></br>

      <DocInfoTypeForm.AddDocTypeForm />
    </Drawer>
  );
};
const DocInfoTypeDrawer = {
  AddDocTypeDrawer,
};

export default DocInfoTypeDrawer;
