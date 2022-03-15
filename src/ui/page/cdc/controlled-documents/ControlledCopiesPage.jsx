import React, { useContext } from 'react'
import NavigatorContext from "../../../../service/context/NavigatorContext";
import { PageHeader, Input, DatePicker, Space, Tooltip, Button, Table } from "antd";
import { CheckCircleOutlined, EyeOutlined } from "@ant-design/icons";
import ListRequestDrawer from '../../../component/drawer/ListRequestDrawer';

const { Search } = Input;

const { RangePicker } = DatePicker;

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

    const [visible, setVisible] = React.useState(false);

    const showDrawer = () => {
      setVisible(true);
    };
  
    const onClose = () => {
      setVisible(false);
    };
  return (
      <>
    <PageHeader title="List of Request" subTitle="Controlled Documents" />
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
          onRow={(record) => {
            return {
              onDoubleClick: (event) => {
                showDrawer();
              }, // double click row
            };
          }}
        />
      </div>
      <ListRequestDrawer visible={visible} onClose={onClose} />
    </>
  )
}

export default ControlledCopiesPage