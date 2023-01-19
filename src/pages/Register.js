import React, { useState } from "react";
import Styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Mobile } from "../responsive";
import axios from "axios";
import Toast from "../components/Toast";
import ForumIcon from "@mui/icons-material/Forum";
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
width:700px;

`;
const Title = Styled.h1`
font-size:40px;
margin-top:10px;
margin-bottom:10px;
`;
const Span = Styled.span`
color:#0081B4;
font-size:40px;
`;

const LoginText = Styled.span`
  font-size: 25px;
  
  margin-bottom:20px;
  margin-top:10px;
`;

const InputWrapper = Styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:center;
flex-wrap:wrap;
${Mobile({ flexWrap: "" })}
`;
const InputContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;
padding:10px 5px;
height:30px;
background-color:white;
border:solid gray 1px;
border-radius:5px;
margin:6px 12px;

width:300px;
${Mobile({ margin: "3px 12px" })};
`;
const Input = Styled.input`


font-size:18px;
width:90%;
height:90%;
border:none;

outline:none;
transition:all 0.3s ease;
&:focus{
    
    
    border:none;
    outline:none;
    font-size:18px;
width:90%;
height:90%;
}

`;
const CheckboxContainer = Styled.div`
width:100%;
display:flex;

align-items:center;
justify-content:center;
margin-top:10px;

`;

const Button = Styled.button`
margin-top:20px;

padding:10px 5px;
height:50px;
border:none;
width:50%;
border-radius:10px;
background-color:#0d6efd;
display:flex;
align-items:center;
justify-content:center;
font-size:20px;
color:white;

&:hover{
    background-color:#0d6ee5;
};
cursor:Pointer;`;

const Warning = Styled.span`
margin-top:10px;`;
const RegisterTextOr = Styled.span`
font-size: 14px;
margin-top:20px;


`;
const Label = Styled.label``;
const Login = () => {
  let user = {};
  const [userName, setUserName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const [imgLink, setImgLink] = useState("");

  const navigate = useNavigate();
  const [isnotification, setIsNotification] = useState(false);
  const [notification, setNotification] = useState("");
  const ManageNotification = (message) => {
    let msg = message;
    setTimeout(() => {
      setIsNotification(true);
      setNotification(msg);
    }, 10);
    setIsNotification(false);
  };
  const handleClick = async () => {
    if (!password || !repassword || !userName || !password || !email || !name) {
      ManageNotification("Please Provide all the details");

      return;
    }
    if (password !== repassword) {
      ManageNotification("Passwords do not match");

      return;
    }

    user.username = userName;
    user.email = email;
    user.password = password;
    user.name = name;
    user.image = imgLink;

    try {
      const res = await axios.post(
        "http://localhost:5000/api/user/register",
        user
      );
      console.log(res.data);
      if (res.status === 201) {
        navigate("/login");
      }
    } catch (err) {
      ManageNotification("This user already exists");
    }
  };

  const setFiles = (img) => {
    setLoading(true);
    if (img === undefined) {
      ManageNotification("Please select the image");
      return;
    }

    if (img.type === "image/jpeg" || img.type === "image/png") {
      const data = new FormData();
      data.append("file", img);
      data.append("upload_preset", "react-chat-app");
      data.append("cloud_name", "dcvv2vevf");
      fetch("  https://api.cloudinary.com/v1_1/dcvv2vevf/image/upload", {
        method: "post",
        body: data,
      })
        .then((resp) => resp.json())
        .then((data) => {
          setImgLink(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  };
  const IconStyle = {
    height: "35px",
    width: "35px",
    color: "#0081B4",
  };
  return (
    <Container>
      <Wrapper>
        {isnotification && <Toast message={notification} />}
        <ForumIcon style={IconStyle} />
        <Title>
          live<Span>Chat</Span>
        </Title>
        <LoginText>Please Register Here</LoginText>
        <InputWrapper>
          <InputContainer name="name">
            <Input
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </InputContainer>
          <InputContainer name="image">
            <Input
              hidden
              id="image"
              type="file"
              onChange={(e) => setFiles(e.target.files[0])}
            />
            <Label
              htmlFor="image"
              style={{ width: "90%", color: "grey", cursor: "pointer" }}
            >
              Upload your picture
            </Label>
          </InputContainer>
          <InputContainer name="username">
            <Input
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </InputContainer>
          <InputContainer name="email">
            <Input
              type="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputContainer>
          <InputContainer name="password">
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>
          <InputContainer name="repeatpassword">
            <Input
              type="password"
              placeholder="Repeat Password"
              onChange={(e) => setRepassword(e.target.value)}
            />
          </InputContainer>
        </InputWrapper>
        <Button type="button" onClick={handleClick}>
          Register
        </Button>

        <CheckboxContainer>
          <Warning>
            already have an account?{" "}
            <Link to="/login" style={{ all: "unset", cursor: "pointer" }}>
              Login
            </Link>{" "}
          </Warning>
        </CheckboxContainer>
        <Warning>
          I agree with the <b style={{ cursor: "pointer" }}>PRIVACY POLICY</b>
        </Warning>
      </Wrapper>
    </Container>
  );
};

export default Login;
