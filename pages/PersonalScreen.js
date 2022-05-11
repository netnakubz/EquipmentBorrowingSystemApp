import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import Hr from '../components/Hr';
import ListItemRent from "../components/ListItemRent";
export function PersonalScreen() {
    const [profile, setProfile] = useState({
        name: "สมชายรักดี",
        email: "6210210000@psu.ac.th",
        Tel: '0800000000'
    });
    const [ownerItems, setOwnerItems] = useState([
        { name: "RC00000001 - Logitech M350 Mouse" },
        { name: "RC00000002 - Logitech M350 Mouse" },
        { name: "RC00000001 - Logitech M350 Mouse" },
        { name: "RC00000002 - Logitech M350 Mouse" },
        { name: "RC00000001 - Logitech M350 Mouse" },
        { name: "RC00000002 - Logitech M350 Mouse" },
        { name: "RC00000001 - Logitech M350 Mouse" },
        { name: "RC00000002 - Logitech M350 Mouse" }
    ]);
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.row}>
                    <View>
                        <Image
                            style={styles.profileImage}
                            resizeMode="cover"
                            source={{ uri: "https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg" }}
                        />
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={styles.profileName}>{profile.name}</Text>
                    </View>
                </View>
                <Hr size={40} />
                <View style={[styles.personalInfo, styles.row]}>
                    <View>
                        <Text style={{ fontSize: 16 }}>ข้อมูลส่วนตัว</Text>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                console.log("Edit info")
                            }}
                        >
                            <Ionicons size={20} name="pencil-outline" />
                        </TouchableOpacity>
                    </View>
                </View>
                <Hr size={40} />
                <View style={styles.personalInfoContents}>
                    <View >
                        <Text> Email : {profile.email}</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text> Tel : {profile.Tel}</Text>
                    </View>
                </View>
                <Hr size={40} />
                <View style={[styles.itemRent, styles.row]}>
                    <View>
                        <Text>อุปกรณ์ที่ให้เช่า</Text>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => { console.log("add") }}
                        >
                            <Ionicons name="add" size={20} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Hr size={40} />
                <View style={styles.itemRentContents}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {
                            a.map((e, index) => {
                                return <ListItemRent key={index} />
                            })
                        }
                    </ScrollView>
                </View>
                <Hr size={40} />
                <View style={{ padding: 20 }}>
                    <Text>ใบเสร็จ</Text>
                </View>
                <Hr size={40} />
                <View style={{ padding: 20, height: 130 }}>
                    <ScrollView
                    // showsVerticalScrollIndicator={false}
                    >
                        {
                            ownerItems.map((e, index) => {
                                return (
                                    <View key={index} style={{ marginTop: 10 }}>
                                        <TouchableOpacity>
                                            <View>
                                                <Text>{e.name}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    row: {
        flexDirection: "row",
        display: 'flex'
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 30
    },
    profileName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    personalInfo: {
        justifyContent: "space-between",
        padding: 15
    },
    personalInfoContents: {
        padding: 20
    },
    itemRent: {
        justifyContent: "space-between",
        padding: 15
    },
    itemRentContents: {
        padding: 20
    }
})