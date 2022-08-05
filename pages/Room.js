import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Image, Button, Text, TouchableOpacity, Dimensions } from "react-native";
import Chat from "../components/Chat";
import axios from "axios";
import { Card } from 'react-native-paper';

const screenWidth = Dimensions.get('window').width;

import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import API from "../env/API";
export default function Room({ navigation }) {
    const [rooms, setRoom] = useState([]);
    const [selectedValue, setSelectedValue] = useState(10013);
    const deleteBtn = () => {
        console.log("delete")
    }
    const muteBtn = () => {
        console.log("mute");
    }
    const renderLeftActions = (progress, dragX) => {
        const trans = dragX.interpolate({
            inputRange: [0, 50, 100, 101],
            outputRange: [0, 0, 0, 1],
        });
        return (
            <View style={styles.rightBtn}>

                <View>
                    <TouchableOpacity
                        onPress={() => deleteBtn()}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            transform: [{ translateX: trans }]
                        }}
                    >
                        <View style={{
                            width: 60,
                            height: 40,
                            backgroundColor: "#FF0031",
                            borderRadius: 30,
                            justifyContent: 'center',
                        }}>
                            <Text
                                style={{
                                    textAlign: "center",
                                    margin: 'auto',
                                    color: 'white',
                                    fontSize: 18,
                                    fontWeight: "bold"
                                }}
                            >
                                ลบ
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => muteBtn()}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            transform: [{ translateX: trans }]
                        }}
                    >
                        <View style={{
                            width: 50,
                            height: 40,
                            backgroundColor: "#FED15C",
                            borderRadius: 30,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Ionicons name="notifications-off-outline" size={18} />
                        </View>
                    </TouchableOpacity>
                </View >
            </View >
        );
    }
    const getListChat = async () => {
        setRoom(await API.getListChat(selectedValue));
    };
    useEffect(() => {
        getListChat();
    }, [selectedValue]);
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <View style={{ flexDirection: 'row', justifyContent: "space-evenly" }}>
                    <TouchableOpacity onPress={() => setSelectedValue(10001)} style={{ width: "100%" }}>
                        <View style={{ backgroundColor: 'green', height: 100, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>10001</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedValue(10002)} style={{ width: "100%" }}>
                        <View style={{ backgroundColor: 'blue', height: 100, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>10002</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* <TouchableOpacity onPress={() => setSelectedValue(10001)}>
                    <View style={{ width: 300, height: 300 }}>
                        <Text>10001</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedValue(10002)}>
                    <View style={{ width: 300, height: 300 }}>
                        <Text>10002</Text>
                    </View>
                </TouchableOpacity> */}
                <GestureHandlerRootView>
                    {rooms.map((room, index) => (
                        <Swipeable
                            key={index}
                            renderRightActions={renderLeftActions}
                        >
                            <Chat
                                props={room}
                                user={selectedValue}
                                navigation={navigation}
                            />
                        </Swipeable>
                    ))}
                </GestureHandlerRootView>
            </View>
        </ScrollView>
    );
};

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
    rightBtn: {
        flexDirection: 'row'
    }
});
