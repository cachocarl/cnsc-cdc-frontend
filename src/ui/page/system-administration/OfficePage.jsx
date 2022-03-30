import React from "react";
import {
  Button,
  Table,
  Row,
  Col,
  Typography,
  notification,
  Divider,
  Input,
  Tooltip,
  Space,
} from "antd";
import {
  PlusOutlined,
  ReloadOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import Column from "antd/lib/table/Column";
import useDrawerVisibility from "../../../service/hooks/useDrawerVisibility";
import OfficeDrawer from "../../component/drawers/systemAdministration/office.jsx/OfficeDrawer";
import APP_CONFIG from "../../../data/static/config";
import { OfficeAPI } from "../../../data/call/Resource";

const { Search } = Input;

const column = [
  {
    title: "Code",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Head",
    dataIndex: "head",
    key: "head",
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,

    render: () => (
      <Space>
        <Tooltip title="Edit">
          <Button icon={<EditOutlined />} />
        </Tooltip>
        <Tooltip title="Delete">
          <Button icon={<DeleteOutlined />} />
        </Tooltip>
      </Space>
    ),
  },
];

//code, name, head
const OfficePage = () => {
  const { add } = useDrawerVisibility();
  const [tableData, setTableData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const _handleButton = () => {
    setLoading(true);
    OfficeAPI.retrieveList()
      .then((res) => {
        setTableData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        notification.error({
          message: "An error has occured",
        });
        setLoading(false);
      });
  };

  //https://localhost:8000/api/office/list?search=jo
  //PROMISE, async and await

  return (
    <>
      <div className="base-container">
        <Typography.Title style={{ marginLeft: 20, marginTop: 20 }} level={4}>
          College/Office/Unit
        </Typography.Title>
        <Row justify="space-between">
          <Col>
            <Search
              placeholder="Search Office"
              allowClear
              size="medium"
              style={{ marginLeft: 20, marginTop: 20 }}
              //onSearch={onSearch}
            />
          </Col>
          <Col>
            <Button
              type="default"
              icon={<ReloadOutlined />}
              onClick={_handleButton}
              style={{
                marginLeft: 10,
                marginTop: 20,
                marginRight: 20,
                marginBottom: 10,
              }}
            >
              Refresh
            </Button>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => add.setVisible(true)}
              style={{
                marginLeft: 10,
                marginTop: 20,
                marginRight: 20,
                marginBottom: 10,
              }}
            >
              Add New Office
            </Button>
          </Col>
        </Row>
        <br></br>
        <Table
          columns={column}
          dataSource={tableData}
          loading={loading}
          style={{ margin: 20, marginTop: 5 }}
        />
        <OfficeDrawer.AddOfficeDrawer
          visible={add.visible}
          onClose={() => add.setVisible(false)}
          style={{ margin: 10 }}
        />
      </div>
    </>
  );
};

export default OfficePage;
