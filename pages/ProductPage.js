import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, StyleSheet, Button, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Ionicons from 'react-native-vector-icons/Ionicons';
import Hr from "../components/Hr";

export function ProductPage({ navigation, route }) {
    const [postId, setPostId] = useState(route.params);
    const [isLiked, setIsLiked] = useState(true);
    const [item, setItem] = useState({
        type: "ITEM TYPE",
        name: "ITEM NAME",
        price: 100,
        desc: "สภาพ 100 % เพิ่งซื้อมาเมื่อวาน",
        totalStock: 3,
        totalRent: 2,
        owner: 10001
    });
    const [owner, setOwner] = useState({
        photo: "https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg",
        name: "สมชาย รักดี",
        email: "6210210000@psu.ac.th"
    })
    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    }
    const contactBtn = () => {
        console.log("Contact");
    }
    useEffect(() => {
        navigation.setOptions({
            title: '',
            headerTransparent: true,
        });
    }, []);
    return (
        <View>
            <ScrollView
                style={{ backgroundColor: "white" }}
            >
                <View style={styles.imageZone}>
                    <Image
                        style={styles.postImage}
                        resizeMode="cover"
                        source={{ uri: "https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg" }}
                    />
                </View>
                <View style={styles.postDetails}>
                    <View style={styles.postContents}>
                        <View style={styles.row}>
                            <View>
                                <Text style={{ color: "#464646" }}>{item.type}</Text>
                            </View>
                            <View>
                                <TouchableOpacity
                                    onPress={() => { handleLikeClick() }}
                                >
                                    <Ionicons name={isLiked ? "heart" : "heart-outline"} size={30} color={isLiked ? "#FF6280" : "black"} />
                                </TouchableOpacity>
                            </View></View>
                        <View>
                            <Text style={[styles.itemName, { color: "#464646" }]}>{item.name}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ fontSize: 20, color: "#464646" }}>ราคาที่เสนอ</Text>
                            <Text style={{ fontSize: 20, marginLeft: 10, color: "#FF6280" }}>{item.price} THB</Text>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ color: "#464646" }}>
                                {item.desc}
                            </Text>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ color: "#464646", fontWeight: "bold" }}>รายละเอียด</Text>
                            <Text style={{ color: "#464646" }}>คลัง : {item.totalStock}</Text>
                            <Text style={{ fontSize: 13, color: "#464646" }}>เช่าแล้ว : {item.totalRent} ครั้ง</Text>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Hr size={40}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={[styles.row,
            {
                bottom: 10,
                position: 'absolute',
                justifyContent: "space-evenly",
                left: 0,
                right: 0
            }]}
            >
                <View>
                    <Image
                        style={{ width: 50, height: 50, borderRadius: 50 }}
                        source={{ uri: owner.photo }} />
                </View>
                <View>
                    <Text style={{ fontWeight: "bold", color: "#464646", fontSize: 16 }}>{owner.name}</Text>
                    <Text>{owner.email}</Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => contactBtn()}
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
                                ติดต่อ
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 16
    },
    col: {
        flexDirection: "column"
    },
    bottom: {
        position: 'absolute',
        bottom: 0,
    },
    postDetails: {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: "white",
        height: windowHeight - windowHeight / 2.3
    },
    imageZone: {
        height: windowHeight / 2.3
    },
    postContents: {
        padding: 30,
    },
    postImage: {
        width: windowWidth,
        height: windowHeight / 2
    },
    itemName: {
        fontSize: 32,
    }
});