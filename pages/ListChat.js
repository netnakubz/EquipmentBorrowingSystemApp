import React, { useEffect, useState } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Picker,
  Button
} from 'react-native';
// or any pure javascript modules available in npm
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DirectMessage from './DirectMessage.js';
import Chat from '../components/Chat';
import axios from "axios";

const Stack = createStackNavigator();

export default function ListChat() {
  const [rooms, setRoom] = useState([]);
  const [selectedValue, setSelectedValue] = useState(10001);

  const getListChat = async () => {
    const data = await axios.get(`http://192.168.1.138:8080/api/v1/getListChat?userId=${selectedValue}`);
    setRoom(data.data);
    // return newRoom = data.data[0];
    // setRoom(newRoom);
    // console.log(rooms);
  }

  const Room = ({ navigation }) => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Button title="10001" onPress={() => setSelectedValue(10001)} />
          <Button title="10002" onPress={() => setSelectedValue(10002)} />
          {rooms.map((room, index) => (
            <Chat props={room} user={selectedValue} key={index} navigation={navigation} />
          ))}
        </View>
      </ScrollView>
    );
  };
  useEffect(() => {
    getListChat();
  }, [selectedValue]);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="กล่องข้อความ" component={Room} />
        <Stack.Screen name="Chat" component={DirectMessage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  col: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  card: {
    padding: 10,
  },
  chatName: {
    fontWeight: 'bold',
  },
});
