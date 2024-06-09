import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadCrumb } from "../../components/breadcrumb/BreadCrumb.comp";
import { SearchForm } from "../../components/search-form/SearchForm.comp";
import { OrderTable } from "../../components/order-table/OrderTable.comp";
import Orders from "../../assets/data/dummy-data.json";
import { useNavigate, Link } from "react-router-dom";

export const OrderLists = () => {
  const [str, setStr] = useState("");
  const [dispOrder, setDispOrder] = useState(Orders);

  useEffect(() => {}, [str, dispOrder]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
    searchOrder(value);
  };

  const searchOrder = (sttr) => {
    const displayOrders = Orders.filter((row) =>
      row.subject.toLowerCase().includes(sttr.toLowerCase())
    );
    setDispOrder(displayOrders);
  };
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadCrumb page="Order Lists" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Link to="/add-order">
            <Button variant="info">Add New Order</Button>
          </Link>
        </Col>
        <Col className="text-end">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <OrderTable Orders={dispOrder} />
        </Col>
      </Row>
    </Container>
  );
};
