import React, {useState} from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import axios from "axios";
import API_URL from "../../config/global";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async() => {
    e.preventDefault();
    const response = await axios.post(`${API_URL}/login`,formData);
    console.log(response);
    if(response.data==="Invalid User name or Password"){
      alert("Invalid User name or Password")
    }else if(response.data=== "Server Busy"){
alert("Verify Yoyr Email id")
    }else if(response?.status){
      localStorage.setItem("userInfo",JSON.stringify(response.data));
      navigate("/home");
    }
    };

  return (
    <Container>
      <h1>WELCOME</h1>
      <hr/>
      <h1>Login Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button varient="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
