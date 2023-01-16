import React, { useState } from "react";
import Styled from "styled-components";

const Container = Styled.div`
position:absolute;
height:50px;
width:300px;
background-color:gray;
z-index:3;
top:20px;
right:20px;
visibility:${(props) => (props.visibility === true ? "visible" : "hidden")};
border-radius:10px;
display:flex;align-items:center;
justify-content:center;
`;
const Heading = Styled.span`
font-size:20px;
`;
const Toast = ({ message }) => {
  const [visible, setVisible] = useState(true);
  setTimeout(() => {
    setVisible(false);
  }, 1000);
  return <Container visibility={visible}>{message}</Container>;
};

export default Toast;
