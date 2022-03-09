import React, { useContext } from "react";
import { Input, PageHeader, Table, Tag, } from "antd";
import NavigatorContext from "../../../../service/context/NavigatorContext";
import ReqDocInfoDrawer from "../../../component/drawer/userDrawer/ReqDocInfoDrawer";

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
    status: "Registered",
  },
  {
    docinfotitle: "Master List of Internal Documented Information Rev.0",
    docutype: "CNSC-SP-QMS-01F3",
    dateinitiated: "02-01-22",
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
];

const ApproveRequestDocumentInfoPage = () => {
  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("approve-request-document-info");

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
        title="List of Request for Documented Information"
        subTitle="View List of my Request"
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

      <ReqDocInfoDrawer visible={visible} onClose={onClose} />
    </>
  );
};

export default ApproveRequestDocumentInfoPage;
