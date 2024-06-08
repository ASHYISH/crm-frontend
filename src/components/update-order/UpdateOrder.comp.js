import React from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
export const UpdateOrder = ({ msg, handleOnChange, handleOnSubmit }) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label>Reply</Form.Label>
      <Form.Text>Please reply your meesage here or update the order</Form.Text>
      <Form.Control
        value={msg}
        name="detail"
        as="textarea"
        row="5"
        onChange={handleOnChange}
      />
      <div className="text-end mt-3 mb-3">
        <Button variant="info" type="submit">
          Reply
        </Button>
      </div>
    </Form>
  );
};

UpdateOrder.UpdateOrder = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  msg: PropTypes.string.isRequired,
};
