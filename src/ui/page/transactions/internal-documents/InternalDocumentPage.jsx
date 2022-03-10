import React, { useContext } from "react";
import { Input, Button, PageHeader, Table, Tag, Space, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import NavigatorContext from "../../../../service/context/NavigatorContext";
import InternalDicrDrawer from "../../../component/drawer/userDrawer/InternalDicrDrawer";
import InternalDocumentTableViewDrawer from "../../../component/drawer/InternalDocumentTableViewDrawer";


const { Search } = Input;

const dataSource = [
  {
    docinfotitle: "Sample Document Change Request #1",
    docutype: "Policy",
    dateinitiated: "01-13-22",
    status: "Registered",
  },
  {
    docinfotitle: "Sample Document Change Request #2",
    docutype: "Procedure",
    dateinitiated: "01-26-22",
    status: "Approved",
  },
];

const column = [
  {
    title: "Document Information Title",
    dataIndex: "docinfotitle",
    key: "docuinfotitle",
    width: 450,
  },
  {
    title: "Document Type",
    dataIndex: "docutype",
    key: "docutype",
    onFilter: (value, record) => record.docutype.indexOf(value) === 0,
    sorter: (a, b) => a.docutype.length - b.docutype.length,
    sortDirections: ["ascend"],
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
          <Button danger icon={<DeleteOutlined />} />
        </Tooltip>
      </Space>
    ),
  },
];

const InternalDocumentPage = () => {
  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("user-internal-documents");

  const [createVisible, setCreateVisible] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  const showDrawer = () => {
    setCreateVisible(true);
  };

  const onClose = () => {
    setCreateVisible(false);
  };

  const showDrawer1 = () => {
    setVisible(true);
  };

  const onClose1 = () => {
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
                showDrawer1();
              }, // double click row
            };
          }}
        />
      </div>

      <InternalDicrDrawer visible={createVisible} onClose={onClose} />
      <InternalDocumentTableViewDrawer visible={visible} onClose={onClose1} />
    </>
  );
};

export default InternalDocumentPage;
