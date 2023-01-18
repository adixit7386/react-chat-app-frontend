import React, { useState, useEffect } from "react";
import Styled from "styled-components";

const ParentContainer = Styled.div`
position:absolute;
height:100vh;
width:100vw;
visibility:${(props) => (props.visibility === true ? "visible" : "hidden")};
overflow:hidden;
display:flex;
justify-content:flex-end;

`;
const Container = Styled.div`
position:absolute;
height:50px;
width:300px;
color:white;
background-color:#C64343;
z-index:3;
top:20px;
right:${(props) => (props.visibility ? "20px" : "-600px")};
transition:all 0.5s ease;

border-radius:5px;

display:flex;align-items:center;
justify-content:center;
`;
// const Heading = Styled.span`
// font-size:20px;
// `;
const Toast = ({ message }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
      setFalse();
    }, 100);
  }, []);

  const setFalse = () => {
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  };
  return (
    <ParentContainer visibility={visible}>
      <Container visibility={visible}>{message}</Container>
    </ParentContainer>
  );
};

export default Toast;
