import React from 'react'
import {
    Drawer,
    Form,
    Button,
    Col,
    Row,
    Input,
    Select,
    DatePicker,
    Space,
    Typography,
    Modal,
    Divider,
  } from "antd";
  
  import { ExclamationCircleOutlined } from "@ant-design/icons";
  import moment from "moment";

    const { confirm } = Modal;

    const { Option } = Select;

    const dateFormat = "YYYY-MM-DD";

    const { Title } = Typography;


const ReqDocInfoDrawer = ({visible, onClose}) => {
    function showConfirm() {
        confirm({
          title: "Submit Request?",
          icon: <ExclamationCircleOutlined />,
          content:
            "Submitting your request will forward it to CDC for further processing",
          onOk() {
            console.log("OK");
            onClose();
          },
          onCancel() {
            console.log("Cancel");
          },
        });
      }
      return (
        <Drawer
          title="Initiate Documented Information Request"
          placement="right"
          size="large"
          visible={visible}
          closable={true}
          onClose={onClose}
          width={"850px"}
          extra={
            <Space>
              <Button type="primary" onClick={showConfirm}>
                Submit Request
              </Button>
            </Space>
          }
        >
          <Form layout="vertical">
            {/* 1st Row */}
    
            <Row gutter={16}>
            <Col span={8}>
                <Form.Item
                  name="name"
                  label="Requested By:"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="proposedDate"
                  label="Date Requested (Current Date):"
                  rules={[{ required: false }]}
                >
                  <DatePicker
                    defaultValue={moment("2022-03-04", dateFormat)}
                    disabled
                    style={{ width: 255 }}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="name"
                  label="DICR Number (For Registration)"
                  rules={[{ required: false }]}
                >
                  <Input disabled={true} />
                </Form.Item>
              </Col>
            </Row>
    
            {/* 2nd Row */}
    
            <Row gutter={16}>
              <Col span={16}>
                <Form.Item
                  name="dct"
                  label="Requested From (College/Unit):"
                  rules={[{ required: true, message: "Please choose" }]}
                >
                  <Select placeholder="Choose here">
                    <Option value="policy">ICS</Option>
                    <Option value="procedure">CBPA</Option>
                    <Option value="procedure">Engineering</Option>
                    <Option value="procedure">CBPA</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="numcopies"
                  label="Number of Copies:"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
    
              <Divider></Divider>
          <Title level={4}>Document Information</Title>
          <br></br>
            </Row>
    
            <Row gutter={16}>
            <Col span={8}>
                <Form.Item
                  name="name"
                  label="Documented Information No."
                  rules={[{ required: false }]}
                >
                  <Input disabled={true} />
                </Form.Item>
              </Col>
    
              <Col span={16}>
                <Form.Item
                  name="name"
                  label="Title:"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Please type your Document Information Title" />
                </Form.Item>
              </Col>
            </Row>
            
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="description"
                  label="Description and Purpose of Documentation Request"
                  rules={[
                    {
                      required: false,
                      message: "Please ",
                    },
                  ]}
                >
                  <Input.TextArea
                    rows={4}
                    placeholder="Please enter your description and purpose of documentation request here"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
      );
    };

export default ReqDocInfoDrawer