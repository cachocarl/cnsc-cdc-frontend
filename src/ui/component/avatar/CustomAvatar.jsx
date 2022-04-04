import React from "react";
import { Avatar, Button, Dropdown, Menu, Space, Typography } from "antd";
import { LogoutOutlined } from "@ant-design/icons/lib/icons";
import { useSessionStorageState } from "ahooks";

const avatarMenu = (
  <Menu>
    <Menu.Item key="logout" danger>
      <LogoutOutlined /> Logout
    </Menu.Item>
  </Menu>
);

const CustomAvatar = () => {
  const [userInfo, setUserInfo] = useSessionStorageState("user");
  return (
    <Dropdown
      arrow
      placement="bottomCenter"
      overlay={avatarMenu}
      trigger={["click"]}
    >
      <Button type="text" style={{ height: "100%" }}>
        <Space size="small">
          <Avatar>A</Avatar>
          <Typography.Text strong>{userInfo._user.username}</Typography.Text>
        </Space>
      </Button>
    </Dropdown>
  );
};

export default CustomAvatar;
