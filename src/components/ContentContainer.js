import React from "react";
import Styled from "styled-components";

import SendIcon from "@mui/icons-material/Send";
const Container = Styled.div`
flex:5;
height:calc(100vh - 60px);
`;
const Wrapper = Styled.div`
padding:20px;
height:calc(100vh - 100px);

`;
const HeadContainer = Styled.div`
height:50px;
`;

const Heading = Styled.h1`
font-size:25px;
margin:0px;`;
const ContentWrapper = Styled.div`
background-color:#f8f9fa;
height:calc(100vh - 130px);
margin-top:0px;
border-radius:10px;
box-shadow:0px 0px 10px lightgrey;
`;
const ChatContainer = Styled.div`
padding:10px;
height:calc(100vh - 240px);
position:sticky;
overflow:scroll;
&::-webkit-scrollbar{
    display:none;
}
top:100px;
scroll:bottom;
align-items:center;
justify-content:center;
flex-direction:column;

`;
const SendContainer = Styled.div`
position:sticky;
height:80px;
top:100%;
display:flex;
align-items:center;
justify-content:center;
border-bottom-right-radius:10px;
border-bottom-left-radius:10px;`;
const Center = Styled.div`

width:80%;
display:flex;
align-items:center;
justify-content:center;`;

const InputContainer = Styled.div`
flex:9;
height:35px;
display:flex;
align-items:center;
jusify-content:center;
border:solid 2px gray;
border-top-left-radius:50px;
border-bottom-left-radius:50px;
padding:2px 20px;

`;
const Input = Styled.input`
background-color:#f8f9fa;
font-size: 18px;
font-size: 18px;
flex: 1;
border:none;

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
padding:2px 4px;
`;
const MessageContainerSender = Styled.div`
width:100%;
height:content-fit;
display:flex;
align-items:center;
margin-top:0px;
justify-content:flex-start;

`;
const MessageContainer = Styled.div`
width:100%;
height:content-fit;
display:flex;
align-items:center;
justify-content:flex-end;

margin-top:0px;
`;
const SenderMessage = Styled.div`
width:80%;
margin-left:20px;
background-color:white;
border-radius:10px;
box-shadow:0px 0px 10px lightgrey;
padding:3px 5px;
margin-top:20px;
`;
const UserMessage = Styled.div`
width:80%;
margin-right:20px;
box-shadow:0px 0px 10px lightgrey;
border-radius:10px;
background-color:white;
padding:3px 5px;
margin-top:20px;
`;
const MessageDetail = Styled.div`
height:content-fit;
display:flex;
align-items:center;
justify-content:space-between;
`;
const MessageContent = Styled.div`
height:content-fit;
`;
const NameText = Styled.span`
font-size:17px;
color:black;`;
const TimeText = Styled.span`
font-size:15px;
color:grey;`;
const MessageText = Styled.span`
font-size:18px;`;
const ContentContainer = () => {
  return (
    <Container>
      <Wrapper>
        <HeadContainer>
          <Heading>Animesh</Heading>
        </HeadContainer>
        <ContentWrapper>
          <ChatContainer>
            <MessageContainer>
              <UserMessage>
                <MessageDetail>
                  <NameText>You</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </UserMessage>
            </MessageContainer>
            <MessageContainerSender>
              <SenderMessage>
                <MessageDetail>
                  <NameText>Animesh</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </SenderMessage>
            </MessageContainerSender>
            <MessageContainer>
              <UserMessage>
                <MessageDetail>
                  <NameText>You</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </UserMessage>
            </MessageContainer>
            <MessageContainerSender>
              <SenderMessage>
                <MessageDetail>
                  <NameText>Animesh</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </SenderMessage>
            </MessageContainerSender>
            <MessageContainer>
              <UserMessage>
                <MessageDetail>
                  <NameText>You</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </UserMessage>
            </MessageContainer>
            <MessageContainerSender>
              <SenderMessage>
                <MessageDetail>
                  <NameText>Animesh</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </SenderMessage>
            </MessageContainerSender>
            <MessageContainer>
              <UserMessage>
                <MessageDetail>
                  <NameText>You</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </UserMessage>
            </MessageContainer>
            <MessageContainerSender>
              <SenderMessage>
                <MessageDetail>
                  <NameText>Animesh</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </SenderMessage>
            </MessageContainerSender>
            <MessageContainer>
              <UserMessage>
                <MessageDetail>
                  <NameText>You</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </UserMessage>
            </MessageContainer>
            <MessageContainerSender>
              <SenderMessage>
                <MessageDetail>
                  <NameText>Animesh</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </SenderMessage>
            </MessageContainerSender>
            <MessageContainer>
              <UserMessage>
                <MessageDetail>
                  <NameText>You</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </UserMessage>
            </MessageContainer>
            <MessageContainerSender>
              <SenderMessage>
                <MessageDetail>
                  <NameText>Animesh</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </SenderMessage>
            </MessageContainerSender>
            <MessageContainer>
              <UserMessage>
                <MessageDetail>
                  <NameText>You</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </UserMessage>
            </MessageContainer>
            <MessageContainerSender>
              <SenderMessage>
                <MessageDetail>
                  <NameText>Animesh</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </SenderMessage>
            </MessageContainerSender>
            <MessageContainer>
              <UserMessage>
                <MessageDetail>
                  <NameText>You</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </UserMessage>
            </MessageContainer>
            <MessageContainerSender>
              <SenderMessage>
                <MessageDetail>
                  <NameText>Animesh</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </SenderMessage>
            </MessageContainerSender>
            <MessageContainer>
              <UserMessage>
                <MessageDetail>
                  <NameText>You</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </UserMessage>
            </MessageContainer>
            <MessageContainerSender>
              <SenderMessage>
                <MessageDetail>
                  <NameText>Animesh</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </SenderMessage>
            </MessageContainerSender>
            <MessageContainer>
              <UserMessage>
                <MessageDetail>
                  <NameText>You</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </UserMessage>
            </MessageContainer>
            <MessageContainerSender>
              <SenderMessage>
                <MessageDetail>
                  <NameText>Animesh</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </SenderMessage>
            </MessageContainerSender>
            <MessageContainer>
              <UserMessage>
                <MessageDetail>
                  <NameText>You</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </UserMessage>
            </MessageContainer>
            <MessageContainerSender>
              <SenderMessage>
                <MessageDetail>
                  <NameText>Animesh</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </SenderMessage>
            </MessageContainerSender>
            <MessageContainer>
              <UserMessage>
                <MessageDetail>
                  <NameText>You</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </UserMessage>
            </MessageContainer>
            <MessageContainerSender>
              <SenderMessage>
                <MessageDetail>
                  <NameText>Animesh</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </SenderMessage>
            </MessageContainerSender>
            <MessageContainer>
              <UserMessage>
                <MessageDetail>
                  <NameText>You</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </UserMessage>
            </MessageContainer>
            <MessageContainerSender>
              <SenderMessage>
                <MessageDetail>
                  <NameText>Animesh</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </SenderMessage>
            </MessageContainerSender>
            <MessageContainer>
              <UserMessage>
                <MessageDetail>
                  <NameText>You</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </UserMessage>
            </MessageContainer>
            <MessageContainerSender>
              <SenderMessage>
                <MessageDetail>
                  <NameText>Animesh</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </SenderMessage>
            </MessageContainerSender>
            <MessageContainer>
              <UserMessage>
                <MessageDetail>
                  <NameText>You</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </UserMessage>
            </MessageContainer>
            <MessageContainerSender>
              <SenderMessage>
                <MessageDetail>
                  <NameText>Animesh</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </SenderMessage>
            </MessageContainerSender>
            <MessageContainer>
              <UserMessage>
                <MessageDetail>
                  <NameText>You</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </UserMessage>
            </MessageContainer>
            <MessageContainerSender>
              <SenderMessage>
                <MessageDetail>
                  <NameText>Animesh</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </SenderMessage>
            </MessageContainerSender>
            <MessageContainer>
              <UserMessage>
                <MessageDetail>
                  <NameText>You</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </UserMessage>
            </MessageContainer>
            <MessageContainerSender>
              <SenderMessage>
                <MessageDetail>
                  <NameText>Animesh</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </SenderMessage>
            </MessageContainerSender>
            <MessageContainer>
              <UserMessage>
                <MessageDetail>
                  <NameText>You</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </UserMessage>
            </MessageContainer>
            <MessageContainerSender>
              <SenderMessage>
                <MessageDetail>
                  <NameText>Animesh</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </SenderMessage>
            </MessageContainerSender>
            <MessageContainer>
              <UserMessage>
                <MessageDetail>
                  <NameText>You</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </UserMessage>
            </MessageContainer>
            <MessageContainerSender>
              <SenderMessage>
                <MessageDetail>
                  <NameText>Animesh</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </SenderMessage>
            </MessageContainerSender>
            <MessageContainer>
              <UserMessage>
                <MessageDetail>
                  <NameText>You</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </UserMessage>
            </MessageContainer>
            <MessageContainerSender>
              <SenderMessage>
                <MessageDetail>
                  <NameText>Animesh</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </SenderMessage>
            </MessageContainerSender>
            <MessageContainer>
              <UserMessage>
                <MessageDetail>
                  <NameText>You</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </UserMessage>
            </MessageContainer>
            <MessageContainerSender>
              <SenderMessage>
                <MessageDetail>
                  <NameText>Animesh</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </SenderMessage>
            </MessageContainerSender>
            <MessageContainer>
              <UserMessage>
                <MessageDetail>
                  <NameText>You</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </UserMessage>
            </MessageContainer>
            <MessageContainerSender>
              <SenderMessage>
                <MessageDetail>
                  <NameText>Animesh</NameText>
                  <TimeText>2.14 pm</TimeText>
                </MessageDetail>
                <MessageContent>
                  <MessageText>
                    second this is the sldkfjslkd flksdf jdklsf jlksdjf lskfj
                    slkdf jsldkf jsldkfsldfkjs ldfkj slkdfsldkfj sldkfj sdlkfj
                    sdlkfjskldfj slkdf jlskdf slkdf jklsdfj lsdkf jsdlkf{" "}
                  </MessageText>
                </MessageContent>
              </SenderMessage>
            </MessageContainerSender>
          </ChatContainer>
          <SendContainer>
            <Center>
              <InputContainer>
                <Input placeholder="Send Messages" className="NavbarInput" />
              </InputContainer>
              <SearchIconContainer>
                <SendIcon
                  style={{
                    height: "35px",
                    width: "35px",
                    cursor: "pointer",
                    color: "#0081B4",
                    "@media max-width:(480px)": {
                      height: "30px",
                      width: "30px",
                    },
                  }}
                />
              </SearchIconContainer>
            </Center>
          </SendContainer>
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
};

export default ContentContainer;
