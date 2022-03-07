import React, { useContext } from "react";
import { Input, Button, PageHeader, Table, Tag, Space, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import NavigatorContext from "../../../../service/context/NavigatorContext";
import InternalDocumentDrawer from "../../../component/drawer/InternalDocumentDrawer";

const { Search } = Input;

const dataSource = [
  {
    docinfotitle: "JEYSI CHECKS#1",
    namereq: "Jeysi",
    counit: "ICS",
    status: "Approved",
  },
  {
    docinfotitle: "CRAL CHECKS#1",
    namereq: "Cral",
    counit: "Alumni Affairs Office",
    status: "Registered",
  },
  {
    docinfotitle: "RAMIL CHECKS#1",
    namereq: "Ramil",
    counit: "Alumni Affairs Office",
    status: "Registered",
  },
  {
    docinfotitle: "Sample Document Change Request #1",
    namereq: "Ruyin",
    counit: "CBPA",
    status: "Approved",
  },
  {
    docinfotitle: "Sample Document Change Request #1",
    namereq: "Adrian",
    counit: "ICS",
    status: "Approved",
  },
  {
    docinfotitle: "Sample Document Change Request #1",
    namereq: "Emman",
    counit: "COENG",
    status: "Registered",
  },
  {
    docinfotitle: "Sample Document Change Request #1",
    namereq: "Aye",
    counit: "COENG",
    status: "Registered",
  },
  {
    docinfotitle: "Sample Document Change Request #1",
    namereq: "David",
    counit: "COTT",
    status: "Approved",
  },
  {
    docinfotitle: "Sample Document Change Request #1",
    namereq: "Jeysi",
    counit: "ICS",
    status: "Registered",
  },
  {
    docinfotitle: "Sample Document Change Request #1",
    namereq: "Jeysi",
    counit: "ICS",
    status: "Registered",
  },
];

const column = [
  {
    title: "Name of Requestor",
    dataIndex: "namereq",
    key: "namereq",
    width: 450,
  },
  {
    title: "Document Information Title",
    dataIndex: "docinfotitle",
    key: "docinfotitle",
  },
  {
    title: "College/Unit",
    dataIndex: "counit",
    key: "counit",
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
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => (
      <Space>
        <Tooltip title="Edit">
          <Button icon={<EditOutlined />} />
        </Tooltip>
        <Tooltip title="Delete">
          <Button type="primary" danger ghost icon={<DeleteOutlined />} />
        </Tooltip>
      </Space>
    ),
  },
];

const ExternalDocumentPage = () => {
  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("external-documents");

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
          <Button type="primary" icon={<PlusOutlined />} onClick={showDrawer}>
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

export default ExternalDocumentPage;
