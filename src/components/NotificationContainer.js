import React from "react";
import Styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { removeMessage } from "../redux/notificationReducer";
import { setActiveChat } from "../redux/activeChatReducer";
import { toggleNotificationBar } from "../redux/notificationBarReducer";
const ParentContainer = Styled.div`
position:absolute;
top:0px;
left:0px;
z-index:5;
display:flex;
align-items:start;
visibility:${(props) => (props.isActive ? "visible" : "hidden")};

justify-content:flex-end;


height:100vh;
width:100vw;

transition:background-color 0.5s ease;

`;
// width:100vw;
// visibility:${(props) => (props.toggle ? "visible" : "hidden")};

const Container = Styled.div`

background-color:white;
max-height:500px;
height:content-fit;
overflow:scroll;
border-radius:10px;
margin-top:70px;
margin-right:70px;
box-shadow:0px 0px 20px grey;
width:300px;
&::-webkit-scrollbar{
  display:none;
}
`;

const NewNotification = Styled.div`

padding:10px;
`;
const Message = Styled.h2`
margin:0px;
font-size:18px;
cursor:pointer;
color:grey;
`;
const PersonContainer = ({ toggle }) => {
  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.notificationbar.toggle);
  const notification = useSelector((state) => state.notification.notification);

  const handleClick = (item) => {
    dispatch(removeMessage(item));
    dispatch(setActiveChat(item.Chat));
  };
  const toggleClick = (e) => {
    if (e.target.classList.contains("parent")) {
      dispatch(toggleNotificationBar());
    }
  };

  return (
    <ParentContainer
      isActive={isActive}
      onClick={(e) => {
        toggleClick(e);
      }}
      className="parent"
    >
      <Container>
        {notification.map((item) => (
          <NewNotification
            onClick={() => {
              handleClick(item);
            }}
          >
            {/* {item?.content} */}
            <Message>New Message from {item?.sender?.name}</Message>
          </NewNotification>
        ))}
      </Container>
    </ParentContainer>
  );
};

export default PersonContainer;
