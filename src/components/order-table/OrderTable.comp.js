import React from "react";
import { Table } from "react-bootstrap";
export const OrderTable = ({ Orders }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subject</th>
          <th>Status</th>
          <th>Order Date</th>
        </tr>
      </thead>
      <tbody>
        {Orders.length ? (
          Orders.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.subject}</td>
              <td>{row.status}</td>
              <td>{row.addedAt}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No Order to Show
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
