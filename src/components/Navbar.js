import React from "react";
import Styled from "styled-components";
import User from "../redux/exportUser";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MailIcon from "@mui/icons-material/Mail";
import ForumIcon from "@mui/icons-material/Forum";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../redux/sideReducer";
import { toggleAccountBar } from "../redux/accountReducer";
import AccountContainer from "../components/AccountContainer";
const Container = Styled.div`
display:flex;
align-items:center;
background-color:white;
position:sticky;
z-index:2;
top:0px;
background-color:#f8f9fa;
justify-content:center;
height:59px;
padding-left:20px;
padding-right:20px;
border-bottom:1px solid lightgray;
`;
const Wrapper = Styled.div`
flex:1;
display:flex;
align-items:center;

justify-content:center;
`;
const Left = Styled.div`
flex:1;
display:flex;
align-items:center;;
justify-content:flex-start;

`;

const IconContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;
`;
const TitleContainer = Styled.div`
padding:0px 10px 0px 10px;


`;
const Title = Styled.h1`
margin: 0px auto 0px auto;
font-size:32px;`;
const Span = Styled.span`
color:#0081B4;
font-size:32px;
`;
const Center = Styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;`;

const Right = Styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;`;

const UserContainer = Styled.div`
display:flex;
align-items:center;
padding:5px 10px;
border-radius:50px;
cursor:pointer;
border:solid 1px gray;
`;

const UserNameContainer = Styled.span`
`;
const Img = Styled.img`
height:30px;
width:30px;
border-radius:50%;
margin-left:10px;

`;
const SpanSearch = Styled.span`
font-size:24px;
cursor:pointer;
color:grey;`;

const DarkModeIconContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;
padding:5px 10px;`;
const MailIconContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;
padding:5px 10px;`;

const Navbar = () => {
  const dispatch = useDispatch();
  const DarkMode = false;

  const IconStyle = {
    height: "35px",
    width: "35px",
    color: "#0081B4",
  };
  const IconStyleSearch = {
    height: "35px",
    width: "35px",
    color: "grey",
    cursor: "pointer",
  };
  const IconStyleDarkMode = {
    height: "30px",
    width: "30px",
    color: "white",
    cursor: "pointer",
  };
  const IconStyleLightMode = {
    height: "30px",
    width: "30px",
    color: "grey",
    cursor: "pointer",
  };
  const toggleBar = useSelector((state) => state.accountbar.toggle);

  const handleClick = async () => {
    dispatch(toggleAccountBar());
  };

  return (
    <Container>
      <AccountContainer toggle={toggleBar}></AccountContainer>
      <Wrapper>
        <Left>
          <IconContainer>
            <SearchRoundedIcon
              onClick={() => dispatch(toggleSidebar())}
              style={IconStyleSearch}
            />
          </IconContainer>
          <TitleContainer>
            <SpanSearch onClick={() => dispatch(toggleSidebar())}>
              Search Users
            </SpanSearch>
          </TitleContainer>
        </Left>
        <Center>
          <IconContainer>
            <ForumIcon style={IconStyle} />
          </IconContainer>
          <TitleContainer>
            <Title>
              live<Span>Chat</Span>
            </Title>
          </TitleContainer>
        </Center>
        <Right>
          <MailIconContainer>
            <MailIcon
              style={DarkMode ? IconStyleDarkMode : IconStyleLightMode}
            />
          </MailIconContainer>
          <DarkModeIconContainer>
            <DarkModeIcon
              style={DarkMode ? IconStyleDarkMode : IconStyleLightMode}
            />
          </DarkModeIconContainer>
          <UserContainer clicked={true} onClick={handleClick}>
            <UserNameContainer>{User?.name}</UserNameContainer>
            <Img src={User?.image} />
          </UserContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
