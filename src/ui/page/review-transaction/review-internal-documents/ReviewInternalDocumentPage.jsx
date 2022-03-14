import React, { useContext } from "react";
import { Input, PageHeader, Table } from "antd";
import NavigatorContext from "../../../../service/context/NavigatorContext";
import ReviewingInternalDrawer from "../../../component/drawers/internalDrawer/reviewing/ReviewingInternalDrawer";
import useDrawerVisibility from "../../../../service/hooks/useDrawerVisibility";

const { Search } = Input;

const dataSource = [
  {
    dicrno: "DICR-001",
    namereq: "Cral",
    docinfotitle: "Intrernal Document Change Request",
    unit: "International Planning, and Development Office",
  },
  {
    dicrno: "DICR-002",
    namereq: "Jeysi",
    docinfotitle: "The Sample",
    unit: "Internal Cotrol Office",
  },
];

const column = [
  {
    title: "DICR Number",
    dataIndex: "dicrno",
    key: "dicrno",
  },
  {
    title: "Name of Requestor",
    dataIndex: "namereq",
    key: "namereq",
    onFilter: (value, record) => record.docutype.indexOf(value) === 0,
    sorter: (a, b) => a.docutype.length - b.docutype.length,
    sortDirections: ["ascend"],
  },
  {
    title: "Document Information Title",
    dataIndex: "docinfotitle",
    key: "docinfotitle",
  },
  {
    title: "College/Unit",
    dataIndex: "unit",
    key: "unit",
    onFilter: (value, record) => record.docutype.indexOf(value) === 0,
    sorter: (a, b) => a.docutype.length - b.docutype.length,
    sortDirections: ["ascend"],
  },
];

const ReviewInternalDocumentPage = () => {
  const { add, edit, view } = useDrawerVisibility();

  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("user-internal-documents");

  return (
    <>
      <PageHeader
        title=" Documented Information Change Request for Review"
        //subTitle="View List of my Request"
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

      <ReviewingInternalDrawer.ReviewDrawer
        visible={view.visible}
        onClose={() => view.setVisible(false)}
      ></ReviewingInternalDrawer.ReviewDrawer>
    </>
  );
};

export default ReviewInternalDocumentPage;
