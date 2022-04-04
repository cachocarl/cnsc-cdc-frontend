import React, { useContext } from "react";
import { Input, Button, PageHeader, Table, Tag, Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import NavigatorContext from "../../../../service/context/NavigatorContext";
import useDrawerVisibility from "../../../../service/hooks/useDrawerVisibility";
import UserExternalDrawer from "../../../component/drawers/externalDrawer/user/UserExternalDrawer";

const dataSource = [
  {
    docinfotitle: "JEYSI CHECKS#1",
    namereq: "Jeysi",
    counit: "ICS",
    status: "Approved",
  },
  {
    docinfotitle: "CRAL CHECKS#1",
    namereq: "Cral",
    counit: "Alumni Affairs Office",
    status: "Registered",
  },
  {
    docinfotitle: "RAMIL CHECKS#1",
    namereq: "Ramil",
    counit: "Alumni Affairs Office",
    status: "Registered",
  },
];

const column = [
  {
    title: "Name of Requestor",
    dataIndex: "namereq",
    key: "namereq",
    width: 450,
  },
  {
    title: "Document Information Title",
    dataIndex: "docinfotitle",
    key: "docinfotitle",
  },
  {
    title: "College/Unit",
    dataIndex: "counit",
    key: "counit",
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

const ExternalDocumentPage = () => {
  const { add, /*edit,*/ view } = useDrawerVisibility();

  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("user-external-documents");

  return (
    <>
      <PageHeader
        title="List of My External Document Request"
        //subTitle="View List of my Request"
        extra={[
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => add.setVisible(true)}
          >
            Initiate New Request
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
        />
      </div>

      <UserExternalDrawer.CreateExternalDrawer
        visible={add.visible}
        onClose={() => add.setVisible(false)}
      ></UserExternalDrawer.CreateExternalDrawer>

      <UserExternalDrawer.ViewExternalDrawer
        visible={view.visible}
        onClose={() => view.setVisible(false)}
      ></UserExternalDrawer.ViewExternalDrawer>
    </>
  );
};

export default ExternalDocumentPage;
