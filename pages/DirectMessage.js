import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Chip } from 'react-native-paper';
import axios from 'axios';
import SockJS from 'sockjs-client';
import Stomp from 'webstomp-client';
import API from '../env/API';
import { v4 as uuidv4 } from 'uuid';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';
export default function DirectMessage({ route, navigation }) {
  const [messages, setMessages] = useState([]);
  const { destination, roomId, user, data } = route.params;
  const SOCKET_URL = `http://172.20.10.2:8080/ws`;
  var socket = '';
  var stompClient = '';
  var connected = false;
  socket = new SockJS(SOCKET_URL);

  let i = 5;
  const contract = () => {
    alert("Generate contract");
  }
  const uuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  const getChat = async () => {

    let messages = await API.getChat(roomId, user);
    if (data !== undefined) {
      let systemMessage = {
        _id: uuid(),
        text: 'ข้อความจากระบบ',
        createdAt: new Date(),
        quickReplies: {
          type: 'radio', // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: '😋 สนใจสินค้า ',
              text: '😋 สนใจ ' + data.name,
              user: {
                _id: user
              }
            },
            {
              title: '👋 ต้องกาติดต่อเพิ่มเติม',
              text: '👋 ต้องกาติดต่อเพิ่มเติม',
              user: {
                _id: user
              }
            },
          ],
        },
        user: {
          _id: 10016,
          name: 'System',
        },
      }
      setMessages([...messages, systemMessage].reverse());
    } else {
      setMessages([...messages].reverse());
    }
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
          const object = [{
            _id: newMessage._id,
            createdAt: newMessage.createdAt,
            text: newMessage.text,
            user: {
              _id: newMessage.user._id,
              name:'asdasdasdqwe'
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

    stompClient.send(`/app/send-${roomId}`, JSON.stringify(messages[0]));
  }, []);

  return (
    <GiftedChat
      messages={messages}
      isTyping={true}
      onQuickReply={(message) => {
        let temp = [
          {
            _id: uuid(),
            createdAt: new Date(),
            user: {
              _id: user
            },
            text: message[0].text,
          },
        ]
        onSend(temp);
      }}
      onSend={(message) => {
        onSend(message)
      }}
      user={{
        _id: user,
      }}
    />
  );
}
