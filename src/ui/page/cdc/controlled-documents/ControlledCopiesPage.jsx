import React, { useContext } from "react";
import NavigatorContext from "../../../../service/context/NavigatorContext";
import {
  PageHeader,
  Input,
  //DatePicker,
  Space,
  Tooltip,
  Button,
  Table,
  Row,
  Col,
} from "antd";
import { CheckCircleOutlined, EyeOutlined } from "@ant-design/icons";
import CdcRdiDrawer from "../../../component/drawers/rdiDrawer/cdc/CdcRdiDrawer";
import useDrawerVisibility from "../../../../service/hooks/useDrawerVisibility";

//const { Search } = Input;

//const { RangePicker } = DatePicker;

const dataSource = [
  {
    namereq: "Carl Lawrence Cacho",
    docinfotitle: "Sample Documented Information Change Request # 1",
    docinfono: "Sample #1",
    college: "Graduate School",
  },
];
const column = [
  {
    title: "Requestor",
    dataIndex: "namereq",
    key: "namereq",
  },
  {
    title: "Document Information Title",
    dataIndex: "docinfotitle",
    key: "docinfotitle",
  },
  {
    title: "Document Information Number",
    dataIndex: "docinfono",
    key: "docinfono",
  },
  {
    title: "College",
    dataIndex: "college",
    key: "college",
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,

    render: () => (
      <Space>
        <Tooltip title="View Request">
          <Button icon={<EyeOutlined />} />
        </Tooltip>
        <Tooltip title="Register Request">
          <Button icon={<CheckCircleOutlined />} />
        </Tooltip>
      </Space>
    ),
  },
];

const ControlledCopiesPage = () => {
  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("cdc-controlled-documents");

  const { view } = useDrawerVisibility();

  return (
    <>
      <div className="base-container">
        <PageHeader title="List of Request" subTitle="Controlled Documents" />

        <Table
          bordered
          columns={column}
          dataSource={dataSource}
          onRow={(record) => {
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
      <CdcRdiDrawer.CdcListRdiDrawer
        visible={view.visible}
        onClose={() => view.setVisible(false)}
      />
    </>
  );
};

export default ControlledCopiesPage;
