import React, { useContext } from "react";
import { Input, PageHeader, Table, Row, Col } from "antd";
import NavigatorContext from "../../../../service/context/NavigatorContext";
import useDrawerVisibility from "../../../../service/hooks/useDrawerVisibility";
import ApprovingInternalDrawer from "../../../component/drawers/internalDrawer/approving/ApprovingInternalDrawer";

const dataSource = [
  {
    dicrno: "DICR-001",
    namereq: "Crispy Jeysi",
    docinfono: "CNSC-SP-QMS-01F1",
    docinfotitle: "Internal Documentation Change Request",
    year: "2022",
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
  const { /*add, edit,*/ view } = useDrawerVisibility();

  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("approve-internal-documents");

  return (
    <>
      <div className="base-container">
        <PageHeader
          title="List of Documented Information Change Request for Approval"
          //subTitle="View List of my Request"
        ></PageHeader>
        <br></br>
        <Table
          bordered
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

      <ApprovingInternalDrawer.ApproveDrawer
        visible={view.visible}
        onClose={() => view.setVisible(false)}
      ></ApprovingInternalDrawer.ApproveDrawer>
    </>
  );
};

export default ApproveInternalDocumentPage;
