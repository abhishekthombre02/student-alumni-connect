import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import Messages from '../Messages'
import InfoBar from '../InfoBar'
import Input from '../Input'
import './chat.css';
import useQuery from "../../Utils/query";

const ENDPOINT = 'localhost:5001';

let socket;

const Chat = () => {
  const query= useQuery()
  const currUserName=query.get("name")
  const currRoomName=query.get("room")
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if(!currUserName || !currRoomName)  return;
    socket = io(ENDPOINT);

    setRoom(currUserName);
    setName(currRoomName)
    socket.emit('join', { name:currUserName, room:currRoomName }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, currUserName,currRoomName]);

  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <div className="outerContainer">
      <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
}

export default Chat;