import {
  Container,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  Button,
} from "reactstrap";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  loginInitiate,
  loginSuccess,
  loginFailure,
} from "../redux/login/action";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Blogs from "../views/Blogs";
import Navin from "../components/Navin";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const blogs = useSelector((state) => state.blogs);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onnSubmit = (event) => {
    event.preventDefault();
    const els = event.target.elements;
    const email = els.email.value;
    const password = els.password.value;

    dispatch(loginInitiate());

    const req = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    };

    const resp = fetch("https://reqres.in/api/login", req).then((res) => {
      if (res.status === 200) {
        dispatch(loginSuccess(res.status));
        localStorage.setItem("response", 200);
        navigate("/")
      } else {
        dispatch(loginFailure("Invalid Credentials"));
        alert(login.error);
      }
    });
  };

  const clearEmail = () => {
    setEmail("");
  };

  const clearPassowrd = () => {
    setPassword("");
  };

  const resetAll = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <Container>
      <Card style={{ margin: "30vh", width: "50vw" }}>
        <CardBody>
          <CardTitle tag="h1">LogIn</CardTitle>
          <Form inline onSubmit={onnSubmit}>
            <FormGroup>
              <InputGroup>
                <Label for="exampleEmail" hidden>
                  Email
                </Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button color="danger" onClick={clearEmail}>
                  <span aria-hidden>&times;</span>
                </Button>
              </InputGroup>
            </FormGroup>{" "}
            <FormGroup>
              <InputGroup>
                <Label for="examplePassword" hidden>
                  Password
                </Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button color="danger" onClick={clearPassowrd}>
                  <span aria-hidden>&times;</span>
                </Button>
              </InputGroup>
            </FormGroup>{" "}
            <Button color="primary" type="submit">
              Submit
            </Button>{" "}
            <Button color="primary" type="reset" onClick={resetAll}>
              Reset
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default LogIn;
