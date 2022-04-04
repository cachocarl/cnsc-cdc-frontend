import React, { useContext } from "react";
import { Input, PageHeader, Table, Row, Col } from "antd";
import NavigatorContext from "../../../../service/context/NavigatorContext";
import useDrawerVisibility from "../../../../service/hooks/useDrawerVisibility";
import ApprovingRdiDrawer from "../../../component/drawers/rdiDrawer/approving/ApprovingRdiDrawer";

const dataSource = [
  {
    rdino: "RDI - 001",
    requestor: "Ramil Raul",
    docinfono: "CNSC-SP-QMS-01F2-DICR",
    docinfotitle: "Sample",
  },
];

const column = [
  {
    title: "RDI Number",
    dataIndex: "rdino",
    key: "rdino",
  },

  {
    title: "Requestor",
    dataIndex: "requestor",
    key: "requestor",
  },
  {
    title: "Document Information Number",
    dataIndex: "docinfono",
    key: "docinfono",
    width: 450,
  },
  {
    title: "Document Information Title",
    dataIndex: "docinfotitle",
    key: "docuinfotitle",
    width: 450,
  },
];

const ApproveRequestDocumentInfoPage = () => {
  const { view } = useDrawerVisibility();

  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("approve-request-document-info");
  return (
    <>
      <div className="base-container">
        <PageHeader
          title="List of Approve Forms Requests"
          subTitle="View List of my Request"
        ></PageHeader>
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

      <ApprovingRdiDrawer.RdiApproveDrawer
        visible={view.visible}
        onClose={() => view.setVisible(false)}
      ></ApprovingRdiDrawer.RdiApproveDrawer>
    </>
  );
};

export default ApproveRequestDocumentInfoPage;
