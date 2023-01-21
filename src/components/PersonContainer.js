import React from "react";
import Styled from "styled-components";
import { useDispatch } from "react-redux";
import { togglePersonBar } from "../redux/personReducer";
const ParentContainer = Styled.div`
position:absolute;
top:0px;
left:0px;
z-index:5;
background-color:rgba(0,0,0,0.2);
height:100vh;
width:100vw;
visibility:${(props) => (props.toggle ? "visible" : "hidden")};
display:flex;
align-items:center;
justify-content:center;

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
  const dispatch = useDispatch();
  const handleClick = (e) => {
    if (e.target.classList.contains("parent")) {
      dispatch(togglePersonBar());
    }
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
          <Heading>Nitin Kumar</Heading>
        </HeadingContainer>
        <ImageContainer>
          <Image src={"https://avatars.githubusercontent.com/u/92628841?v=4"} />
        </ImageContainer>
        <EmailContainer>
          <HeadingEmail>nitinkumar@234.com</HeadingEmail>
        </EmailContainer>
        <CloseContainer>
          <Button
            onClick={() => {
              dispatch(togglePersonBar());
            }}
          >
            Close
          </Button>
        </CloseContainer>
      </Container>
    </ParentContainer>
  );
};

export default PersonContainer;
