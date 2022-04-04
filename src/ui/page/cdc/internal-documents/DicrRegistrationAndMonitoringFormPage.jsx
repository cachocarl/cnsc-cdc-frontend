import { Table, Input, Row, Col } from "antd";
import React from "react";
import InternalUserDrawer from "../../../component/drawer/userDrawer/InternalUserDrawer";

const dataSource = [
  {
    dicrno: "DICR-001",
    datereceive: "03/09/2022",
    docno: "Sample Documented Information Change Request Title",
    requestedby: "Gerald Mesa",
    actiontaken: "Approved",
    datecompleted: "November 26, 2021",
  },
  {
    dicrno: "DICR-002",
    datereceive: "03/09/2022",
    docno: "Sample Documented Information Change Request Title",
    requestedby: "Ramil Rana",
    actiontaken: "Approved",
    datecompleted: "December 04, 2021",
  },
  {
    dicrno: "DICR-003",
    datereceive: "03/09/2022",
    docno: "Sample Documented Information Change Request Title",
    requestedby: "Cris Jimenez",
    actiontaken: "--",
    datecompleted: "--",
  },
  {
    dicrno: "DICR-004",
    datereceive: "03/09/2022",
    docno: "Sample Documented Information Change Request Title",
    requestedby: "Edmond Esmalla",
    actiontaken: "--",
    datecompleted: "--",
  },
  {
    dicrno: "DICR-0015",
    datereceive: "03/09/2022",
    docno: "Sample Documented Information Change Request Title",
    requestedby: "David Abanto",
    actiontaken: "--",
    datecompleted: "--",
  },
];
const column = [
  {
    title: "DICR No",
    dataIndex: "dicrno",
    key: "dicrno",
  },
  {
    title: "Date Received",
    dataIndex: "datereceive",
    key: "datereceive",
  },
  {
    title: "Doc No/ Doc Title",
    dataIndex: "docno",
    key: "docno",
  },
  {
    title: "Requested By",
    dataIndex: "requestedby",
    key: "requestby",
  },
  {
    title: "Action Taken",
    dataIndex: "actiontaken",
    key: "actiontaken",
  },
  {
    title: "Date Completed",
    dataIndex: "datecompleted",
    key: "datecompleted",
  },
];

const DicrRegistrationAndMonitoringFormPage = () => {
  const [editVisible, setEditVisible] = React.useState(false);

  return (
    <>
      <Table
        bordered
        columns={column}
        dataSource={dataSource}
        onRow={(record, rowIndex) => {
          return {
            onDoubleClick: (event) => {
              setEditVisible(true);
            }, // double click row
          };
        }}
        scroll={{ x: 1200 }}
        title={(c) => {
          return (
            <Input.Group>
              <Row justify="space-between">
                <Col span={12}>
                  <Input.Search addonBefore="COLLEGE/DEPARTMENT/OFFICE:" />
                </Col>
                <Col>
                  <Input.Search addonBefore="As of:" />
                </Col>
              </Row>
            </Input.Group>
          );
        }}
      />
      <InternalUserDrawer.Edit
        visible={editVisible}
        onClose={() => setEditVisible(false)}
      />
    </>
  );
};

export default DicrRegistrationAndMonitoringFormPage;
