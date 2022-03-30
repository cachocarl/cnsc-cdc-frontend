import React, { useContext } from "react";
import { Input, PageHeader, Table, Tag } from "antd";
import NavigatorContext from "../../../../service/context/NavigatorContext";
import InternalDocumentTableViewDrawer from "../../../component/drawer/InternalDocumentTableViewDrawer";

const { Search } = Input;

const dataSource = [
  {
    docinfotitle: "JEYSI CHECKS#1",
    namereq: "Jeysi",
    counit: "ICS",
    status: "Approved",
  },
  {
    docinfotitle: "CRAL CHECKS#1",
    namereq: "Cral",
    counit: "Alumni Affairs Office",
    status: "Registered",
  },
  {
    docinfotitle: "RAMIL CHECKS#1",
    namereq: "Ramil",
    counit: "Alumni Affairs Office",
    status: "Registered",
  },
];

const column = [
  {
    title: "Name of Requestor",
    dataIndex: "namereq",
    key: "namereq",
    width: 450,
  },
  {
    title: "Document Information Title",
    dataIndex: "docinfotitle",
    key: "docinfotitle",
  },
  {
    title: "College/Unit",
    dataIndex: "counit",
    key: "counit",
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

const ReviewExternalDocumentPage = () => {
  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("review-external-documents");

  const [visible, setVisible] = React.useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="base-container">
        <PageHeader
          title="My External Document Request List"
          subTitle="View List of my Request"
        ></PageHeader>

        <Search
          placeholder="input search text"
          style={{ width: 250, margin: 18 }}
          allowClear
        />

        <br></br>
        <Table
          style={{ margin: 20 }}
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

      <InternalDocumentTableViewDrawer visible={visible} onClose={onClose} />
    </>
  );
};

export default ReviewExternalDocumentPage;
