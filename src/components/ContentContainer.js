import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import PersonContainer from "../components/PersonContainer";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { togglePersonBar } from "../redux/personReducer";
import { getSender } from "../config/chatLogics";
import UpdateGroup from "./UpdateGroup";
import { resetActiveChat } from "../redux/activeChatReducer";
import io from "socket.io-client";
import { addMessage } from "../redux/notificationReducer";
import { Mobile } from "../responsive";
import axios from "axios";
import { validURL } from "../config/chatLogics";
import Loader from "../components/Loader";

const Container = Styled.div`
flex:5;
height:calc(100vh - 60px);

${Mobile((props) =>
  props.active ? { visibility: "visible" } : { display: "none", flex: "" }
)};
`;
const Wrapper = Styled.div`
padding:20px;
padding-top:0px;
height:calc(100vh - 100px);


`;
const HeadContainer = Styled.div`
height:50px;
display:flex;
padding:10px;
align-items:center;
justify-content:flex-start;
`;

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
align-items:start;
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

width:90%;
display:flex;
align-items:center;
justify-content:center;`;

const InputContainer = Styled.div`
flex:9;
height:45px;
display:flex;
align-items:center;
jusify-content:center;
border:solid 1px gray;
border-top-left-radius:10px;
border-bottom-left-radius:10px;
padding:2px 20px;
background-color:white;
`;
const Input = Styled.input`
background-color:#f8f9fa;
font-size: 18px;
font-size: 18px;
flex: 1;
width:80%;
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
background-color:white;

`;

const SearchIconContainer = Styled.div`
background-color:white;
height:45px;
width:35px;
border:solid 1px gray;
border-left:none;
display:flex;
align-items:center;
jusify-content:center;
border-top-right-radius:10px;
border-bottom-right-radius:10px;
padding:2px 4px;
`;
const MessageContainerSender = Styled.div`
width:100%;
height:content-fit;
display:flex;
align-items:center;
margin:10px 0px;
justify-content:flex-start;


`;
const MessageContainer = Styled.div`
width:100%;
height:content-fit;
display:flex;
align-items:center;
justify-content:flex-end;
margin:10px 0px;
`;
const SenderMessage = Styled.div`
width:content-fit;
max-width:80%;
margin-left:20px;
background-color:white;
border-radius:10px;
box-shadow:0px 0px 10px lightgrey;
padding:3px 5px;

background-color:#E0FFFF;
`;
const UserMessage = Styled.div`
width:content-fit;
max-width:80%;
margin-right:20px;
box-shadow:0px 0px 10px lightgrey;
border-radius:10px;
background-color:white;
padding:3px 5px;

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
color:green;`;
const NameTextSender = Styled.span`
font-size:17px;
color:red;`;
const TimeText = Styled.span`
font-size:15px;
color:grey;`;
const MessageText = Styled.span`
font-size:18px;`;

const UserIconContainer = Styled.div`
display:flex;
align-items:center;
cursor:pointer;
width:55px;
height:55px;
justify-content:center;
`;
const UserDetails = Styled.div`
cursor:pointer;
flex-direction:column;`;
const Heading = Styled.span`
font-size:24px;
font-weight:500;

color:black;`;

const Img = Styled.img`

height:45px ;
border-radius:50%;
object-fit:cover;
width:45px;`;

const SelectChatMessage = Styled.h1`
font-size:25px;
color:lightgrey;
margin:0 auto;
`;

const ENDPOINT = "https://livechat-backend.onrender.com/";
var socket, selectedChatCompare;
const ContentContainer = () => {
  const toggleBar = useSelector((state) => state.personbar.toggle);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification.notification);
  const activeChat = useSelector((item) => item.activechat?.active);
  const User = useSelector((state) => state.user.currentUser);
  const [socketConnected, setSocketConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const handleClick = () => {
    dispatch(togglePersonBar());
  };

  const [message, setMessage] = useState("");
  const [fetchmessage, setFetchmessage] = useState([]);
  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", User);
    socket.on("connected", () => {
      setSocketConnected(true);
    });
  }, [User]);
  useEffect(() => {
    socket.on("typing", (activeChatId) => {
      if (activeChat?._id === activeChatId) {
        setIsTyping(true);
      } else {
        setIsTyping(false);
      }
    });
    socket.on("stop typing", (activeChatId) => {
      if (activeChat?._id === activeChatId) {
        setIsTyping(false);
      }
    });
  });
  const fetchMessage = async () => {
    try {
      const { data } = await axios.get(
        `https://livechat-backend.onrender.com/api/message/${activeChat?._id}`,
        {
          headers: {
            Authorization: `Bearer ${User.accessToken}`,
          },
        }
      );
      setFetchmessage(data);
      socket.emit("join chat", activeChat?._id);
      setLoading(false);
      setTimeout(() => {
        var elem = document.getElementById("data");

        elem.scrollTop = elem.scrollHeight;
      }, 100);
    } catch (error) {}
  };
  useEffect(() => {
    setLoading(true);
    fetchMessage();
    selectedChatCompare = activeChat;
  }, [activeChat]);

  useEffect(() => {
    socket.on("message received", (newMessageReceived) => {
      if (
        !selectedChatCompare ||
        selectedChatCompare?._id !== newMessageReceived?.Chat?._id
      ) {
        //notification
      } else {
        setFetchmessage([...fetchmessage, newMessageReceived]);
        setTimeout(() => {
          var elem = document.getElementById("data");

          elem.scrollTop = elem.scrollHeight;
        }, 100);
      }
    });
  });

  useEffect(() => {
    socket.on("message received", (newMessageReceived) => {
      if (
        !selectedChatCompare ||
        selectedChatCompare?._id !== newMessageReceived?.Chat?._id
      ) {
        if (!notification.includes(newMessageReceived)) {
          dispatch(addMessage([newMessageReceived, ...notification]));
        }
      }
    });
  }, [dispatch, notification]);
  const sendMessage = async () => {
    socket.emit("stop typing", activeChat?._id);
    if (message === "") {
      return;
    }
    let content = { chatId: activeChat?._id, message: message };

    try {
      const { data } = await axios.post(
        "https://livechat-backend.onrender.com/api/message/",
        content,
        {
          headers: {
            Authorization: `Bearer ${User.accessToken}`,
          },
        }
      );
      socket.emit("new message", data);
      fetchMessage();
      setMessage("");
      setTimeout(() => {
        var elem = document.getElementById("data");

        elem.scrollTop = elem.scrollHeight;
      }, 300);
    } catch (error) {
      console.log(error);
    }
  };
  const isSameUser = (fetchmessage, index) => {
    if (index === fetchmessage.length - 1) {
      return true;
    }
    if (fetchmessage[index].sender._id === fetchmessage[index + 1].sender._id) {
      return false;
    } else {
      return true;
    }
  };

  const typingHandler = (e) => {
    setMessage(e.target.value);
    if (!socketConnected) {
      return;
    }
    if (!typing) {
      setTyping(true);
      socket.emit("typing", activeChat?._id);
    }
    let lastTypingTime = new Date().getTime();
    var TimerLength = 3000;
    setTimeout(() => {
      var timeNow = new Date().getTime();
      var timeDiff = timeNow - lastTypingTime;

      if (timeDiff >= TimerLength && typing) {
        socket.emit("stop typing", activeChat?._id);
        setTyping(false);
      }
    }, TimerLength);
  };

  const IconStyle = {
    height: "35px",
    width: "35px",
    cursor: "pointer",
    marginRight: "10px",
  };
  const handleResetActiveChat = () => {
    dispatch(resetActiveChat());
  };
  return (
    <Container active={activeChat === null ? false : true}>
      <Wrapper>
        {activeChat?.isGroupChat === true ? (
          <UpdateGroup toggle={toggleBar} />
        ) : (
          <PersonContainer toggle={toggleBar}></PersonContainer>
        )}

        <HeadContainer>
          <ArrowBackIcon
            onClick={() => {
              handleResetActiveChat();
            }}
            style={IconStyle}
          />
          <UserDetails onClick={handleClick}>
            <Heading>
              {activeChat?.isGroupChat
                ? activeChat?.ChatName
                : getSender(User, activeChat?.users)}
            </Heading>
            {isTyping && socketConnected && (
              <h6 style={{ color: "green", margin: "0px" }}>typing...</h6>
            )}
          </UserDetails>
        </HeadContainer>
        <ContentWrapper>
          {activeChat ? (
            <>
              {loading ? (
                <Loader></Loader>
              ) : (
                <ChatContainer id="data">
                  {fetchmessage.map((item, index) => {
                    if (item.sender._id === User._id) {
                      return (
                        <MessageContainer>
                          <UserMessage>
                            <MessageDetail>
                              <NameText>You</NameText>
                              <TimeText>{item.createdAt.getTime}</TimeText>
                            </MessageDetail>
                            <MessageContent>
                              <MessageText>{item.content}</MessageText>
                            </MessageContent>
                          </UserMessage>
                          <UserIconContainer>
                            {isSameUser(fetchmessage, index) && (
                              <Img
                                src={
                                  validURL(item.sender.image)
                                    ? item.sender.image
                                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                }
                              />
                            )}
                          </UserIconContainer>
                        </MessageContainer>
                      );
                    } else {
                      return (
                        <MessageContainerSender>
                          <UserIconContainer>
                            {isSameUser(fetchmessage, index) && (
                              <Img
                                src={
                                  validURL(item.sender.image)
                                    ? item.sender.image
                                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                }
                              />
                            )}
                          </UserIconContainer>
                          <SenderMessage>
                            <MessageDetail>
                              <NameTextSender>
                                {item.sender.name}
                              </NameTextSender>
                              <TimeText>2.14 pm</TimeText>
                            </MessageDetail>
                            <MessageContent>
                              <MessageText>{item.content}</MessageText>
                            </MessageContent>
                          </SenderMessage>
                        </MessageContainerSender>
                      );
                    }
                  })}
                </ChatContainer>
              )}

              <SendContainer>
                <Center>
                  <InputContainer
                    onKeyPress={(event) => {
                      if (event.key === "Enter") {
                        sendMessage();
                      }
                    }}
                  >
                    <Input
                      value={message}
                      placeholder="Send Messages"
                      className="NavbarInput"
                      onChange={(e) => typingHandler(e)}
                    />
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
                      onClick={() => {
                        sendMessage();
                      }}
                    />
                  </SearchIconContainer>
                </Center>
              </SendContainer>
            </>
          ) : (
            <ChatContainer>
              <SelectChatMessage>
                Please Select a Chat to Continue
              </SelectChatMessage>
            </ChatContainer>
          )}
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
};

export default ContentContainer;
