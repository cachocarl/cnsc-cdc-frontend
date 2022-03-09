import React from "react";
import { Table } from "antd";

const { Column, ColumnGroup } = Table;

const MasterListPageInternal = () => {
  return <div className="base-container">
    As of____________ 
    <Table>
    <ColumnGroup title="">
            <Column title="NO"></Column>
            <Column title="DOCUMENT NUMBER"></Column>
            <Column title="DOCUMENT TITLE"></Column>
          </ColumnGroup>

          <ColumnGroup title="INITIAL ISSUANCE">
            <Column title="REV" 
                    dataIndex="rev1" 
                    key="rev1" />

            <Column title="PAGES" 
                    dataIndex="pages1" 
                    key="pages1" />

            <Column
                    title="EFFECTIVE DATE"
                    dataIndex="effectivedate1"
                    key="effectivedate1"/>
          </ColumnGroup>
          
          <ColumnGroup title="CURRENT REVISION">
            <Column 
                    title="REV" 
                    dataIndex="rev2" 
                    key="rev2" />

            <Column 
                    title="PAGES" 
                    dataIndex="pages2" 
                    key="pages2" />
            <Column
              title="EFFECTIVE DATE"
              dataIndex="effectivedate2"
              key="effectivedate2"
            />
          </ColumnGroup>
    </Table>

    </div>;
};

export default MasterListPageInternal;
