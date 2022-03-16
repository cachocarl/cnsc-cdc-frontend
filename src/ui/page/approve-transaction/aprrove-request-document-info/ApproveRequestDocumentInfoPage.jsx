import React, { useContext } from "react";
import { Input, PageHeader, Table, } from "antd";
import NavigatorContext from "../../../../service/context/NavigatorContext";
import useDrawerVisibility from "../../../../service/hooks/useDrawerVisibility";
import ApprovingRdiDrawer from "../../../component/drawers/rdiDrawer/approving/ApprovingRdiDrawer";
const { Search } = Input;

const dataSource = [
  {
    rdino: "RDI - 001",
    requestor: "Ramil Raul",
    docinfono: "CNSC-SP-QMS-01F2-DICR",
    docinfotitle: "Sample",
  },
];

const column = [
  {
    title: "RDI Number",
    dataIndex: "rdino",
    key: "rdino",
  },

  {
    title: "Requestor",
    dataIndex: "requestor",
    key: "requestor",
  },
  {
    title: "Document Information Number",
    dataIndex: "docinfono",
    key: "docinfono",
    width: 450,
  },
  {
    title: "Document Information Title",
    dataIndex: "docinfotitle",
    key: "docuinfotitle",
    width: 450,
  },
];

const ApproveRequestDocumentInfoPage = () => {

  const { view } = useDrawerVisibility();

  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("approve-request-document-info");
  return (
    <>
      <PageHeader
        title="List of Approve Forms Requests"
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
                view.setVisible(true);
              }, // double click row
            };
          }}
        />
      </div>

          <ApprovingRdiDrawer.RdiApproveDrawer
            visible={view.visible}
            onClose={() => view.setVisible(false)}>
          </ApprovingRdiDrawer.RdiApproveDrawer>
    </>
  );
};

export default ApproveRequestDocumentInfoPage;
