import React, { useState } from "react";
import Styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Toast from "./Toast";
import axios from "axios";

import { setActiveChat } from "../redux/activeChatReducer";
import { toggleCreateGroup } from "../redux/createGroupReducer";

import CloseIcon from "@mui/icons-material/Close";
const ParentContainer = Styled.div`
position:absolute;
top:0px;
left:0px;
z-index:5;
background-color:${(props) =>
  props.toggle ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.09)"};
height:100vh;
width:100vw;
display:flex;
align-items:center;
justify-content:center;
transition:background-color 0.5s ease;

`;
// visibility:${(props) => (props.toggle ? "visible" : "hidden")};

const Container = Styled.div`
background-color:white;
height:content-fit;
border-radius:10px;
padding:10px 20px;
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

// const ImageContainer = Styled.div`
// display:flex;
// align-items:center;
// height:35%;
// display:flex;
// align-items:center;
// justify-content:center;
// justify-content:center;`;

const AddedUsers = Styled.div`
flex:1;
overflow:scroll;
display:flex;
&::-webkit-scrollbar{
    display:none;
}
padding:7px 12px;`;

const UserButton = Styled.div`
display:flex;
padding:3px 5px;
width:content-fit;
border-radius:5px;
box-shadow:0px 0px 5px grey;
margin-right:10px;
`;

const NameContainer = Styled.div`
width:content-fit;`;
const Span = Styled.span``;
const CloseContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;`;

const SearchUserContainer = Styled.div`
max-height:25vh;
height:content-fit;
padding:7px 12px;
overflow:scroll;
&::-webkit-scrollbar{
    display:none;
}

align-items:start;
flex-direction:column;
justify-content:center;
flex:1;
`;
const InputContainer = Styled.div`
flex:1;
display:flex;
align-items:center;
padding: 7px 12px;
justify-content:center;`;

const Input = Styled.input`
width:80%;
font-size:18px;
border-radius:5px;
border:solid 1px grey;
padding:3px 5px;
height:35px;

&:focus{
    outline:none;
}`;

const ButtonContainer = Styled.div`
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
const UserIconContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;`;
const UserDetails = Styled.div`
flex:3;
flex-direction:column;`;
const SecondHeading = Styled.span`
font-size:22px;
color:black;`;
const Br = Styled.br``;
const Username = Styled.span`
font-size:18px;
color:grey;`;
const Img = Styled.img`
height:50px ;
border-radius:50%;
width:50px;`;
const Item = Styled.div`
flex:1;
width:80%;
margin:0 auto;
cursor:pointer;
&:hover{
  box-shadow:0px 0px 10px grey;
}
transition:all 0.5s ease;
border-radius:10px;
padding:5px 12px;

display:flex;
align-items:center;
justify-content:center;


`;

const CreateGroup = ({ toggle }) => {
  const User = useSelector((state) => state.user.currentuser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [isnotification, setIsNotification] = useState(false);
  const [notification, setNotification] = useState("");
  const [addedUsers, setAddedUsers] = useState([]);
  const [ChatName, setChatName] = useState("");
  let usersArray = [];
  let group = {};
  addedUsers.map((item) => usersArray.push(item.userId));
  const ManageNotification = (message) => {
    let msg = message;
    setTimeout(() => {
      setIsNotification(true);
      setNotification(msg);
    }, 1000);
    setIsNotification(false);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
    handleClickSearch();
  };
  const handleClickSearch = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/user?search=${search}`,
        { headers: { Authorization: `Bearer ${User.accessToken}` } }
      );
      setData(data);
      if (data.length === 0) {
        ManageNotification("No User Found");
      }
    } catch (error) {
      ManageNotification("Search Failed");
    }
  };
  const handleClick = ({ userId, name }) => {
    setAddedUsers((prev) =>
      prev.find((item) => item.userId === userId)
        ? prev
        : [...prev, { userId, name }]
    );
  };
  const deleteUser = ({ userId, name }) => {
    setAddedUsers((users) => {
      const [{ userId: userId, name: name }, ...others] = users;
      return others;
    });
    // setAddedUsers((users) =>
    //   users.splice(users.indexOf({ userId: userId, name: name }), 1)
    // );
  };

  const handleCreateGroup = async () => {
    group.isGroupChat = true;
    group.users = JSON.stringify(usersArray);
    group.ChatName = ChatName;

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/chat/group",
        group,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${User.accessToken}`,
          },
        }
      );
      dispatch(setActiveChat(data));

      dispatch(toggleCreateGroup());
      navigate("/");
    } catch (err) {
      ManageNotification("couldn't create a chat");
    }
  };
  const handleToggle = (e) => {
    if (e.target.classList.contains("parent")) {
      dispatch(toggleCreateGroup());
    }
  };

  return (
    <ParentContainer
      className="parent"
      onClick={(e) => {
        handleToggle(e);
      }}
      toggle={toggle}
    >
      {isnotification && <Toast message={notification} />}
      <Container>
        <HeadingContainer>
          <Heading>Create Group Chat</Heading>
        </HeadingContainer>
        <AddedUsers>
          {addedUsers.length > 0 &&
            addedUsers?.map((item) => (
              <UserButton>
                <NameContainer>
                  <Span>{item.name}</Span>
                </NameContainer>
                <CloseContainer>
                  <CloseIcon
                    onClick={() =>
                      deleteUser({ userId: item._id, name: item.name })
                    }
                  />
                </CloseContainer>
              </UserButton>
            ))}
        </AddedUsers>

        <InputContainer>
          <Input
            placeholder="Enter Group Name"
            onChange={(e) => setChatName(e.target.value)}
          />
        </InputContainer>
        <InputContainer onChange={(e) => handleChange(e)}>
          <Input placeholder="Enter Users" />
        </InputContainer>
        {search && (
          <SearchUserContainer>
            {data?.map((item) => (
              <Item
                onClick={() => {
                  handleClick({ userId: item._id, name: item.name });
                }}
              >
                <UserIconContainer>
                  <Img src={item.image} />
                </UserIconContainer>
                <UserDetails>
                  <SecondHeading>{item.name}</SecondHeading>
                  <Br />
                  <Username>{item.username.slice(0, 18)}</Username>
                </UserDetails>
              </Item>
            ))}
          </SearchUserContainer>
        )}
        <ButtonContainer>
          <Button onClick={handleCreateGroup}>Create</Button>
        </ButtonContainer>
      </Container>
    </ParentContainer>
  );
};

export default CreateGroup;
