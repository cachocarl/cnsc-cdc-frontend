import React from "react";
import { Input, Button, DatePicker, Table, Space, Tooltip } from "antd";
import { CheckCircleOutlined, EyeOutlined } from "@ant-design/icons";
import CdcInternalDrawer from "../../../component/drawers/internalDrawer/cdc/CdcInternalDrawer";
import useDrawerVisibility from "../../../../service/hooks/useDrawerVisibility";

const { Search } = Input;
const { RangePicker } = DatePicker;

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
  {
    namereq: "Royeen Lagumen",
    docinfotitle: "Sample Documented Information Change Request # 3",
    docinfono: "Sample #3",
    year: "2022",
  },
  {
    namereq: "Juan Carlos Sendon",
    docinfotitle: "Sample Documented Information Change Request # 4",
    docinfono: "Sample #4",
    year: "2022",
  },
  {
    namereq: "Adrian Rodriguez",
    docinfotitle: "Sample Documented Information Change Request # 5",
    docinfono: "Sample #5",
    year: "2022",
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

const ListRequestPage = () => {
  const { add /*edit, view*/ } = useDrawerVisibility();
  return (
    <>
      <div className="base-container">
        <Space>
          <Search
            placeholder="input search text"
            style={{ width: 250, margin: 18 }}
            allowClear
          />
          <RangePicker picker="year" />
        </Space>
        <br />
        <Table
          columns={column}
          dataSource={dataSource}
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
