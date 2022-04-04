import React from "react";
import { Table } from "antd";

const column = [
  {
    title: "MANAGEMENT SYSTEM DOCUMENTS",
    dataIndex: "mgmntsysdoc",
    key: "mgmntsysdoc",
  },
  {
    title: "YYYY",
    children: [
      {
        title: "Q1",
        dataIndex: "q1",
        key: "q1",
      },
      {
        title: "Q2",
        dataIndex: "q2",
        key: "q2",
      },
      {
        title: "Q3",
        dataIndex: "q3",
        key: "q3",
      },
      {
        title: "Q4",
        dataIndex: "q4",
        key: "q4",
      },
    ],
  },
];

const ScheduleAndMonitoringPage = () => {
  return (
    <Table
      bordered
      columns={column}
      summary={() => (
        <Table.Summary fixed>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0}>Done By:</Table.Summary.Cell>
            <Table.Summary.Cell index={1}></Table.Summary.Cell>
            <Table.Summary.Cell index={2}></Table.Summary.Cell>
            <Table.Summary.Cell index={3}></Table.Summary.Cell>
            <Table.Summary.Cell index={4}></Table.Summary.Cell>
          </Table.Summary.Row>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0}>Verified By:</Table.Summary.Cell>
            <Table.Summary.Cell index={1}></Table.Summary.Cell>
            <Table.Summary.Cell index={2}></Table.Summary.Cell>
            <Table.Summary.Cell index={3}></Table.Summary.Cell>
            <Table.Summary.Cell index={4}></Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
    />
  );
};

export default ScheduleAndMonitoringPage;
