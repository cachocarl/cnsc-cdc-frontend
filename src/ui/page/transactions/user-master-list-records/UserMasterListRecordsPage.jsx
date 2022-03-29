import { PageHeader, Table, Input, Row, Col } from "antd";
import React from "react";
import { useContext } from "react/cjs/react.development";
import NavigatorContext from "../../../../service/context/NavigatorContext";

const column = [
  {
    title: "RECORD/FILE CODE",
    dataIndex: "revdate",
    key: "revdate",
  },
  {
    title: "RECORD/FILENAME",
    dataIndex: "rev",
    key: "rev",
    width: "20%",
  },
  {
    title: "FORMAT (E/P)",
    dataIndex: "pagerev",
    key: "pagerev",
  },
  {
    title: "TYPE (C/NC)",
    dataIndex: "disrev",
    key: "disrev",
  },
  {
    title: "ACTIVE PERIOD (yrs)",
    dataIndex: "effectdate",
    key: "effectdate",
  },
  {
    title: "ACTIVE LOCATION",
    dataIndex: "effectdate",
    key: "effectdate",
  },
  {
    title: "RET'N PERIOD (yrs)",
    dataIndex: "effectdate",
    key: "effectdate",
  },
  {
    title: "ARCHIVE LOCATION",
    dataIndex: "effectdate",
    key: "effectdate",
  },
  {
    title: "REMARKS",
    dataIndex: "effectdate",
    key: "effectdate",
  },
];

const UserMasterListRecordsPage = () => {
  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("user-master-list-records");
  return (
    <>
      <div className="base-container">
        <PageHeader title="Master List of Records"></PageHeader>

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
          footer={(c) =>
            "Legends: E - Electronic Copy  P- Printed  C - Confidential NC- Not Confidential"
          }
        />
      </div>
    </>
  );
};

export default UserMasterListRecordsPage;
