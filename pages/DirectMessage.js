import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Chip } from 'react-native-paper';
import axios from 'axios';
import SockJS from 'sockjs-client';
import Stomp from 'webstomp-client';

export default function DirectMessage({ route, navigation }) {
  const [messages, setMessages] = useState([]);
  const { destination, roomId, user } = route.params;
  console.log(user)
  const SOCKET_URL = 'http://192.168.1.138:8080/ws';
  var socket = '';
  var stompClient = '';
  var connected = false;
  socket = new SockJS(SOCKET_URL);

  let i = 5;
  const contract = () => {
    alert("Generate contract");
  }
  const getChat = async () => {
    const data = await axios.get(`http://192.168.1.138:8080/api/v1/getMessage?roomId=${roomId}&userId=${parseInt(user)}`);
    console.log(data.data);
    setMessages((data.data));

  }
  useEffect(() => {
    getChat();

    navigation.setOptions({ title: destination });
    stompClient = Stomp.over(socket);
    stompClient.connect(
      {},
      (frame) => {
        connected = true;
        stompClient.subscribe(`/chat/private-${roomId}`, (val) => {
          const newMessage = JSON.parse(val.body);
          console.log(newMessage.createdAt);
          const object = [{
            _id: newMessage._id,
            createdAt: newMessage.createdAt,
            text: newMessage.text,
            user: {
              _id: newMessage.user._id
            }
          }]
          onReceiveMessage(object);
        });
      },
      (error) => {
        console.log(error);
        connected = false;
      }
    );
  }, []);
  // Chat pattern
  // Array [
  // Object {
  //   "_id": "1bceb2f7-4d0f-4c75-9131-d38c2124897e",
  //   "createdAt": 2022-04-16T14:00:58.791Z,
  //   "text": "ราร",
  //   "user": Object {
  //     "_id": 1,
  //   },
  // },
  // ]
  const onReceiveMessage = useCallback((messages = []) => {

    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const onSend = useCallback((messages = []) => {
    console.log(messages);

    // setMessages((previousMessages) =>
    //   GiftedChat.append(previousMessages, messages)
    // );
    stompClient.send(`/app/send-${roomId}`, JSON.stringify(messages[0]));
  }, []);

  return (
    <GiftedChat
      messages={messages}
      isTyping={true}
      onSend={(message) => {
        onSend(message)
      }}
      user={{
        _id: user,
      }}
    />
  );
}
