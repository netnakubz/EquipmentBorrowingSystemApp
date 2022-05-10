import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Image, Button, Text, TouchableOpacity, Dimensions } from "react-native";
import Chat from "../components/Chat";
import axios from "axios";
import { Card } from 'react-native-paper';

const screenWidth = Dimensions.get('window').width;

import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';

export default function Room({ navigation }) {
    const [rooms, setRoom] = useState([]);
    const [selectedValue, setSelectedValue] = useState(10001);
    const deleteBtn = () => {
        console.log("delete")
    }
    const renderLeftActions = (progress, dragX) => {
        const trans = dragX.interpolate({
            inputRange: [0, 50, 100, 101],
            outputRange: [0, 0, 0, 1],
        });
        return (
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
                        width: 80,
                        height: 40,
                        backgroundColor: "#FF6280",
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
        );
    }
    const getListChat = async () => {
        const data = await axios.get(
            `http://192.168.0.104:8080/api/v1/getListChat?userId=${selectedValue}`
        );
        // setRoom(data.data);
    };
    useEffect(() => {
        getListChat();
    }, [selectedValue]);
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <GestureHandlerRootView>
                    <Swipeable
                        renderRightActions={renderLeftActions}
                    >
                        {rooms.map((room, index) => (
                            <Chat
                                props={room}
                                user={selectedValue}
                                key={index}
                                navigation={navigation}
                            />
                        ))}
                    </Swipeable>
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
});
{/* <Card style={styles.card}>
    <View style={styles.row}>
        <View>
            <Image
                style={{ width: 50, height: 50 }}
                source={{
                    uri: "https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg",
                }}
            />
        </View>
        <View style={{ flex: 1 }}>
            <View>
                <Text style={styles.chatName}>Kanit</Text>
            </View>
        </View>
    </View>
</Card> */}