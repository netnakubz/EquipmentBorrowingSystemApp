import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Touchable } from "react-native";
import Hr from '../components/Hr';
import ListItemRent from "../components/ListItemRent";
import { useNavigation } from '@react-navigation/native';
export function PersonalScreen() {
    const navigation = useNavigation();
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
    const a = [1, 2, 3, 4];
    const handlePressEditProfile = () => {
        navigation.navigate("EditUserProfile", {
            userId: 10001,
            name: profile.name
        });
    }
    const handlePressMore = () => {
        navigation.navigate("ManageItem");
    }
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
                        <Text style={{ fontSize: 18, color: '#464646' }}>ข้อมูลส่วนตัว</Text>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                handlePressEditProfile();
                            }}
                        >
                            <Text
                                style={{ color: '#FF6280', fontSize: 18 }}
                            >แก้ไข</Text>
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
                        <Text
                            style={{ fontSize: 18, color: '#464646' }}

                        >อุปกรณ์ที่ให้เช่า</Text>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => { handlePressMore() }}
                        >
                            <Text
                                style={{ color: '#FF6280', fontSize: 18 }}
                            >เพิ่ม</Text>
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
                            a.map((e, index) => (
                                <View key={index}>
                                    <ListItemRent />
                                </View>
                            ))
                        }
                        <TouchableOpacity
                            onPress={() => { handlePressMore() }}
                        >
                            <View style={styles.moreItem}>

                                <View>
                                    <Ionicons name="chevron-forward-circle-outline" size={40} color="#FF6280" />
                                </View>
                                <View>
                                    <Text style={{ color: '#FF6280' }}>ดูเพิ่ม</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

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
        width: 80,
        height: 80,
        borderRadius: 80 / 2
    },
    profileName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        color: '#464646'
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
    },
    moreItem: {
        marginLeft: 10,
        width: 100,
        height: 100,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
        borderWidth: 1,
        borderStyle: 'dotted',
        borderColor: "#FF6280"
    }
})