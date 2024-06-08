import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PageBreadCrumb } from "../../components/breadcrumb/BreadCrumb.comp";
import { AddOrderForm } from "../../components/add-order-form/AddOrderForm.Comp";

const initialFrmDt = {
  subject: "",
  issueDate: null,
  detail: "",
};

export const AddOrder = () => {
  const [frmData, setFrmData] = useState(initialFrmDt);

  useEffect(() => {
    // This effect currently does nothing, consider if you need it
  }, [frmData]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFrmData({
      ...frmData,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("req received");
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadCrumb page="New Order" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddOrderForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmData={frmData}
          />
        </Col>
      </Row>
    </Container>
  );
};
