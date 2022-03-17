import React from 'react'
import { PageHeader, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const DocumentTypePage = () => {
  return (
    <>
    <PageHeader title="Document Types"       
    extra={[
        <Button
          //onClick={() => add.setVisible(true)}
          type="primary"
          icon={<PlusOutlined />}
        >
          Add Document Type
        </Button>,
      ]} >

    </PageHeader>

    <div className="base-container">
      </div>
     </>
  )
}

export default DocumentTypePage