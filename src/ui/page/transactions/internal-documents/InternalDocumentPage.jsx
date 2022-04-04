import React, { useContext } from "react";
import {
  Input,
  notification,
  Button,
  PageHeader,
  Table,
  Tag,
  Space,
  Col,
  Row,
} from "antd";
import { PlusOutlined, ReloadOutlined } from "@ant-design/icons";
import NavigatorContext from "../../../../service/context/NavigatorContext";
import useDrawerVisibility from "../../../../service/hooks/useDrawerVisibility";
import UserInternalDrawer from "../../../component/drawers/internalDrawer/user/UserInternalDrawer";
import { DicrInitiationAPI } from "../../../../data/call/Resource";
import moment from "moment";

const { Search } = Input;

const column = [
  {
    title: "Document Information Title",
    dataIndex: "req_info_title",
    key: "req_info_title",
  },
  {
    title: "Document Type",
    dataIndex: "_info_type",
    key: "_info_type",
    onFilter: (value, record) => record.req_info_type.indexOf(value) === 0,
    sorter: (a, b) => a.req_info_type.length - b.req_info_type.length,
    sortDirections: ["ascend"],
    render: (data, record) => {
      if (data.type === "Policy") {
        return <Tag color="green">{data.type}</Tag>;
      } else if (data.type === "Procedure") {
        return <Tag color="blue">{data.type}</Tag>;
      }
    },
  },
  {
    title: "Date Initiated",
    dataIndex: "created_at",
    key: "created_at",
    render: (data, record) => {
      return moment(data).format("MMMM Do YYYY");
    },
  },
  {
    title: "Status",
    dataIndex: "_request_status",
    key: "_request_status",
    render: (data, record) => {
      if (data.status === "Registered") {
        return <Tag color="blue">{data.status}</Tag>;
      } else if (data.status === "Unregistered") {
        return <Tag color="geekblue">{data.status}</Tag>;
      }
    },
  },
];

const InternalDocumentPage = () => {
  const { add, /*edit,*/ view } = useDrawerVisibility();
  const [dicrTableData, setDicrTableData] = React.useState([]);
  const [loadingDicrTable, setLoadingDicrTable] = React.useState(false);
  const navigatorContext = useContext(NavigatorContext);
  navigatorContext.setSelectedKey("user-internal-documents");

  const _refreshDicrTable = () => {
    setLoadingDicrTable(true);
    DicrInitiationAPI.retrieveList()
      .then((res) => {
        setDicrTableData(res.data);
        setLoadingDicrTable(false);
      })
      .catch((err) => {
        notification.error({
          message: "An error has occured",
        });
      });
  };

  return (
    <>
      <PageHeader
        title="List of My Documented Information Change Request "
        //subTitle="View List of my Request"
      ></PageHeader>

      <div className="base-container">
        <Row justify="space-between">
          <Col>
            <Search
              placeholder="Search Document Title"
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
              onClick={_refreshDicrTable}
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
              Initiate New Request
            </Button>
          </Col>
        </Row>
        <br></br>
        <Table
          style={{ margin: 20 }}
          columns={column}
          dataSource={dicrTableData}
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

        <UserInternalDrawer.Add
          visible={add.visible}
          onClose={() => add.setVisible(false)}
        ></UserInternalDrawer.Add>

        <UserInternalDrawer.View
          visible={view.visible}
          onClose={() => view.setVisible(false)}
        ></UserInternalDrawer.View>
      </div>
    </>
  );
};

export default InternalDocumentPage;
