import React, { useContext } from "react";
import { Input,PageHeader, Table, Tag, } from "antd";
import NavigatorContext from "../../../../service/context/NavigatorContext";
import ApproveDicrDrawer from "../../../component/drawer/approveDrawer/ApproveDicrDrawe";


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
