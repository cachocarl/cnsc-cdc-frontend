import React, { useContext } from "react";
import { Input, Button, PageHeader, Table, Tag, Space, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import NavigatorContext from "../../../../service/context/NavigatorContext";
import useDrawerVisibility from "../../../../service/hooks/useDrawerVisibility";
import UserInternalDrawer from "../../../component/drawers/internalDrawer/user/UserInternalDrawer";

const { Search } = Input;
const dataSource = [
  {
    docinfotitle: "Sample Document Change Request #1",
    docutype: "Policy",
    dateinitiated: "January 06, 2022",
    status: "Registered",
  },
  {
    docinfotitle: "Sample Document Change Request #2",
    docutype: "Procedure",
    dateinitiated: "January 14, 2022",
    status: "Registered",
  },
  {
    docinfotitle: "Sample Document Change Request #3",
    docutype: "Form",
    dateinitiated: "January 17, 2022",
    status: "Registered",
  },
  {
    docinfotitle: "Sample Document Change Request #4",
    docutype: "Policy",
    dateinitiated: "Februray 26, 2022",
    status: "Registered",
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
  const { add, /*edit,*/ view } = useDrawerVisibility();

  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("user-internal-documents");

  return (
    <>
      <PageHeader
        title="List of My Documented Information Change Request "
        //subTitle="View List of my Request"
        extra={[
          <Button
            onClick={() => add.setVisible(true)}
            type="primary"
            icon={<PlusOutlined />}
          >
            Initiate New Request
          </Button>,
        ]}
      ></PageHeader>

      <div className="base-container">
        <Space justify="right">
          <Search
            placeholder="input search text"
            style={{ width: 250, margin: 18 }}
            allowClear
          />
        </Space>
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

        <UserInternalDrawer.Add
          visible={add.visible}
          onClose={() => add.setVisible(false)}
        ></UserInternalDrawer.Add>

        <UserInternalDrawer.View
          visible={view.visible}
          onClose={() => view.setVisible(false)}
        ></UserInternalDrawer.View>
      </div>
    </>
  );
};

export default InternalDocumentPage;
