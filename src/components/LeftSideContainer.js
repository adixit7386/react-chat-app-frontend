import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import SearchBar from "../components/SearchBar";
import { setActiveChat } from "../redux/activeChatReducer";
import { useSelector, useDispatch } from "react-redux";
import { Mobile } from "../responsive";
import Sidebar from "../components/SidebarContainer";
const Container = Styled.div`
flex:2;
position:sticky;
top:60px;
height:calc(100vh - 60px);
overflow:scroll;
&::-webkit-scrollbar {
  display: none;
};
background-color:#f8f9fa;



${Mobile((props) =>
  props.active
    ? { visibility: "hidden", flex: "0" }
    : { visibility: "visible", flex: "1" }
)};
`;

// const Wrapper = Styled.div`

// height:content-fit;
// display:flex;
// align-items:center;
// justify-content:center;
// width:85%;
// flex-direction:column;`;

const SwitchDiv = Styled.div`
display:flex;
align-items:center;
padding-left:5px;
padding-right:5px;
height:50px;
justify-content:center;
cursor:pointer;
`;
const SidebarsContainer = Styled.div`
background-color:#f6f9fa;
display:flex;
height:50px;
align-items:center;
justify-content:center;
border:${(props) => props.active && "solid 1px lightgrey"};
border-top-right-radius:${(props) => props.active && "5px"};
border-top-left-radius:${(props) => props.active && "5px"};
border-bottom: ${(props) => props.active && "none"};
flex:1;`;
const SearchBarContainer = Styled.div`
background-color:#f6f9fa;
flex:1;
height:50px;
display:flex;
align-items:center;
justify-content:center;
border:${(props) => !props.active && "solid 1px lightgrey"};
border-top-right-radius:${(props) => !props.active && "5px"};
border-top-left-radius:${(props) => !props.active && "5px"};
border-bottom: ${(props) => !props.active && "none"};
`;
const Span = Styled.span`
font-size:24px;
color:grey;
font-weight:500;`;

const SidebarContainer = () => {
  const dispatch = useDispatch();
  const [currentChat, setCurrentChat] = useState(true);
  const activeChat = useSelector((item) => item.activechat.active);
  const activeStyle = {};

  return (
    <Container active={activeChat === null ? false : true}>
      <SwitchDiv>
        <SidebarsContainer
          active={currentChat}
          onClick={() => {
            !currentChat && setCurrentChat(true);
          }}
        >
          <Span>Your Chats</Span>
        </SidebarsContainer>
        <SearchBarContainer
          style={activeStyle}
          active={currentChat}
          onClick={() => {
            currentChat && setCurrentChat(false);
          }}
        >
          <Span>Add Chats</Span>
        </SearchBarContainer>
      </SwitchDiv>
      {/* <Wrapper></Wrapper> */}
      {currentChat ? <Sidebar /> : <SearchBar />}
      {/* <Sidebar />
      <SearchBar /> */}
    </Container>
  );
};

export default SidebarContainer;
