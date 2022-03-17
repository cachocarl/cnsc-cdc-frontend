import { Drawer, Typography } from 'antd'
import React from 'react'
import OfficeForm from './OfficeForm';

const { Title } = Typography;
const AddOfficeDrawer = ({visible, onClose}) => {
  return (
    <Drawer
    title=""
    visible={visible}
    onClose={onClose}
    width={"30%"}
    >
        <Title level={3}>Add or Create Office</Title>
        <br></br>
        
        <OfficeForm.AddOfficeForm/>
    </Drawer>
  )
}
const OfficeDrawer = {
    AddOfficeDrawer
}

export default OfficeDrawer