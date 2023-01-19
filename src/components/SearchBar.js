import React from "react";
import Styled from "styled-components";
import { useSelector } from "react-redux";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../redux/sideReducer";
const ParentContainer = Styled.div`
position:absolute;
visibility:${(props) => (props.toggle === true ? "visible" : "hidden")};
width:100vw;
height:100vh;
z-index:5;
transition:all 1s ease;
`;

const Container = Styled.div`
height:100vh;
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
transition:all 0.5s ease;
box-shadow:0px 10px 20px grey;
margin-left:${(props) => (props.toggle === true ? "0px" : "-400px")};


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

const IconContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;
`;
const TitleContainer = Styled.div`
padding:0px 10px 0px 10px;
`;
const SpanSearch = Styled.span`
font-size:24px;
cursor:pointer;
color:grey;`;

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
width:50px;`;
const SearchBar = () => {
  let toggle = useSelector((state) => state.sidebar.toggle);
  console.log(toggle);
  const IconStyleSearch = {
    height: "35px",
    width: "35px",
    color: "grey",
    cursor: "pointer",
  };

  const dispatch = useDispatch();
  const handleClick = (e) => {
    if (e.target.classList.contains("parent")) {
      dispatch(toggleSidebar());
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
      <Container toggle={toggle}>
        <Wrapper>
          <ItemTop item={"head"}>
            <IconContainer>
              <SearchRoundedIcon
                onClick={() => dispatch(toggleSidebar())}
                style={IconStyleSearch}
              />
            </IconContainer>
            <TitleContainer>
              <SpanSearch onClick={() => dispatch(toggleSidebar())}>
                Search Users
              </SpanSearch>
            </TitleContainer>
          </ItemTop>
          <ItemTop item={"head"}>
            <Center>
              <InputContainer>
                <Input placeholder="Search Users" className="NavbarInput" />
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
          </ItemTop>
          <Item>
            <UserIconContainer>
              <Img
                src={"https://avatars.githubusercontent.com/u/92628841?v=4"}
              />
            </UserIconContainer>
            <UserDetails>
              <Heading>Nitin Kumar</Heading>
              <Br />
              <Username>nitinkumar@234.com</Username>
            </UserDetails>
          </Item>
          <Item>
            <UserIconContainer>
              <Img
                src={"https://avatars.githubusercontent.com/u/92628841?v=4"}
              />
            </UserIconContainer>
            <UserDetails>
              <Heading>Nitin Kumar</Heading>
              <Br />
              <Username>nitinkumar@234.com</Username>
            </UserDetails>
          </Item>
          <Item>
            <UserIconContainer>
              <Img
                src={"https://avatars.githubusercontent.com/u/92628841?v=4"}
              />
            </UserIconContainer>
            <UserDetails>
              <Heading>Nitin Kumar</Heading>
              <Br />
              <Username>nitinkumar@234.com</Username>
            </UserDetails>
          </Item>
          <Item>
            <UserIconContainer>
              <Img
                src={"https://avatars.githubusercontent.com/u/92628841?v=4"}
              />
            </UserIconContainer>
            <UserDetails>
              <Heading>Nitin Kumar</Heading>
              <Br />
              <Username>nitinkumar@234.com</Username>
            </UserDetails>
          </Item>
          <Item>
            <UserIconContainer>
              <Img
                src={"https://avatars.githubusercontent.com/u/92628841?v=4"}
              />
            </UserIconContainer>
            <UserDetails>
              <Heading>Nitin Kumar</Heading>
              <Br />
              <Username>nitinkumar@234.com</Username>
            </UserDetails>
          </Item>
          <Item>
            <UserIconContainer>
              <Img
                src={"https://avatars.githubusercontent.com/u/92628841?v=4"}
              />
            </UserIconContainer>
            <UserDetails>
              <Heading>Nitin Kumar</Heading>
              <Br />
              <Username>nitinkumar@234.com</Username>
            </UserDetails>
          </Item>
          <Item>
            <UserIconContainer>
              <Img
                src={"https://avatars.githubusercontent.com/u/92628841?v=4"}
              />
            </UserIconContainer>
            <UserDetails>
              <Heading>Nitin Kumar</Heading>
              <Br />
              <Username>nitinkumar@234.com</Username>
            </UserDetails>
          </Item>
          <Item>
            <UserIconContainer>
              <Img
                src={"https://avatars.githubusercontent.com/u/92628841?v=4"}
              />
            </UserIconContainer>
            <UserDetails>
              <Heading>Nitin Kumar</Heading>
              <Br />
              <Username>nitinkumar@234.com</Username>
            </UserDetails>
          </Item>
          <Item>
            <UserIconContainer>
              <Img
                src={"https://avatars.githubusercontent.com/u/92628841?v=4"}
              />
            </UserIconContainer>
            <UserDetails>
              <Heading>Nitin Kumar</Heading>
              <Br />
              <Username>nitinkumar@234.com</Username>
            </UserDetails>
          </Item>
          <Item>
            <UserIconContainer>
              <Img
                src={"https://avatars.githubusercontent.com/u/92628841?v=4"}
              />
            </UserIconContainer>
            <UserDetails>
              <Heading>Nitin Kumar</Heading>
              <Br />
              <Username>nitinkumar@234.com</Username>
            </UserDetails>
          </Item>
          <Item>
            <UserIconContainer>
              <Img
                src={"https://avatars.githubusercontent.com/u/92628841?v=4"}
              />
            </UserIconContainer>
            <UserDetails>
              <Heading>Nitin Kumar</Heading>
              <Br />
              <Username>nitinkumar@234.com</Username>
            </UserDetails>
          </Item>
          <Item>
            <UserIconContainer>
              <Img
                src={"https://avatars.githubusercontent.com/u/92628841?v=4"}
              />
            </UserIconContainer>
            <UserDetails>
              <Heading>Nitin Kumar</Heading>
              <Br />
              <Username>nitinkumar@234.com</Username>
            </UserDetails>
          </Item>
          <Item>
            <UserIconContainer>
              <Img
                src={"https://avatars.githubusercontent.com/u/92628841?v=4"}
              />
            </UserIconContainer>
            <UserDetails>
              <Heading>Nitin Kumar</Heading>
              <Br />
              <Username>nitinkumar@234.com</Username>
            </UserDetails>
          </Item>
          <Item>
            <UserIconContainer>
              <Img
                src={"https://avatars.githubusercontent.com/u/92628841?v=4"}
              />
            </UserIconContainer>
            <UserDetails>
              <Heading>Nitin Kumar</Heading>
              <Br />
              <Username>nitinkumar@234.com</Username>
            </UserDetails>
          </Item>
          <Item>
            <UserIconContainer>
              <Img
                src={"https://avatars.githubusercontent.com/u/92628841?v=4"}
              />
            </UserIconContainer>
            <UserDetails>
              <Heading>Nitin Kumar</Heading>
              <Br />
              <Username>nitinkumar@234.com</Username>
            </UserDetails>
          </Item>
          <Item>
            <UserIconContainer>
              <Img
                src={"https://avatars.githubusercontent.com/u/92628841?v=4"}
              />
            </UserIconContainer>
            <UserDetails>
              <Heading>Nitin Kumar</Heading>
              <Br />
              <Username>nitinkumar@234.com</Username>
            </UserDetails>
          </Item>
          <Item>
            <UserIconContainer>
              <Img
                src={"https://avatars.githubusercontent.com/u/92628841?v=4"}
              />
            </UserIconContainer>
            <UserDetails>
              <Heading>Nitin Kumar</Heading>
              <Br />
              <Username>nitinkumar@234.com</Username>
            </UserDetails>
          </Item>
          <Item>
            <UserIconContainer>
              <Img
                src={"https://avatars.githubusercontent.com/u/92628841?v=4"}
              />
            </UserIconContainer>
            <UserDetails>
              <Heading>Nitin Kumar</Heading>
              <Br />
              <Username>nitinkumar@234.com</Username>
            </UserDetails>
          </Item>
          <Item>
            <UserIconContainer>
              <Img
                src={"https://avatars.githubusercontent.com/u/92628841?v=4"}
              />
            </UserIconContainer>
            <UserDetails>
              <Heading>Nitin Kumar</Heading>
              <Br />
              <Username>nitinkumar@234.com</Username>
            </UserDetails>
          </Item>
          <Item>
            <UserIconContainer>
              <Img
                src={"https://avatars.githubusercontent.com/u/92628841?v=4"}
              />
            </UserIconContainer>
            <UserDetails>
              <Heading>Nitin Kumar</Heading>
              <Br />
              <Username>nitinkumar@234.com</Username>
            </UserDetails>
          </Item>
          <Item>
            <UserIconContainer>
              <Img
                src={"https://avatars.githubusercontent.com/u/92628841?v=4"}
              />
            </UserIconContainer>
            <UserDetails>
              <Heading>Nitin Kumar</Heading>
              <Br />
              <Username>nitinkumar@234.com</Username>
            </UserDetails>
          </Item>
        </Wrapper>
      </Container>
    </ParentContainer>
  );
};

export default SearchBar;
