import React from "react";
import Styled from "styled-components";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddIcon from "@mui/icons-material/Add";
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
display:flex;
align-items:start;
justify-content:center;
`;

const Wrapper = Styled.div`

height:content-fit;
display:flex;
align-items:center;
justify-content:center;
width:85%;
flex-direction:column;`;
const ChatContainer = Styled.div`
margin-top:20px;
width:100%;
padding:7px 12px;
border-radius:5px;
background-color:white;
box-shadow:0px 0px 5px gray;
`;
const ChatContainerHead = Styled.div`
margin-top:20px;
width:100%;
display:flex;
align-items:center;
justify-content:center;
padding:7px 12px;
border-radius:5px;
`;
const ChatName = Styled.h1`
margin:0px;
font-size:20px;
`;
const LastMessage = Styled.span`
`;
const Center = Styled.div`

flex:1;
display:flex;
position:sticky;
top:20px;
z-index:4;
align-items:center;
justify-content:center;
margin-right:10px;
`;

const InputContainer = Styled.div`
flex:9;
height:35px;
display:flex;
align-items:center;
jusify-content:center;
border:solid 2px gray;
border-top-left-radius:50px;
border-bottom-left-radius:50px;
background-color:#f8f9fa;
padding:2px 20px;

`;
const Input = Styled.input`
background-color:#f8f9fa;
font-size: 18px;
font-size: 18px;
flex: 1;
border:none;
width:200px;
height: 30px;
outline:none;

&:focus{
 font-size: 18px;
font-size: 18px;
flex: 1;
border:none;

height: 35px;
outline:none;
}

`;

const SearchIconContainer = Styled.div`
height:35px;
width:35px;
border:solid 2px gray;
border-left:none;
display:flex;
align-items:center;
jusify-content:center;
border-top-right-radius:50px;
border-bottom-right-radius:50px;
background-color:#f8f9fa;
padding:2px 4px;
`;
const Right = Styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;`;

const IconContainer = Styled.div`
height:35px;
width:35px;
border-radius:50%;
cursor:pointer;
background-color:#f8f9fa;
`;
const SidebarContainer = () => {
  const IconStyle = {
    height: "35px",
    width: "35px",
  };
  return (
    <Container>
      <Wrapper>
        <ChatContainerHead>
          <Center>
            <InputContainer>
              <Input placeholder="Chats" className="NavbarInput" />
            </InputContainer>
            <SearchIconContainer>
              <SearchRoundedIcon
                style={{
                  height: "35px",
                  width: "35px",
                  cursor: "pointer",
                  color: "gray",
                  "@media max-width:(480px)": {
                    height: "30px",
                    width: "30px",
                  },
                }}
              />
            </SearchIconContainer>
          </Center>
          <Right>
            <IconContainer>
              <AddIcon style={IconStyle} />
            </IconContainer>
          </Right>
        </ChatContainerHead>
        <ChatContainer>
          <ChatName>Groupchat</ChatName>
          <LastMessage>animesh:hello</LastMessage>
        </ChatContainer>
        <ChatContainer>
          <ChatName>Groupchat</ChatName>
          <LastMessage>animesh:hello</LastMessage>
        </ChatContainer>
        <ChatContainer>
          <ChatName>Groupchat</ChatName>
          <LastMessage>animesh:hello</LastMessage>
        </ChatContainer>
        <ChatContainer>
          <ChatName>Groupchat</ChatName>
          <LastMessage>animesh:hello</LastMessage>
        </ChatContainer>
        <ChatContainer>
          <ChatName>Groupchat</ChatName>
          <LastMessage>animesh:hello</LastMessage>
        </ChatContainer>
        <ChatContainer>
          <ChatName>Groupchat</ChatName>
          <LastMessage>animesh:hello</LastMessage>
        </ChatContainer>
        <ChatContainer>
          <ChatName>Groupchat</ChatName>
          <LastMessage>animesh:hello</LastMessage>
        </ChatContainer>
        <ChatContainer>
          <ChatName>Groupchat</ChatName>
          <LastMessage>animesh:hello</LastMessage>
        </ChatContainer>
        <ChatContainer>
          <ChatName>Groupchat</ChatName>
          <LastMessage>animesh:hello</LastMessage>
        </ChatContainer>
        <ChatContainer>
          <ChatName>Groupchat</ChatName>
          <LastMessage>animesh:hello</LastMessage>
        </ChatContainer>
        <ChatContainer>
          <ChatName>Groupchat</ChatName>
          <LastMessage>animesh:hello</LastMessage>
        </ChatContainer>
      </Wrapper>
    </Container>
  );
};

export default SidebarContainer;
