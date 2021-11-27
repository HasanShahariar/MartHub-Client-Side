import React from "react";
import "./Signup.css";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { signInWithEmailAndPassword } from "@firebase/auth";

const Signup = () => {
  const {
    user,
    error,
    SignUpStatus,
    SignupWithEmailPassword,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
  } = useAuth();
  // console.log(SignUpStatus);
  return (
    <div className="container">
      <div className="sub-container mt-5">
        <Form onSubmit={SignupWithEmailPassword}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
            required
              onBlur={handleNameChange}
              type="text"
              placeholder="Enter Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
            required
              onBlur={handleEmailChange}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
            required
              onBlur={handlePasswordChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group
            className="mb-3 text-end"
            controlId="formBasicCheckbox"
          >
            <Link to='/login'>
            <Button onClick = {SignupWithEmailPassword}  type="submit" >Signup</Button>
            </Link>
        </Form.Group>
          
          <p className="error-message">{error}</p>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
