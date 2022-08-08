import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";

const SignUp = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const modelSchema = yup.object().shape({
    email: yup.string().required("email has to be filled"),
    password: yup.string().required("Please enter your preferred password"),
  });

  const { handleSubmit, register } = useForm({
    resolver: yupResolver(modelSchema),
  });

  const onSubmit = handleSubmit(async (val) => {
    console.log(val);
    const { email, password } = val;

    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);

    await axios
      .post("https://foodaviz.herokuapp.com/api/sign", val)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Welcome back on board",
          showConfirmButton: false,
          timer: 2500,
        });
        navigate("/dash");
      });
  });

  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      <Overlay>
        <Form onSubmit={onSubmit}>
          <Logo src="/image/FoodAviz.png" />
          <Inputs>
            <Input placeholder="Email" type="email" {...register("email")} />

            <PassInput>
              {toggle ? (
                <Passput placeholder="Password" {...register("password")} />
              ) : (
                <Passput
                  placeholder="************"
                  type="password"
                  {...register("password")}
                />
              )}
              <PassIcon>
                {toggle ? (
                  <AiOutlineEyeInvisible onClick={onToggle} />
                ) : (
                  <AiOutlineEye onClick={onToggle} />
                )}
              </PassIcon>
            </PassInput>
          </Inputs>
          <Button type="submit">Sign in</Button>

          <Alt>
            Already have an account?
            <NavLink
              to="/signup"
              style={{
                textDecoration: "none",
              }}
            >
              <span>Sign up</span>
            </NavLink>
          </Alt>
        </Form>
      </Overlay>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  background-image: url("/image/backg.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  border-radius: 20px 20px 0 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Logo = styled.img`
  width: 30%;
  @media screen and (max-width: 425px) {
    width: 90%;
  }
`;

const Inputs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  width: 78%;
  height: 40px;
  background: #d9d9d9;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  padding-left: 20px;
  text-transform: ${({ cap }) => (cap ? "capitalize" : "unset")};
  :focus {
    border: none;
    outline: none;
  }
`;
const PassInput = styled.div`
  width: 82%;
  height: 40px;
  border-radius: 5px;
  background: #d9d9d9;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 375px) {
    width: 83%;
  }
`;

const Passput = styled.input`
  border: none;
  width: 95%;
  height: 35px;
  margin-top: -1;
  margin-left: 20px;
  border-radius: 5px;
  background: #d9d9d9;
  text-transform: ${({ cap }) => (cap ? "capitalize" : "unset")};
  @media screen and (max-width: 768px) {
    margin-left: 18px;
  }

  :focus {
    border: none;
    outline: none;
  }
`;

const PassIcon = styled.div`
  font-size: 23px;
  cursor: pointer;
  opacity: 0.7;
  transition: 350ms;
  padding-right: 10px;
  :hover {
    opacity: 1;
  }
`;

const Button = styled.button`
  background: #56cc56;
  color: black;
  font-family: poppins;
  width: 84%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 40px;
  margin-top: 10px;
  border-radius: 5px;
  text-decoration: none;
  border: none;
  opacity: ${({ op }) => (op ? "0.5" : "1")};
`;

const Alt = styled.div`
  margin-top: 10px;
  font-weight: 500;
  color: white;
  font-family: poppins;
  font-size: 15px;
  span {
    color: #56cc56;
    margin-left: 5px;
    cursor: pointer;
    font-family: 13px;
  }
`;
