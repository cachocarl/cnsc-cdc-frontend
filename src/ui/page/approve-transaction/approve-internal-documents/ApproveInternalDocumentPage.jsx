import React, { useContext } from "react";
import { Input, PageHeader, Table } from "antd";
import NavigatorContext from "../../../../service/context/NavigatorContext";
import useDrawerVisibility from "../../../../service/hooks/useDrawerVisibility";
import ApprovingInternalDrawer from "../../../component/drawers/internalDrawer/approving/ApprovingInternalDrawer";
const { Search } = Input;

const dataSource = [
  {
    dicrno: "DICR-001",
    namereq: "Crispy Jeysi",
    docinfono: "CNSC-SP-QMS-01F1",
    docinfotitle: "Internal Documentation Change Request",
    year: "2022",
  },
];

const column = [
  {
    title: "DICR-001",
    dataIndex: "dicrno",
    key: "dicrno",
  },
  {
    title: "Requestor",
    dataIndex: "namereq",
    key: "namereq",
    onFilter: (value, record) => record.docutype.indexOf(value) === 0,
    sorter: (a, b) => a.docutype.length - b.docutype.length,
    sortDirections: ["ascend"],
  },
  {
    title: "Document Information Number",
    dataIndex: "docinfono",
    key: "docinfono",
  },
  {
    title: "Document Information Title",
    dataIndex: "docinfotitle",
    key: "docinfotitle",
  },
  {
    title: "Year Made",
    dataIndex: "year",
    key: "year",
  },
];

const ApproveInternalDocumentPage = () => {
  const { /*add, edit,*/ view } = useDrawerVisibility();

  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("approve-internal-documents");

  return (
    <>
      <div className="base-container">
        <PageHeader
          title="List of Documented Information Change Request for Approval"
          //subTitle="View List of my Request"
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

      <ApprovingInternalDrawer.ApproveDrawer
        visible={view.visible}
        onClose={() => view.setVisible(false)}
      ></ApprovingInternalDrawer.ApproveDrawer>
    </>
  );
};

export default ApproveInternalDocumentPage;
