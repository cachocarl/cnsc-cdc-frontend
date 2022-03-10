import React, { useContext } from "react";
import { Input, PageHeader, Table,} from "antd";
import NavigatorContext from "../../../../service/context/NavigatorContext";
import ReviewDicrDrawer from "../../../component/drawer/reviewDrawer/ReviewDicrDrawer";


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
  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("review-internal-documents");

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

      <ReviewDicrDrawer visible={visible} onClose={onClose} />
    </>
  );
};

export default ReviewInternalDocumentPage;
