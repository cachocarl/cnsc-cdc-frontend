import React, { useContext } from "react";
import { PageHeader, Input, Table, /*DatePicker,*/ Row, Col } from "antd";
import NavigatorContext from "../../../../service/context/NavigatorContext";

//const { Search } = Input;

//const { RangePicker } = DatePicker;

const column = [
  {
    title: "College/Department/Office/Unit",
    dataIndex: "cdou",
    key: "cdou",
  },
  {
    title: "Type of Record",
    dataIndex: "typerec",
    key: "typerec",
  },
  {
    title: "Year Generated",
    dataIndex: "year",
    key: "year",
  },
  {
    title: "Confidential",
    dataIndex: "confi",
    key: "confi",
  },
];

const ArchivePage = () => {
  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("archive");

  return (
    <>
      <div className="base-container">
        <PageHeader title="Archived Documents"></PageHeader>
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

export default ArchivePage;
