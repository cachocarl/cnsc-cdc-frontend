import React, { useContext } from "react";
import { Input, Button, PageHeader, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import NavigatorContext from "../../../../service/context/NavigatorContext";
import useDrawerVisibility from "../../../../service/hooks/useDrawerVisibility";
import UserRcdiDrawer from "../../../component/drawers/rcdiDrawer/user/UserRcdiDrawer";

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
];

const RequestCopyDocumentInfoPage = () => {
  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("user-request-copy");

  const { add, view /*edit*/ } = useDrawerVisibility();

  return (
    <>
      <div className="base-container">
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
      <UserRcdiDrawer.CreateRcdiDrawer
        visible={add.visible}
        onClose={() => add.setVisible(false)}
      ></UserRcdiDrawer.CreateRcdiDrawer>

      <UserRcdiDrawer.ViewRcdiDrawer
        visible={view.visible}
        onClose={() => view.setVisible(false)}
      ></UserRcdiDrawer.ViewRcdiDrawer>
    </>
  );
};

export default RequestCopyDocumentInfoPage;