import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Button, Text } from "react-native";
import Chat from "../components/Chat";
import axios from "axios";

export default function Room({ navigation }) {
    const [rooms, setRoom] = useState([]);
    const [selectedValue, setSelectedValue] = useState(10001);

    const getListChat = async () => {
        const data = await axios.get(
            `http://192.168.0.104:8080/api/v1/getListChat?userId=${selectedValue}`
        );
        setRoom(data.data);
    };
    useEffect(() => {
        getListChat();
    }, [selectedValue]);
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <Button title="10001" onPress={() => setSelectedValue(10001)} />
                <Button title="10002" onPress={() => setSelectedValue(10002)} />
                {rooms.map((room, index) => (
                    <Chat
                        props={room}
                        user={selectedValue}
                        key={index}
                        navigation={navigation}
                    />
                ))}
            </View>
        </ScrollView>
    );
};

