import {
  PageHeader,
  Table,
  Input,
  Row,
  Col,
  Space,
  Tooltip,
  Button,
  Popconfirm,
} from "antd";
import { FileZipOutlined } from "@ant-design/icons";
import { useContext } from "react/cjs/react.development";
import NavigatorContext from "../../../../service/context/NavigatorContext";
const dataSource = [
  {
    namereq: "Carl Lawrence Cacho",
    docinfotitle: "Sample Documented Information Change Request # 1",
    docinfono: "Sample #1",
    year: "2022",
  },
  {
    namereq: "Ramil Rana",
    docinfotitle: "Sample Documented Information Change Request # 2",
    docinfono: "Sample #2",
    year: "2022",
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
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,

    render: () => (
      <Space>
        <Popconfirm title="Sure na yarn?">
          <Tooltip title="Archive">
            <Button danger icon={<FileZipOutlined />} />
          </Tooltip>
        </Popconfirm>
      </Space>
    ),
  },
];

const MasterListRecordsPage = () => {
  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("cdc-master-list-of-records");
  return (
    <>
      <div className="base-container">
        <PageHeader title="Master List of Records"></PageHeader>

        <Table
          bordered
          columns={column}
          dataSource={dataSource}
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

export default MasterListRecordsPage;
