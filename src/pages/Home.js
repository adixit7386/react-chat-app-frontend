import React from "react";
import Navbar from "../components/Navbar";
import Styled from "styled-components";
import ContentContainer from "../components/ContentContainer";
import SidebarContainer from "../components/SidebarContainer";
const Container = Styled.div`

`;
const Wrapper = Styled.div`
display:flex;
align-items:start;
justify-content:center;

`;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <SidebarContainer />
        <ContentContainer />
      </Wrapper>
    </Container>
  );
};

export default Home;
