import React from "react";
import Navbar from "../components/Navbar";
import Styled from "styled-components";
import ContentContainer from "../components/ContentContainer";
import SidebarContainer from "../components/SidebarContainer";
import SearchBar from "../components/SearchBar";
import CreateGroup from "../components/CreateGroup";

import { useSelector } from "react-redux";

const Container = Styled.div`
`;
const Wrapper = Styled.div`
display:flex;
align-items:start;
justify-content:center;
`;

const Home = () => {
  const createGroup = useSelector((state) => state.creategroup.group);
  return (
    <Container>
      {createGroup && <CreateGroup />}
      <SearchBar />

      <Navbar />
      <Wrapper>
        <SidebarContainer />
        <ContentContainer />
      </Wrapper>
    </Container>
  );
};

export default Home;
