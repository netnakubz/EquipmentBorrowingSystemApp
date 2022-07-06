import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, ListRenderItem, Dimensions, TouchableOpacity, Touchable, FlatList } from "react-native";
import Hr from '../components/Hr';
import ListItemRent from "../components/ListItemRent";
import { useNavigation } from '@react-navigation/native';
import { MyItem } from "./MyItem";
const Profile = () => {
    const [profile, setProfile] = useState({
        name: "สมชายรักดี",
        email: "6210210000@psu.ac.th",
        Tel: '0800000000'
    });
    return (
        <View>
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
        </View>
    );
}

export function PersonalScreen() {
    const navigation = useNavigation();
    const [tabHeight, setTabHeight] = useState(0);
    const [activeTab, setActiveTab] = useState("tab1");
    const screenHeight = Dimensions.get('window').height
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
    const DATA = [
        { key: 'head1' },
        { key: 'head2' },
        { key: 'head3' },
        { key: 'Apple' },
        { key: 'Apricot' },
        { key: 'Avocado' },
        { key: 'Banana' },
        { key: 'Blackberry' },
        { key: 'Blackcurrant' },
        { key: 'Blueberry' },
        { key: 'Boysenberry' },
        { key: 'Cherry' },
        { key: 'Coconut' },
        { key: 'Grape' },
        { key: 'Grapefruit' },
        { key: 'Kiwifruit ' },
        { key: 'Lemon' },
        { key: 'Lime' },
        { key: 'Litchi' },
        { key: 'Mango' },
        { key: 'Melon' },
        { key: 'Nectarine' },
        { key: 'Orange' },
        { key: 'Papaya' },
    ];
    const DATA2 = [
        { key: 'head1' },
        { key: 'head2' },
        { key: 'head3' },
        { key: 'kanit' },
        { key: 'kuadkaew' },
        { key: 'kuadkaew' },
    ]
    const DATA3 = [
        { key: 'head1' },
        { key: 'head2' },
        { key: 'head3' },
    ]

    return (
        <View />
    );
}
const Temp = () => {
    return (
        <View />
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
    },

})