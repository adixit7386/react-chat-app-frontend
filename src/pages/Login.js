import React, { useState } from "react";
import Styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Container = Styled.div`
height:100vh;
background-color:#f8f9fa;
display:flex;
align-items:center;
justify-content:center;
`;

const Wrapper = Styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:300px;

`;
const Title = Styled.h1`
font-size:45px;
margin-bottom:10px;
`;

const LoginText = Styled.span`
font-size: 25px;
margin-bottom:20px;
margin-top:10px;
`;
const LoginTextOr = Styled.span`
font-size: 14px;
margin-top:20px;


`;

const InputContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;
padding:10px 5px;
height:30px;
background-color:white;
border:solid gray 1px;
border-top:${(props) => props.name === "password" && "none"};
border-top-left-radius:${(props) => props.name === "username" && "5px"};
border-top-right-radius:${(props) => props.name === "username" && "5px"};
border-bottom-right-radius:${(props) => props.name === "password" && "5px"};
border-bottom-left-radius:${(props) => props.name === "password" && "5px"};
width:90%;
`;
const Input = Styled.input`
font-size:18px;
width:90%;
height:90%;
border:none;
&:focus{
width:90%;
height:90%;
border:none;
outline:none;
}
`;
const CheckboxContainer = Styled.div`
width:90%;
display:flex;
padding:10px;
align-items:center;
justify-content:center;
margin-top:10px;
margin-bottom:10px;
`;

const Button = Styled.button`
padding:10px 5px;
height:50px;
width:97%;
border:none;
border-radius:10px;
background-color:#0d6efd;
display:flex;
align-items:center;
justify-content:center;
font-size:20px;
color:white;
cursor:pointer;
&:hover{
    background-color:#0d6ee5;
}`;

const Warning = Styled.span`
margin-top:10px;`;
const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [missing, setMissing] = useState(false);
  const [error, setError] = useState(false);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const isFetching = useSelector((state) => state.user.isFetching);
  // const error = useSelector((state) => state.user.error);
  // const user = {
  //   username: userName,
  //   password: password,
  // };
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   if (!password || !userName) {
  //     setMissing(true);
  //     return;
  //   }
  //   setMissing(false);
  //   login(dispatch, user);
  // };
  // console.log(error);
  return (
    <Container>
      <Wrapper>
        <Title>Chat</Title>
        <LoginText>Please Login</LoginText>
        <InputContainer name="username">
          <Input
            placeholder="Username"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </InputContainer>
        <InputContainer name="password">
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </InputContainer>
        <CheckboxContainer>
          <Input
            style={{ width: "20px", marginRight: "10px" }}
            type="checkbox"
          ></Input>
          <label>Remember Me</label>
        </CheckboxContainer>
        <Button type="submit">Login</Button>
        {/* <Button type="submit" disabled={isFetching} onClick={handleClick}>
          Login
        </Button> */}

        <Warning>
          Don't have an account?{" "}
          <Link to="/register" style={{ all: "unset", cursor: "pointer" }}>
            Register
          </Link>
        </Warning>

        {error && (
          <Warning style={{ color: "red" }}>
            username or password is wrong
          </Warning>
        )}
        {missing && (
          <Warning style={{ color: "red" }}>
            please fill all the required details
          </Warning>
        )}
        <LoginTextOr>OR</LoginTextOr>
        <LoginText>
          <strong onClick={() => {}} style={{ cursor: "pointer" }}>
            Continue
          </strong>{" "}
          Without Login
        </LoginText>
      </Wrapper>
    </Container>
  );
};

export default Login;
