import { Table } from "antd";
import React from "react";
import ReviewDicrDrawer from "../../../component/drawer/reviewDrawer/ReviewDicrDrawer";


const dataSource = [
  {
    dicrno: "DICR NO-001",
    datereceive: "03/09/2022",
    docno: "01",
    requestedby: "Cral",
    actiontaken: "Approved",
    datecompleted:"03/14/2022"
  },
];
const column = [
  {
    title: "DICR NO",
    dataIndex: "dicrno",
    key: "dicrno",
  },
  {
    title: "DATE RECEIVED",
    dataIndex: "datereceive",
    key: "datereceive",
  },
  {
    title: "DOC NO/ DOC TITLE",
    dataIndex: "docno",
    key: "docno",
  },
  {
    title: "REQUESTED BY",
    dataIndex: "requestedby",
    key: "requestby",
  },
  {
    title: "ACTION TAKEN",
    dataIndex: "actiontaken",
    key: "actiontaken",
  },
  {
    title: "DATE COMPLETED",
    dataIndex: "datecompleted",
    key: "datecompleted",
  },
];

const DicrRegistrationAndMonitoringFormPage = () => {
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
       <ReviewDicrDrawer visible={visible} onClose={onClose} />
    </>
  );
};

export default DicrRegistrationAndMonitoringFormPage;
