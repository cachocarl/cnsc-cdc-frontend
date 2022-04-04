import {
  PageHeader,
  Table,
  Input,
  Row,
  Col,
  Space,
  Tooltip,
  Button,
} from "antd";
import { EditOutlined } from "@ant-design/icons";
import React from "react";
import { useContext } from "react/cjs/react.development";
import NavigatorContext from "../../../../service/context/NavigatorContext";
import { PlusOutlined } from "@ant-design/icons";
import useDrawerVisibility from "../../../../service/hooks/useDrawerVisibility";
import UserRdiDrawer from "../../../component/drawers/rdiDrawer/user/UserRdiDrawer";

const dataSource = [
  {
    filecode: "CNSC-PM-QMS-01",
    filename: "Policy Manual (QMS)",
    docformat: "p",
    doctype: "NC",
    activeperiod: "3",
    activelocation: "Motorpool",
    retnperiod: "N/A",
    archiveloc: "N/A",
    remarks: "N/A",
  },
  {
    filecode: "CNSC-SP-QMS-01",
    filename: "Document Information Change Request-DICR",
    docformat: "E",
    doctype: "C",
    activeperiod: "sample date",
    activelocation: "sample location",
    retnperiod: "sample ret'nperiod",
    archiveloc: "sample archive",
    remarks: "astig",
  },
];
const column = [
  {
    title: "RECORD/FILE CODE",
    dataIndex: "filecode",
    key: "filecode",
  },
  {
    title: "RECORD/FILENAME",
    dataIndex: "filename",
    key: "filename",
    width: "20%",
  },
  {
    title: "FORMAT (E/P)",
    dataIndex: "docformat",
    key: "docformat",
  },
  {
    title: "TYPE (C/NC)",
    dataIndex: "doctype",
    key: "doctype",
  },
  {
    title: "ACTIVE PERIOD (yrs)",
    dataIndex: "activeperiod",
    key: "activeperiod",
  },
  {
    title: "ACTIVE LOCATION",
    dataIndex: "activelocation",
    key: "activelocation",
  },
  {
    title: "RET'N PERIOD (yrs)",
    dataIndex: "retnperiod",
    key: "retnperiod",
  },
  {
    title: "ARCHIVE LOCATION",
    dataIndex: "archiveloc",
    key: "archiveloc",
  },
  {
    title: "REMARKS",
    dataIndex: "remarks",
    key: "remarks",
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,

    render: () => (
      <Space>
        <Tooltip title="Edit">
          <Button
            onClick={<UserRdiDrawer.ViewRdiDrawer />}
            icon={<EditOutlined />} /**/
          />
        </Tooltip>
      </Space>
    ),
  },
];

const UserMasterListRecordsPage = () => {
  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("user-master-list-records");
  const { add, view /*edit*/ } = useDrawerVisibility();
  return (
    <>
      <PageHeader
        title="Master List of Records"
        extra={[
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => add.setVisible(true)}
          >
            Add Item
          </Button>,
        ]}
      ></PageHeader>
      <div className="base-container">
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
          footer={(c) =>
            "Legends: E - Electronic Copy  P- Printed  C - Confidential NC- Not Confidential"
          }
        />
      </div>
      <UserRdiDrawer.CreateRdiDrawer
        visible={add.visible}
        onClose={() => add.setVisible(false)}
      ></UserRdiDrawer.CreateRdiDrawer>
      <UserRdiDrawer.ViewRdiDrawer
        visible={view.visible}
        onClose={() => view.setVisible(false)}
      ></UserRdiDrawer.ViewRdiDrawer>
    </>
  );
};

export default UserMasterListRecordsPage;
