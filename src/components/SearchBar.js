import React, { useState } from "react";
import Styled from "styled-components";
import { useSelector } from "react-redux";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../redux/sideReducer";
import Loader from "../components/Loader";
import Toast from "../components/Toast";
import axios from "axios";
import { validURL } from "../config/chatLogics";

import { toggleCreateGroup } from "../redux/createGroupReducer";
import { setActiveChat } from "../redux/activeChatReducer";
import { toggleUpdateChat } from "../redux/updateChats";

const ParentContainer = Styled.div`
background-color:rgba(0,0,0,0.2);
flex:2;
top:60px;
height:calc(100vh - 110px);
overflow:scroll;
&::-webkit-scrollbar {
  display: none;
};
background-color:#f8f9fa;
display:flex;
align-items:start;
justify-content:center;
`;

const Container = Styled.div`

width:400px;
background-color:#f8f9fa;
display:flex;
align-items:start;
justify-content:center;
position:sticky;
overflow:scroll;
&::-webkit-scrollbar{
  display:none;
}
top:0px;
transition:all 0.5s ease-out;



`;

const Wrapper = Styled.div`
width:80%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;

const Item = Styled.div`
flex:1;
width:100%;
cursor:pointer;
&:hover{
  box-shadow:0px 0px 10px grey;
}
transition:all 0.5s ease;
border-radius:10px;
padding:5px 12px;
margin-top:10px;
display:flex;
align-items:center;
justify-content:center;


`;

const ItemTop = Styled.div`
flex:1;
width:100%;
cursor:pointer;

border-radius:10px;
padding:5px 12px;
margin-top:10px;
display:flex;
align-items:center;
justify-content:center;



`;
const Center = Styled.div`

flex:1;
display:flex;


z-index:4;

align-items:center;
justify-content:center;

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
const Centers = Styled.div`

flex:1;
display:flex;
position:sticky;
top:20px;
z-index:4;
align-items:center;
justify-content:center;
margin-right:10px;
`;
const Input = Styled.input`
background-color:#f8f9fa;
font-size: 18px;
font-size: 18px;
flex: 1;

border:none;
width:150px;
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

const UserIconContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;`;
const UserDetails = Styled.div`
flex:3;
flex-direction:column;`;
const Heading = Styled.span`
font-size:22px;
color:black;`;
const Br = Styled.br``;
const Username = Styled.span`
font-size:18px;
color:grey;`;
const Img = Styled.img`
height:50px ;
border-radius:50%;
object-fit:cover;
width:50px;`;

const Headings = Styled.div`
margin:0px;
font-size:20px;
color:grey;
`;
const SearchBar = () => {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.user.currentUser);
  let toggle = useSelector((state) => state.sidebar.toggle);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const createChat = async (userId) => {
    try {
      const { data } = await axios.post(
        "https://livechat-backend.onrender.com/api/chat/",
        { userId: userId },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${User.accessToken}`,
          },
        }
      );

      dispatch(toggleSidebar());
      dispatch(setActiveChat(data));
      dispatch(toggleUpdateChat());
    } catch (err) {
      console.log(err);
      ManageNotification("couldn't create a chat");
    }
  };

  const handleClick = (e) => {
    if (e.target.classList.contains("parent")) {
      dispatch(toggleSidebar());
    }
  };
  let user;

  if (localStorage.getItem("persist:root") !== undefined) {
    if (JSON.parse(localStorage?.getItem("persist:root"))?.user !== undefined) {
      user = JSON.parse(
        JSON.parse(localStorage?.getItem("persist:root"))?.user
      )?.currentUser;
    }
  }
  const [isnotification, setIsNotification] = useState(false);
  const [notification, setNotification] = useState("");
  const ManageNotification = (message) => {
    let msg = message;
    setTimeout(() => {
      setIsNotification(true);
      setNotification(msg);
    }, 1000);
    setIsNotification(false);
  };
  const handleClickSearch = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://livechat-backend.onrender.com/api/user?search=${search}`,
        { headers: { Authorization: `Bearer ${user.accessToken}` } }
      );
      setData(data);
      if (data.length === 0) {
        ManageNotification("No User Found");
      }
      setLoading(false);
    } catch (error) {
      ManageNotification("Search Failed");
    }
  };

  return (
    <ParentContainer
      toggle={toggle}
      className="parent"
      onClick={(e) => {
        handleClick(e);
      }}
    >
      {isnotification && <Toast message={notification} />}
      <Container toggle={toggle}>
        <Wrapper>
          <ItemTop>
            <Centers>
              <Headings onClick={() => dispatch(toggleCreateGroup())}>
                Create new Group
              </Headings>
            </Centers>
          </ItemTop>

          <ItemTop item={"head"}>
            <Center>
              <InputContainer>
                <Input
                  placeholder="Search Users"
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyPress={(event) => {
                    if (event.key === "Enter") {
                      handleClickSearch();
                    }
                  }}
                  className="NavbarInput"
                />
              </InputContainer>
              <SearchIconContainer>
                <SearchRoundedIcon
                  onClick={handleClickSearch}
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
          </ItemTop>
          {loading && <Loader></Loader>}
          {data.length > 0
            ? data?.map((item) => (
                <Item
                  onClick={() => {
                    createChat(item._id);
                  }}
                >
                  <UserIconContainer>
                    <Img
                      src={
                        validURL(item.image)
                          ? item.image
                          : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      }
                    />
                  </UserIconContainer>
                  <UserDetails>
                    <Heading>{item.name}</Heading>
                    <Br />
                    <Username>{item.username.slice(0, 18)}</Username>
                  </UserDetails>
                </Item>
              ))
            : search &&
              loading && (
                <ItemTop>
                  <Centers>
                    <Headings onClick={() => dispatch(toggleCreateGroup())}>
                      No User Found
                    </Headings>
                  </Centers>
                </ItemTop>
              )}
        </Wrapper>
      </Container>
    </ParentContainer>
  );
};

export default SearchBar;
