import React from 'react'
import { PageHeader } from 'antd'
import ContentTab from '../../component/tabs/ContentTab'
import UserManagementPage from './UserManagementPage'
import OfficePage from './OfficePage'
import DocumentTypePage from './DocumentTypePage'

const SystemAministrationPage = () => {
  return (
    <>
        <PageHeader title="Internal Documents"></PageHeader>
        <ContentTab
             content={[
                {
                    title: "Office",
                    key: "tab1",
                    content: <OfficePage/>,
                  },
                  {
                    title: "User",
                    key: "tab2",
                    content: <UserManagementPage/>,
                  },
                  {
                    title: "Document Type",
                    key: "tab3",
                    content: <DocumentTypePage/>,
                  },
            ]}
        />
  </>
  )
}

export default SystemAministrationPage