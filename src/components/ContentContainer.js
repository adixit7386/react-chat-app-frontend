import React from "react";
import Styled from "styled-components";
const Container = Styled.div`
flex:5;
height:calc(100vh - 60px);
`;
const Wrapper = Styled.div`
margin-left:20px;
margin-right:20px;
`;
const HeadContainer = Styled.div`
height:40px;
`;

const Heading = Styled.h1`
font-size:25px;
margin:0px;`;
const ChatContainer = Styled.div`
height:calc(100vh - 130px);`;
const SendContainer = Styled.div`
position:sticky;
top:100%;`;
const ContentContainer = () => {
  return (
    <Container>
      <Wrapper>
        <HeadContainer>
          <Heading>Animesh</Heading>
        </HeadContainer>
        <ChatContainer>messages</ChatContainer>
        <SendContainer>input</SendContainer>
      </Wrapper>
    </Container>
  );
};

export default ContentContainer;
