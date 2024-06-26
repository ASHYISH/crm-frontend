import React, { useState } from "react";
import "./entry.style.css";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { LoginForm } from "../../components/login/Login.comp";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frmLoad, setFrmLoad] = useState("login");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Fill up all the form!");
    }
  };
  const handleOnResetSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      return alert("Please enter the email!");
    }
  };

  const formSwitcher = (frmType) => {
    setFrmLoad(frmType);
  };

  return (
    <div className="entry-page bg-info">
      <Accordion className="bg-white form-box">
        {frmLoad === "login" && (
          <LoginForm
            handleOnChange={handleOnChange}
            email={email}
            pass={password}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
          />
        )}

        {frmLoad == "reset" && (
          <ResetPassword
            handleOnChange={handleOnChange}
            email={email}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
          />
        )}
      </Accordion>
    </div>
  );
};
