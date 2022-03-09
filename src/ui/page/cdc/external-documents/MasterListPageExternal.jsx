import React from 'react'
import { Table } from 'antd'

const column=[
        {
            title: "NO",
            dataIndex: "no",
            key: "no",
          },
          {
            title: "REG DATE",
            dataIndex: "regdate",
            key: "datereceive",
          },
          {
            title: "Document Title",
            dataIndex: "doctitle",
            key: "doctitle",
          },
          {
            title: "SOURCE/ AUTHOR",
            dataIndex: "source",
            key: "saurce",
          },
          {
            title: "FORM (E/P)",
            dataIndex: "form",
            key: "form",
          },
          {
            title: "ISSUE/ PUBLICATION YEAR",
            dataIndex: "issue",
            key: "issue",
          },
        ];

const MasterListPageExternal = () => {
  return <div className='base-container'>
      
      <Table columns={column}/>
      
      </div>
}

export default MasterListPageExternal