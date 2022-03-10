import React, { useContext } from "react";
import { Input,PageHeader, Table, } from "antd";
import NavigatorContext from "../../../../service/context/NavigatorContext";
import ApproveDicrDrawer from "../../../component/drawer/approveDrawer/ApproveDicrDrawer";


const { Search } = Input;

const dataSource = [
  {
    dicrno: "DICR-001",
    namereq: "Crispy Jeysi",
    docinfono: "CNSC-SP-QMS-01F1",
    docinfotitle: "Internal Documentation Change Request",
    year:"2022",
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
  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("approve-internal-documents");

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

      <ApproveDicrDrawer visible={visible} onClose={onClose} />
    </>
  );
};

export default ApproveInternalDocumentPage;
