import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadCrumb } from "../../components/breadcrumb/BreadCrumb.comp";
import orders from "../../assets/data/dummy-data.json";
import { MessageHistory } from "../../components/message-history/MessageHistory.comp";
import { UpdateOrder } from "../../components/update-order/UpdateOrder.comp";

const order = orders[0];
export const Order = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {}, [message]);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = () => {
    alert("submitted");
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadCrumb page="Order" />
        </Col>
      </Row>
      <Row>
        <Col className="text-weight-bolder text-secondary">
          <div className="subject">Subject : {order.subject}</div>
          <div className="date">Date : {order.addedAt}</div>
          <div className="status">Status : {order.status}</div>
        </Col>
        <Col className="text-end">
          <Button variant="outline-info">Close Order</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <MessageHistory msg={order.history} />
        </Col>
      </Row>

      <hr />

      <Row className="mt-4">
        <Col>
          <UpdateOrder
            msg={message}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
};
