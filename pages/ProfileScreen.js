import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, FlatList, RefreshControl, Animated, SafeAreaView, ScrollView } from "react-native";
import Hr from '../components/Hr';
import ListItemRent from "../components/ListItemRent";
import { useNavigation } from '@react-navigation/native';
import { MyItem } from "./MyItem";
import ProfileListItem from '../components/ProfileListItem';
import { Profile } from '../components/Profile';
import { AnimatedHeader } from '../components/AnimatedHeader';
import DATA from '../components/data';
const { Value } = Animated;
import StickyHeaderProfile from '../components/StickyHeaderProfile';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import API from '../env/API';
const Tab = createMaterialTopTabNavigator();

const RenderItem = ({ item }) => {
    return (
        <View>
            <Text>
                {item.name}
            </Text>
        </View>
    );
}
export function PersonalScreen() {
    const offset = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();
    const [tabHeight, setTabHeight] = useState(0);
    const [activeTab, setActiveTab] = useState("tab1");
    const screenHeight = Dimensions.get('window').height
    const [ownerItems, setOwnerItems] = useState();
    const getMyItems = async()=>{
        const data = await API.getMyItems();
        console.log(data.content.length)
        // setOwnerItems(data);
    }
    useEffect(()=>{
        getMyItems();
    },[]);

    const [y, setY] = useState(new Value(0));
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StickyHeaderProfile items={ownerItems} />
        </SafeAreaView>
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
