import React from 'react'
import { PageHeader, Button, Table } from 'antd'
import { PlusOutlined } from "@ant-design/icons";
import Column from 'antd/lib/table/Column';
import useDrawerVisibility from '../../../service/hooks/useDrawerVisibility';
import OfficeDrawer from '../../component/drawers/systemAdministration/office.jsx/OfficeDrawer';

const OfficePage = () => {

    const { add } = useDrawerVisibility();

  return (
    <>
    <PageHeader title="Offices"       
    extra={[
        <Button
          onClick={() => add.setVisible(true)}
          type="primary"
          icon={<PlusOutlined />}
        >
          Add Office
        </Button>,
      ]} >

    </PageHeader>

    <div className="base-container">
          <Table> 
            <Column title="Code"></Column>
            <Column title="Name"></Column>
            <Column title="Head"></Column>
          </Table>
          <OfficeDrawer.AddOfficeDrawer
            visible={add.visible}
            onClose={() => add.setVisible(false)}
          />
      </div>
     </>
  );
};

export default OfficePage