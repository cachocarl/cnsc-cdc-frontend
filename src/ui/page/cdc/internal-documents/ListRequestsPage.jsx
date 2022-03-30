import React from "react";
import {
  Input,
  Button,
  DatePicker,
  Table,
  Space,
  Tooltip,
  notification,
  Tag,
} from "antd";
import { CheckCircleOutlined, EyeOutlined } from "@ant-design/icons";
import CdcInternalDrawer from "../../../component/drawers/internalDrawer/cdc/CdcInternalDrawer";
import useDrawerVisibility from "../../../../service/hooks/useDrawerVisibility";
import { DicrInitiationAPI } from "../../../../data/call/Resource";
import moment from "moment";

const { Search } = Input;
const { RangePicker } = DatePicker;

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
    title: "Year Made",
    dataIndex: "year",
    key: "year",
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

const columns = [
  {
    title: "Requestor",
    dataIndex: "_user_info",
    key: "_user_info",
    render: (data, record) => {
      return data.first_name + " " + data.middle_name + " " + data.last_name;
    },
  },
  {
    title: "Document Information Title",
    dataIndex: "req_info_title",
    key: "req_info_title",
  },
  {
    title: "Document Information Number",
    dataIndex: "req_info_number",
    key: "req_info_number",
  },
  /*  {
    title: "Office",
    dataIndex: "_office",
    key: "_office",
     render: (data, record) => {
      return data.description;
    }, 
  }, */
  {
    title: "Description",
    dataIndex: "req_description",
    key: "req_description",
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

const ListRequestPage = () => {
  const { add /*edit, view*/ } = useDrawerVisibility();
  const [dicrTableData, setDicrTableData] = React.useState([]);
  const [loadingDicrTable, setLoadingDicrTable] = React.useState(false);

  React.useEffect(() => {
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
  }, []);

  return (
    <>
      <div className="base-container">
        <Space>
          <Search
            placeholder="Search for a request"
            style={{ width: 250, margin: 18 }}
            allowClear
          />
          <RangePicker picker="year" />
        </Space>
        <br />
        <Table
          style={{ margin: 20 }}
          columns={columns}
          dataSource={dicrTableData}
          onRow={(record, rowIndex) => {
            return {
              onDoubleClick: (event) => {
                add.setVisible(true);
              }, // double click row
            };
          }}
        />

        <CdcInternalDrawer.ListRequestDrawer
          visible={add.visible}
          onClose={() => add.setVisible(false)}
        ></CdcInternalDrawer.ListRequestDrawer>
      </div>
    </>
  );
};

export default ListRequestPage;
