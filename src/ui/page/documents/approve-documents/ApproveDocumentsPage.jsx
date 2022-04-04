import React, { useContext } from "react";
import {
  PageHeader,
  Table,
  Input,
  /*Space, DatePicker,*/ Row,
  Col,
} from "antd";
import NavigatorContext from "../../../../service/context/NavigatorContext";

//const { Search } = Input;

//const { RangePicker } = DatePicker;

const column = [
  {
    title: "Document Information Title",
    dataIndex: "D",
    key: "docuinfotitle",
  },
  {
    title: "Document Type",
    dataIndex: "asade",
    key: "docutype",
  },
  {
    title: "Date Initiated",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Status",
    dataIndex: "address",
    key: "status",
  },
];

const ApproveDocumentsPage = () => {
  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("approve-documents");
  return (
    <>
      <div className="base-container">
        <PageHeader title="Approved Documents"></PageHeader>

        <Table
          bordered
          columns={column}
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
    </>
  );
};

export default ApproveDocumentsPage;
