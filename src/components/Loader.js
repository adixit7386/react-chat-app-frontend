import React from "react";
import Styled from "styled-components";

const Container = Styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:center;`;
const Loaders = Styled.div`
margin-top:20px;
margin-bottom:20px;
border: 5px solid #f3f3f3; /* Light grey */
  border-top: 5px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 0.5s linear infinite;
  
  @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;

const Loader = () => {
  return (
    <Container>
      <Loaders></Loaders>
    </Container>
  );
};

export default Loader;
