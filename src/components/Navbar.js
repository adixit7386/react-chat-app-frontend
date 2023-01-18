import React from "react";
import Styled from "styled-components";
// import HelpIcon from "@mui/icons-material/Help";
// import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MailIcon from "@mui/icons-material/Mail";
import ForumIcon from "@mui/icons-material/Forum";
const Container = Styled.div`
display:flex;
align-items:center;
background-color:white;
position:sticky;
z-index:2;
top:0px;
background-color:#f8f9fa;
justify-content:center;
height:59px;
padding-left:20px;
padding-right:20px;
border-bottom:1px solid lightgray;
`;
const Wrapper = Styled.div`
flex:1;
display:flex;
align-items:center;

justify-content:center;
`;
const Left = Styled.div`
flex:1;
display:flex;
align-items:center;;
justify-content:flex-start;

`;

const IconContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;
`;
const TitleContainer = Styled.div`
padding:0px 10px 0px 10px;


`;
const Title = Styled.h1`
margin: 0px auto 0px auto;
font-size:32px;`;
const Span = Styled.span`
color:#0081B4;
font-size:32px;
`;
// const Center = Styled.div`
// flex:1.3;
// display:flex;
// align-items:center;
// justify-content:center;`;

// const InputContainer = Styled.div`
// flex:9;
// height:35px;
// display:flex;
// align-items:center;
// jusify-content:center;
// border:solid 2px gray;
// border-top-left-radius:50px;
// border-bottom-left-radius:50px;
// padding:2px 20px;

// `;
// const Input = Styled.input`
// background-color:white;
// font-size: 18px;
// font-size: 18px;
// flex: 1;
// border:none;

// height: 30px;
// outline:none;

// &:focus{
//  font-size: 18px;
// font-size: 18px;
// flex: 1;
// border:none;

// height: 35px;
// outline:none;
// }

// `;

// const SearchIconContainer = Styled.div`
// height:35px;
// width:35px;
// border:solid 2px gray;
// border-left:none;
// display:flex;
// align-items:center;
// jusify-content:center;
// border-top-right-radius:50px;
// border-bottom-right-radius:50px;
// padding:2px 4px;
// `;

const Right = Styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;`;

const UserContainer = Styled.div`
display:flex;
align-items:center;
padding:5px 10px;
border-radius:50px;
cursor:pointer;
border:solid 1px gray;
`;

const UserNameContainer = Styled.span`
`;
const Img = Styled.img`
height:30px;
width:30px;
border-radius:50%;
margin-left:10px;
`;

const DarkModeIconContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;
padding:5px 10px;`;
const MailIconContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;
padding:5px 10px;`;

const Navbar = () => {
  const DarkMode = false;

  const IconStyle = {
    height: "35px",
    width: "35px",
    color: "#0081B4",
  };
  const IconStyleDarkMode = {
    height: "30px",
    width: "30px",
    color: "white",
    cursor: "pointer",
  };
  const IconStyleLightMode = {
    height: "30px",
    width: "30px",
    color: "black",
    cursor: "pointer",
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <IconContainer>
            <ForumIcon style={IconStyle} />
          </IconContainer>
          <TitleContainer>
            <Title>
              live<Span>Chat</Span>
            </Title>
          </TitleContainer>
        </Left>
        {/* <Center>
          <InputContainer>
            <Input placeholder="Search Products" className="NavbarInput" />
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
        </Center> */}
        <Right>
          <MailIconContainer>
            <MailIcon
              style={DarkMode ? IconStyleDarkMode : IconStyleLightMode}
            />
          </MailIconContainer>
          <DarkModeIconContainer>
            <DarkModeIcon
              style={DarkMode ? IconStyleDarkMode : IconStyleLightMode}
            />
          </DarkModeIconContainer>
          <UserContainer clicked={true}>
            <UserNameContainer>Aditya</UserNameContainer>
            <Img
              src={
                "https://cdn4.iconfinder.com/data/icons/man-user-human-person-business-profile-avatar/100/20-1User_13-512.png"
              }
            />
          </UserContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
