import React, { useContext } from "react";
import { Input, Button, PageHeader, Table, Tag, Space, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import NavigatorContext from "../../../../service/context/NavigatorContext";
import InternalDocumentDrawer from "../../../component/drawer/InternalDocumentDrawer";

const { Search } = Input;

const dataSource = [
  {
    docinfotitle: "Registration and Monitoring Form Rev.0",
    docutype: "CNSC-SP-QMS-01F2-DICR",
    dateinitiated: "01-13-22",
    status: "Registered",
  },
  {
    docinfotitle: "Documented Info. Change Request DICR Rev.0",
    docutype: "CNSC-SP-QMS-01F1",
    dateinitiated: "01-26-22",
    status: "Approved",
  },
  {
    docinfotitle: "Master List of Internal Documented Information Rev.0",
    docutype: "CNSC-SP-QMS-01F3",
    dateinitiated: "02-01-22",
    status: "Approved",
  },
  {
    docinfotitle: "Issuance_Revision History Rev.0",
    docutype: "CNSC-SP-QMS-01F4",
    dateinitiated: "02-03-22",
    status: "Registered",
  },
  {
    docinfotitle: "Documented Information Issuance and Retrieval Rev.0",
    docutype: "CNSC-SP-QMS-01F5",
    dateinitiated: "02-03-22",
    status: "Registered",
  },
  {
    docinfotitle: "Schedule_Monitoring of QMS Documented Info. Backup-Rev.0",
    docutype: "CNSC-SP-QMS-01F6",
    dateinitiated: "02-03-22",
    status: "Registered",
  },
  {
    docinfotitle: "Master List of External Documented Information Rev.0",
    docutype: "CNSC-SP-QMS-01F7",
    dateinitiated: "02-03-22",
    status: "Registered",
  },
  {
    docinfotitle: "Request-for Documented Information Rev.2",
    docutype: "CNSC-SP-QMS-01F8",
    dateinitiated: "02-03-22",
    status: "Registered",
  },
  {
    docinfotitle: "Master List of Records",
    docutype: "CNSC-SP-QMS-01F9",
    dateinitiated: "02-03-22",
    status: "Registered",
  },
  {
    docinfotitle: "Records Storage Inspection Checklist",
    docutype: "CNSC-SP-QMS-01F10",
    dateinitiated: "02-03-22",
    status: "Registered",
  },
];

const column = [
  {
    title: "Document Type",
    dataIndex: "docutype",
    key: "docutype",
    
  },
  {
    title: "Document Information Title",
    dataIndex: "docinfotitle",
    key: "docuinfotitle",
    width: 450,
  },
  {
    title: "Date Initiated",
    dataIndex: "dateinitiated",
    key: "dateinitiated",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",

    

    render: (data, record) => {
      return data === "Registered" ? (
        <Tag color="blue">Registered</Tag>
      ) : (
        <Tag color="green">Approved</Tag>
      );
    },
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,

    render: () => 
     <Space>
      <Tooltip title="Edit">
      <Button icon={<EditOutlined/>} />
    </Tooltip>

    <Tooltip title="Delete">
      <Button danger icon={<DeleteOutlined/>} />
    </Tooltip>
    </Space>,
    
  },
];

const RequestDocumentInfoPage = () => {
  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("request-document-info");

  const [visible, setVisible] = React.useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <PageHeader
        title="My Internal Document
       Request List"
        subTitle="View List of my Request"
        extra={[
          <Button type="primary" icon={<PlusOutlined/>} onClick={showDrawer}>
            Create New Form Request
          </Button>,
        ]}
      ></PageHeader>

      <div className="base-container">
        <Search
          placeholder="input search text"
          style={{ width: 250, margin: 18 }}
          allowClear
        />

        <br></br>
        <Table
          columns={column}
          dataSource={dataSource}
          onRow={(record, rowIndex) => {
            return {
              onDoubleClick: (event) => {
                showDrawer();
              }, // double click row
            };
          }}
        />
      </div>

      <InternalDocumentDrawer visible={visible} onClose={onClose} />
    </>
  );
};

export default RequestDocumentInfoPage;
