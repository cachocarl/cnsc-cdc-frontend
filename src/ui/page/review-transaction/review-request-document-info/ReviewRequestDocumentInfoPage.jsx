import React, { useContext } from "react";
import { Input, PageHeader, Table, Tag, Row, Col } from "antd";
import NavigatorContext from "../../../../service/context/NavigatorContext";
import ReqDocInfoDrawer from "../../../component/drawer/userDrawer/ReqDocInfoDrawer";

const dataSource = [
  {
    docinfotitle: "Registration and Monitoring Form Rev.0",
    docutype: "CNSC-SP-QMS-01F2-DICR",
    dateinitiated: "Feburary 14, 2022",
    status: "Approved",
  },
  {
    docinfotitle: "Documented Info. Change Request DICR Rev.0",
    docutype: "CNSC-SP-QMS-01F1",
    dateinitiated: "Feburary 25, 2022",
    status: "Registered",
  },
  {
    docinfotitle: "Master List of Internal Documented Information Rev.0",
    docutype: "CNSC-SP-QMS-01F3",
    dateinitiated: "March 07, 2022",
    status: "Registered",
  },
];

const column = [
  {
    title: "Document Type",
    dataIndex: "docutype",
    key: "docutype",
  },
  {
    title: "Document Information Title",
    dataIndex: "docinfotitle",
    key: "docuinfotitle",
    width: 450,
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

const ReviewRequestDocumentInfoPage = () => {
  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("review-request-document-info");

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
          title="List of My Request for Documented Information"
          subTitle="View List of my Request"
        ></PageHeader>
        <br></br>
        <Table
          bordered
          columns={column}
          dataSource={dataSource}
          onRow={(record, rowIndex) => {
            return {
              onDoubleClick: (event) => {
                showDrawer();
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
      </div>

      <ReqDocInfoDrawer visible={visible} onClose={onClose} />
    </>
  );
};

export default ReviewRequestDocumentInfoPage;
