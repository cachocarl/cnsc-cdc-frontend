import { Drawer } from "antd";
import React from "react";
import DocInfoTypeForm from "./DocInfoTypeForm";

const AddDocTypeDrawer = ({ visible, onClose }) => {
  return (
    <Drawer
      title="Add New Document Information Type"
      visible={visible}
      onClose={onClose}
      width={"30%"}
    >
      <DocInfoTypeForm.AddDocTypeForm />
    </Drawer>
  );
};
const DocInfoTypeDrawer = {
  AddDocTypeDrawer,
};

export default DocInfoTypeDrawer;
