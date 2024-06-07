import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { OrderTable } from "../../components/order-table/OrderTable.comp";
import Orders from "../../assets/data/dummy-data.json";

export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button
            variant="info"
            style={{ fontSize: " 2rem", padding: "10px 30px" }}
          >
            Add New Order
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center  mb-2">
          <div>Total Order : 50</div>
          <div>Pending Order : 50</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">Recently Added Orders</Col>
      </Row>
      <hr />

      <Row>
        <Col className="recent-order">
          <OrderTable Orders={Orders} />
        </Col>
      </Row>
    </Container>
  );
};
