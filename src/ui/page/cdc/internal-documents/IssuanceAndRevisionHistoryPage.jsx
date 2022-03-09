import React from "react";
import { Table } from "antd";

const { Column, ColumnGroup } = Table;

const IssuanceAndRevisionHistoryPage = () => {
  return <div className="base-container">
    <Table>
    <ColumnGroup title="DOC NO AND TITLE:">
            <Column title="REV DATE" 
                    dataIndex="firstName" 
                    key="firstName" />

            <Column title="REV"  
                    dataIndex="firstName" 
                    key="firstName" />
    </ColumnGroup>

    <ColumnGroup title="">
            <Column title="PAGE REVISED"  
                    dataIndex="firstName"
                    key="firstName" />       

            <Column title="DISCRIPTION OF ISSUANCE / REVISION" 
                    dataIndex="rev1" 
                    key="rev1" />
            <Column
                    title="EFFECTIVE DATE"
                    dataIndex="effectivedate1"
                    key="effectivedate1"/>
           </ColumnGroup>

    </Table>
  </div>;
};

export default IssuanceAndRevisionHistoryPage;
