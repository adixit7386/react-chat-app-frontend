import React, { useEffect, useState } from "react";
import axios from "axios";
const ChatPage = () => {
  const [data, setData] = useState([]);
  const getChats = async () => {
    const res = await axios.get("http://localhost:5000/api/chat");
    setData(res.data);
  };

  useEffect(() => {
    getChats();
  }, []);

  return (
    <div>
      {data.map((items) => (
        <div>{items.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
