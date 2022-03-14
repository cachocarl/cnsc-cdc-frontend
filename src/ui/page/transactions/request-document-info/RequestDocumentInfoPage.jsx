import React, { useContext } from "react";
import { Input, Button, PageHeader, Table, Tag, Space, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import NavigatorContext from "../../../../service/context/NavigatorContext";
import ReqDocInfoDrawer from "../../../component/drawer/userDrawer/ReqDocInfoDrawer";
import useDrawerVisibility from "../../../../service/hooks/useDrawerVisibility";
import userRdiDrawer from "../../../component/drawers/rdiDrawer/user/userRdiDrawer";

const { Search } = Input;

const dataSource = [
  {
    docinfotitle: "Registration and Monitoring Form Rev.0",
    docutype: "CNSC-SP-QMS-01F2-DICR",
    dateinitiated: "Feburary 14, 2022",
    status: "Approved",
  },
  {
    docinfotitle: "Documented Info. Change Request DICR Rev.0",
    docutype: "CNSC-SP-QMS-01F1",
    dateinitiated: "Feburary 25, 2022",
    status: "Registered",
  },
  {
    docinfotitle: "Master List of Internal Documented Information Rev.0",
    docutype: "CNSC-SP-QMS-01F3",
    dateinitiated: "March 07, 2022",
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

const RequestDocumentInfoPage = () => {
  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("user-request-document-info");

  const { add, view, edit } = useDrawerVisibility();

  return (
    <>
      <PageHeader
        title="List of My Request for Documented Information"
        extra={[
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => add.setVisible(true)}
          >
            Initiate New Request
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
                view.setVisible(true);
              }, // double click row
            };
          }}
        />
      </div>
      <userRdiDrawer.createRdiDrawer
        visible={add.visible}
        onClose={() => add.setVisible(false)}
      ></userRdiDrawer.createRdiDrawer>

      <userRdiDrawer.viewRdiDrawer
        visible={view.visible}
        onClose={() => view.setVisible(false)}
      ></userRdiDrawer.viewRdiDrawer>
    </>
  );
};

export default RequestDocumentInfoPage;
