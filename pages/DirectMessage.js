import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, KeyboardAvoidingView, Modal, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { GiftedChat, InputToolbar, Send, Actions } from 'react-native-gifted-chat';
import { Chip } from 'react-native-paper';
import axios from 'axios';
import SockJS from 'sockjs-client';
import Stomp from 'webstomp-client';
import API from '../env/API';
import { v4 as uuidv4 } from 'uuid';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Input } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Contract } from './FirstContract';

export default function DirectMessage({ route, navigation }) {
  const [messages, setMessages] = useState([]);
  const [isInputPressed, setIsInputPressed] = useState(false);
  const [contractModalShow, setContractModalShow] = useState(false);
  const [newContract, setNewContract] = useState();
  const { destination, roomId, user, data } = route.params;
  const SOCKET_URL = `${API.domain}/ws`;
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
    console.log(newContract);
  }, [newContract]);

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
              name: 'asdasdasdqwe'
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
      // renderSend={(props) => }
      renderInputToolbar={(props) =>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <InputToolbar
            {...props}
            containerStyle={{
              borderRadius: "40%",
            }}
          />
        </KeyboardAvoidingView>
      }
      renderActions={(props) => {
        return (
          <View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={contractModalShow}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setContractModalShow(!contractModalShow);
              }}
            >
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
              >
                <TouchableWithoutFeedback
                  onPress={() => {
                    setContractModalShow(!contractModalShow);
                  }}
                >
                  <View style={styles.centeredView}>
                    <View
                      style={{
                        width: Dimensions.get('window').width - 20,
                        height: Dimensions.get('window').height / 2,
                        backgroundColor: "white",
                        borderRadius: 20,
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 2
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5,
                      }}
                    >
                      <Contract />
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </KeyboardAvoidingView>
            </Modal>
            <Actions {...props} onPressActionButton={() => {
              navigation.navigate('firstContract', { setNewContract: (contract) => setNewContract(contract) })
            }}
            />
          </View>

        );
      }
      }
      messages={messages}
      isTyping={true}
      onQuickReply={(message) => {
        let newMessage = [
          {
            _id: uuid(),
            createdAt: new Date(),
            user: {
              _id: user
            },
            text: message[0].text,
          },
        ]
        onSend(newMessage);
      }
      }

      placeholder={"พิมพ์ข้อความ"}
      onSend={(message) => {
        onSend(message)
      }}
      user={{
        _id: user,
      }}
    />
  );
}



const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
})