import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { getChatImage } from "../config/chatLogics";
import axios from "axios";

import { getSender } from "../config/chatLogics";
import { setActiveChat } from "../redux/activeChatReducer";
import { useSelector, useDispatch } from "react-redux";
import { validURL } from "../config/chatLogics";
import Loader from "../components/Loader";
const Container = Styled.div`
flex:2;
position:sticky;
top:60px;
height:calc(100vh - 110px);
overflow:scroll;
background-color:#f8f9fa;
display:flex;
align-items:start;
justify-content:center;

&::-webkit-scrollbar {
  display: none;
};
`;

const Wrapper = Styled.div`

height:content-fit;
display:flex;
align-items:center;
justify-content:center;
width:85%;
flex-direction:column;`;
const ChatContainer = Styled.div`
display:flex;
cursor:pointer;
margin-top:20px;
width:100%;
padding:7px 12px;
border-radius:5px;
background-color:${(props) => (props.selected ? "lightgrey" : "#f6f9fa")};
&:hover{
  background-color:lightgrey;
}
transition:all 0.7s ease;
`;

const ChatName = Styled.h1`
margin:0px;
font-size:20px;
`;
const LastMessage = Styled.span`
color:grey;
`;
const LastMessageSender = Styled.span`
font-weight:500;
`;

const UserIconContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;`;
const UserDetails = Styled.div`
flex:3;
flex-direction:column;`;

const Img = Styled.img`
height:50px ;
border-radius:50%;

object-fit:cover;
width:50px;`;
const SidebarContainer = () => {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.user.currentUser);
  const activeChat = useSelector((item) => item.activechat.active);
  const toggleUpdateChat = useSelector((state) => state.updatechats.toggle);
  const [chatList, setChatList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchChat = async (userId) => {
      try {
        const { data } = await axios.get(
          "https://livechat-backend.onrender.com/api/chat/",

          {
            headers: {
              Authorization: `Bearer ${User.accessToken}`,
            },
          }
        );
        setChatList(data);
        setLoading(false);
        // dispatch(setUserChats(data));
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    fetchChat();
  }, [toggleUpdateChat, User.accessToken]);

  const handleActiveChat = (item) => {
    dispatch(setActiveChat(item));
  };

  return (
    <Container active={activeChat === null ? false : true}>
      <Wrapper>
        {loading && <Loader></Loader>}
        {chatList?.map((item) => (
          <ChatContainer
            onClick={() => handleActiveChat(item)}
            selected={item._id === activeChat?._id ? true : false}
          >
            <UserIconContainer>
              <Img
                src={
                  validURL(getChatImage(User, item?.users))
                    ? getChatImage(User, item?.users)
                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                }
              />
            </UserIconContainer>
            <UserDetails>
              <ChatName>
                {item?.isGroupChat
                  ? item?.ChatName
                  : getSender(User, item?.users)}
              </ChatName>

              <LastMessageSender>
                {item?.latestMessage[0]?.sender
                  ? `${item?.latestMessage[0]?.sender.name} : `
                  : ""}
              </LastMessageSender>
              <LastMessage>
                {item?.latestMessage[0]?.content
                  ? item?.latestMessage[0]?.content
                  : "send first message"}
              </LastMessage>
            </UserDetails>
          </ChatContainer>
        ))}
      </Wrapper>
    </Container>
  );
};

export default SidebarContainer;
