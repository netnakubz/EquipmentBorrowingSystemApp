import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Room from "./Room";
import DirectMessage from "./DirectMessage";

const ChatStack = createNativeStackNavigator();
export default function ListChat() {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen component={Room} name="Room" />
      <ChatStack.Screen component={DirectMessage} name="DirectMessage" />
    </ChatStack.Navigator>
  );
}
