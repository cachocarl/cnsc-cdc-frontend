import React from "react";
import {
  Row,
  Tooltip,
  Space,
  Button,
  Input,
  Table,
  Col,
  Typography,
  notification,
} from "antd";
import {
  PlusOutlined,
  ReloadOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import useDrawerVisibility from "../../../service/hooks/useDrawerVisibility";
import Column from "antd/lib/table/Column";
import DocInfoTypeDrawer from "../../component/drawers/systemAdministration/DocumentType/DocInfoType/DocInfoTypeDrawer";
import NatureRequestDrawer from "../../component/drawers/systemAdministration/NatureRequest/NatureRequestDrawer";
import { RequestNatureAPI, InfoTypeAPI } from "../../../data/call/Resource";

const { Search } = Input;
const infoColumn = [
  {
    title: "Document Information Type",
    dataIndex: "type",
    key: "nature",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
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

const natureColumn = [
  {
    title: "Request Nature",
    dataIndex: "nature",
    key: "nature",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
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

const DocumentTypePage = () => {
  const { add, edit } = useDrawerVisibility();
  const [infoTableData, setInfoTableData] = React.useState([]);
  const [natureTableData, setNatureTableData] = React.useState([]);
  const [loadingNatureTable, setLoadingNatureTable] = React.useState(false);
  const [loadingInfoTable, setLoadingInfoTable] = React.useState(false);

  const _refreshNatureTable = () => {
    setLoadingNatureTable(true);
    RequestNatureAPI.retrieveList()
      .then((res) => {
        setNatureTableData(res.data);
        setLoadingNatureTable(false);
      })
      .catch((err) => {
        notification.error({
          message: "An error has occured",
        });
      });
  };

  const _refreshInfoTable = () => {
    setLoadingInfoTable(true);
    InfoTypeAPI.retrieveList()
      .then((res) => {
        setInfoTableData(res.data);
        setLoadingInfoTable(false);
      })
      .catch((err) => {
        notification.error({
          message: "An error has occured",
        });
      });
  };

  return (
    <>
      <div className="base-container">
        <Typography.Title style={{ marginLeft: 20, marginTop: 20 }} level={4}>
          Document Information Type
        </Typography.Title>
        <Row justify="space-between">
          <Col>
            <Search
              placeholder="Search Document Type"
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
              onClick={_refreshInfoTable}
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
              onClick={() => edit.setVisible(true)}
              style={{
                marginLeft: 10,
                marginTop: 20,
                marginRight: 20,
                marginBottom: 10,
              }}
            >
              Add New Doc. Info. Type
            </Button>
          </Col>
        </Row>
        <br></br>
        <Table
          style={{ margin: 20, marginTop: 5 }}
          dataSource={infoTableData}
          columns={infoColumn}
          loading={loadingInfoTable}
        ></Table>
      </div>

      <div className="base-container">
        <Typography.Title style={{ marginLeft: 20, marginTop: 20 }} level={4}>
          Nature of Request
        </Typography.Title>
        <Row justify="space-between">
          <Col>
            <Search
              placeholder="Search Nature of Request"
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
              onClick={_refreshNatureTable}
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
              Add New Nature of Request
            </Button>
          </Col>
        </Row>

        <br></br>
        <Table
          style={{ margin: 20, marginTop: 5 }}
          columns={natureColumn}
          dataSource={natureTableData}
          loading={loadingNatureTable}
        ></Table>
      </div>

      <NatureRequestDrawer.AddRequestDrawer
        visible={add.visible}
        onClose={() => add.setVisible(false)}
      />
      <DocInfoTypeDrawer.AddDocTypeDrawer
        visible={edit.visible}
        onClose={() => edit.setVisible(false)}
      />
    </>
  );
};

export default DocumentTypePage;
