import React from "react";
import Navbar from "../components/Navbar";
import Styled from "styled-components";
import ContentContainer from "../components/ContentContainer";
import SidebarContainer from "../components/SidebarContainer";
import SearchBar from "../components/SearchBar";
import CreateGroup from "../components/CreateGroup";
import { Mobile } from "../responsive";
import LeftSideContainer from "../components/LeftSideContainer";
import { useSelector } from "react-redux";
const Container = Styled.div`
`;
const Wrapper = Styled.div`

display:flex;
align-items:start;
justify-content:center;
width:100%;
${Mobile({ width: "100%" })};
`;

const Home = () => {
  const createGroup = useSelector((state) => state.creategroup.group);

  return (
    <Container>
      {createGroup && <CreateGroup />}
      {/* <SearchBar /> */}

      <Navbar />

      <Wrapper>
        {/* <SidebarContainer /> */}
        <LeftSideContainer />
        <ContentContainer />
      </Wrapper>
    </Container>
  );
};

export default Home;
