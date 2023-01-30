import React from "react";
import Styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { toggleAccountBar } from "../redux/accountReducer";
import { useNavigate } from "react-router-dom";

import { logout } from "../redux/userReducer";
import { resetActiveChat } from "../redux/activeChatReducer";

const ParentContainer = Styled.div`
position:absolute;
top:0px;
left:0px;
z-index:5;
background-color:${(props) =>
  props.toggle ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.09)"};
height:100vh;
width:100vw;
visibility:${(props) => (props.toggle ? "visible" : "hidden")};
display:flex;
align-items:center;
justify-content:center;
transition:background-color 0.5s ease;

`;

const Container = Styled.div`
background-color:white;
height:300px;
border-radius:10px;

box-shadow:0px 0px 20px grey;
width:400px;`;

const HeadingContainer = Styled.div`
height:25%;
display:flex;
align-items:center;
justify-content:center;`;
const Heading = Styled.h1`
display:flex;
align-items:center;
justify-content:center;
margin:10px auto;`;
const ImageContainer = Styled.div`
display:flex;
align-items:center;
height:35%;
display:flex;
align-items:center;
justify-content:center;
justify-content:center;`;
const Image = Styled.img`
height:100px;
margin:0px;
width:100px ;
border-radius:50%;
object-fit:cover;
border:solid 2px green;
`;

const EmailContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;
height:25%;`;
const HeadingEmail = Styled.h1`
color:grey;
margin:10px auto;`;
const CloseContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;`;
const Button = Styled.button`
font-size:18px;
padding:5px 12px;
border:none;
border-radius:5px;
cursor:pointer;
background-color:#0081B4;
color:white;
height:15%;`;
const PersonContainer = ({ toggle }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const handleClick = (e) => {
    if (e.target.classList.contains("parent")) {
      dispatch(toggleAccountBar());
    }
  };
  const handleLogout = () => {
    dispatch(logout());
    dispatch(toggleAccountBar());
    dispatch(resetActiveChat());
    navigate("/login");
  };
  return (
    <ParentContainer
      className="parent"
      onClick={(e) => {
        handleClick(e);
      }}
      toggle={toggle}
    >
      <Container>
        <HeadingContainer>
          <Heading>{user?.name}</Heading>
        </HeadingContainer>
        <ImageContainer>
          <Image
            src={
              user?.image ||
              "https://t4.ftcdn.net/jpg/05/09/59/75/240_F_509597532_RKUuYsERhODmkxkZd82pSHnFtDAtgbzJ.jpg"
            }
          />
        </ImageContainer>
        <EmailContainer>
          <HeadingEmail>{user?.email}</HeadingEmail>
        </EmailContainer>
        <CloseContainer>
          <Button
            onClick={() => {
              handleLogout();
            }}
          >
            Logout
          </Button>
        </CloseContainer>
      </Container>
    </ParentContainer>
  );
};

export default PersonContainer;
