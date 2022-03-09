import React from "react";
import { Table} from "antd";

const { Column, ColumnGroup } = Table;
const ScheduleAndMonitoringPage = () => {
  return <div className="base-container">
      <Table>

            <Column title="MANAGEMENTS SYSTEM DOCUMENTS" 
                    dataIndex="mngtsysdoc" 
                    key="mngtsysdo" />

        <ColumnGroup title="YYYY">
            <Column title="Q1"  
                    dataIndex="firstName"
                    key="firstName" />       

            <Column title="Q2"  
                    dataIndex="firstName"
                    key="firstName" /> 

            <Column title="Q3"  
                    dataIndex="firstName"
                    key="firstName" /> 

            <Column title="Q4"  
                    dataIndex="firstName"
                    key="firstName" /> 
           </ColumnGroup>
    </Table>
    </div>;
};

export default ScheduleAndMonitoringPage;
