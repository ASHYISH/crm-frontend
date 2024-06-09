import React from "react";
import { Accordion, Form, Button, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

import "./add-order-form.style.css";

export const AddOrderForm = ({ handleOnSubmit, handleOnChange, frmData }) => {
  return (
    <Accordion className="mt-3 add-new-order bg-light">
      <h1 className="text-info text-center">Add New Order</h1>
      <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              name="subject"
              value={frmData.subject}
              onChange={handleOnChange}
              placeholder="Subject"
              required
            />
          </Col>
        </Form.Group>
        <br />
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Date
          </Form.Label>

          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={frmData.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <br />
        <hr />
        <Form.Group>
          <Form.Label>Enter</Form.Label>
          <Form.Control
            as="textarea"
            name="detail"
            value={frmData.detail}
            rows="5"
            onChange={handleOnChange}
            required
          />
        </Form.Group>
        <hr />
        <Button type="Submit" variant="info" className="w-100">
          Login
        </Button>
      </Form>
    </Accordion>
  );
};

AddOrderForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  frmData: PropTypes.object.isRequired,
};
