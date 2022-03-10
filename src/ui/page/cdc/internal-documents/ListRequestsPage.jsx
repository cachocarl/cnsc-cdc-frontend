import { Table } from "antd";
import React from "react";
import ListRequestDrawer from "../../../component/drawer/ListRequestDrawer";


const dataSource = [
  {
    namereq: "Carl",
    docinfotitle: "sample",
    docinfono: "DIN-01",
    year: "2022",
  },
];
const column = [
  {
    title: "Requestor",
    dataIndex: "namereq",
    key: "namereq",
  },
  {
    title: "Document Information Title",
    dataIndex: "docinfotitle",
    key: "docinfotitle",
  },
  {
    title: "Document Information Number",
    dataIndex: "docinfono",
    key: "docinfono",
  },
  {
    title: "Year Made",
    dataIndex: "year",
    key: "year",
  },
];

const ListRequestPage = () => {
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
        
      <Table columns = {column}
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
       <ListRequestDrawer visible={visible} onClose={onClose} />
    </>
  );
};

export default ListRequestPage;
