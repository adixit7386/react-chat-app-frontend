import React from "react";
import Styled from "styled-components";
import Badge from "@mui/material/Badge";

import NotificationsIcon from "@mui/icons-material/Notifications";
import ForumIcon from "@mui/icons-material/Forum";
import { useDispatch, useSelector } from "react-redux";
import { toggleAccountBar } from "../redux/accountReducer";
import AccountContainer from "../components/AccountContainer";
import { toggleNotificationBar } from "../redux/notificationBarReducer";
import NotificationContainer from "./NotificationContainer";
import { validURL } from "../config/chatLogics";
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
justify-content:flex-start;`;

const Right = Styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;`;

const UserContainer = Styled.div`
display:flex;
align-items:center;
padding:5px 10px;

cursor:pointer;
`;

const Img = Styled.img`
height:40px;
object-fit:cover;
width:40px;
border-radius:50%;
margin-left:10px;
`;

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
  const User = useSelector((state) => state.user.currentUser);

  const notification = useSelector((state) => state.notification.notification);
  const handleClick = async () => {
    dispatch(toggleAccountBar());
  };
  console.log(notification);
  return (
    <Container>
      <AccountContainer toggle={toggleBar}></AccountContainer>
      {notification.length > 1 && (
        <NotificationContainer></NotificationContainer>
      )}
      <Wrapper>
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
            <Badge
              badgeContent={notification.length - 1}
              color="primary"
              onClick={() => {
                dispatch(toggleNotificationBar());
              }}
            >
              <NotificationsIcon
                style={DarkMode ? IconStyleDarkMode : IconStyleLightMode}
              />
            </Badge>
          </MailIconContainer>

          <UserContainer clicked={true} onClick={handleClick}>
            <Img
              src={
                validURL(User?.image)
                  ? User?.image
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              }
            />
          </UserContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
