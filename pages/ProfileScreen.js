import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity, Touchable } from "react-native";
import Hr from '../components/Hr';
import ListItemRent from "../components/ListItemRent";
import { useNavigation } from '@react-navigation/native';
import { MyItem } from "./MyItem";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

const Allproduct = () => {
    const handlePressMore = () => {
        navigation.navigate("MyItem");
    }
    return (
        <ScrollView

            nestedScrollEnabled={true}
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <View
                style={styles.container}
            >
                <View style={[styles.itemRentContents, styles.row, { flexWrap: 'wrap' }]}>
                    {
                        Array(12).fill(0).map((e, index) => (
                            <View key={index}>
                                <ListItemRent />
                            </View>
                        ))
                    }
                </View>

                {/* <TouchableOpacity
        //                 onPress={() => { handlePressMore() }}
        //             >
        //                 <View style={styles.moreItem}>

        //                     <View>
        //                         <Ionicons name="chevron-forward-circle-outline" size={40} color="#FF6280" />
        //                     </View>
        //                     <View>
        //                         <Text style={{ color: '#FF6280' }}>ดูเพิ่ม</Text>
        //                     </View>
        //                 </View>
        //     
                </TouchableOpacity> */}
            </View >
        </ScrollView>
    );
}
const Type = () => {
    return <View>
        <Text>Type</Text>
    </View>
}

export function PersonalScreen() {
    const navigation = useNavigation();
    const [tabHeight, setTabHeight] = useState(0);
    const [activeTab, setActiveTab] = useState("tab1");
    const { height: heightOfDeviceScreen } = Dimensions.get('window');
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
    const handlePressEditProfile = () => {
        navigation.navigate("EditUserProfile", {
            userId: 10001,
            name: profile.name
        });
    }

    const handlePressAddItem = () => {
        navigation.navigate("AddItem");
    }
    return (
        <View style={styles.container}>
            <ScrollView
                nestedScrollEnabled={true}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                <View style={{ padding: 20 }}>
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
                </View>
                <View style={styles.container}>
                    <Tab.Navigator>
                        <Tab.Screen component={activeTab === "tab1" ? Allproduct : Type} listeners={{ focus: () => setActiveTab("tab1") }} name="AllProduct" />
                        <Tab.Screen component={Type} name="Type" />
                    </Tab.Navigator>
                </View>
            </ScrollView>

            {/* <View style={[styles.itemRent, styles.row]}>
                    <View>
                        <Text
                            style={{ fontSize: 18, color: '#464646' }}

                        >อุปกรณ์ที่ให้เช่า</Text>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => { handlePressAddItem() }}
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
                </View> */}
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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