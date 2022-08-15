import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    FlatList
} from 'react-native';

import { Dropdown } from 'react-native-element-dropdown';
import Ionicons from '@expo/vector-icons/Ionicons';
import Swiper from 'react-native-swiper'


import axios from 'axios';
import { Card, Overlay, SearchBar } from 'react-native-elements';
import ProductLend from '../components/ProductLend';
import { ProductPage } from "./ProductPage"
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { UnderHeader } from '../components/UnderHeader';
import { HomePageHeader } from '../components/HomePageHeader';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FloatingBtn } from '../components/FloatingBtn';


export const FindToLendPage = () => {
    const insets = useSafeAreaInsets();
    const [searchText, setSearchText] = useState('');
    const [typeOfItem, setTypeOfItem] = useState([]);
    const [value, setValue] = useState(null);
    const [selectedType, setSelectedType] = useState('all');
    const [visible, setVisible] = useState(false);
    const [content, setContent] = useState('All');
    // const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImIwNmExMTkxNThlOGIyODIxNzE0MThhNjdkZWE4Mzc0MGI1ZWU3N2UiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiS2FuaXQgS3VhZGthZXciLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2pHRnhvT1RCdzdNMXROR2NFUFdxY2g3eERoZ2xreEtTYko4VzVJZ3c9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZXJicy01OWM0NSIsImF1ZCI6ImVyYnMtNTljNDUiLCJhdXRoX3RpbWUiOjE2NDgxODMxMjAsInVzZXJfaWQiOiJNTmZ0N2czS1NBVEZhclFKSUd2RWxrSVA2TzgzIiwic3ViIjoiTU5mdDdnM0tTQVRGYXJRSklHdkVsa0lQNk84MyIsImlhdCI6MTY0ODE4MzEyMCwiZXhwIjoxNjQ4MTg2NzIwLCJlbWFpbCI6InBrYW5pdDQwMUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNDkwOTIzMTYzMzIxNjU4NTA1MSJdLCJlbWFpbCI6WyJwa2FuaXQ0MDFAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.Vm-dLiJYe3Z7zgnHX0FlZBI3kv6xgcxB17k2fKn8STaPpjn9FMKETEkXVyW1aiJ16DBg3Oi_dpFW4PAGNMo2QUftPpnw5vD_ookZePObgMsGlTuvD7-saNLnM67gzEC6ZLNNbr8BKXraCVcTRZ3ToUyTMMkF69SXeOuQ72uoFQyIOuof4Roh52-87FOZwZt0osi-54SSxr0DUtpoP_608gxpzZaifCj3Qtd0u85SA6ZZqUIjAO3cdKAnR3mZOhmXBSp-GPkauw_nNj0RTUNR-XZQ_nRuFh2lMpAH2Vxhf1eNS2EuGifOc6jAItPT2zb5WUy15XDGxwKCVa1DMnIoNA";
    //   const [post, setPost] = useState([]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //Get list of item
    //         const listOfItem = await axios.get("http://192.168.10.111:8080/api/v1/get/post",
    //             {
    //                 headers: { Authorization: `Bearer ${token}`}
    //             }
    //         ).catch(err => {
    //             console.error(err);
    //         });
    //        const listOfType = await axios.get("http://192.168.10.111:8080/api/v1/getListOfItem",{headers: { Authorization: `Bearer ${token}`}})
    //         setPost(listOfItem.data);
    //        setTypeOfItem(listOftype.data)
    //     }
    //     fetchData();
    // }, []);
    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
    ];
    const post = [
        {
            postId: 1,
            details: 'Post details',
            img: 'https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg',
            price: 50,
            suggestions: ["New Arrivals", "Popular"]
        },
        {
            postId: 2,
            details: 'Post details',
            img: 'https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg',
            price: 50,
            suggestions: ["New Arrivals", "Recommend"]

        },
        {
            postId: 3,
            details: 'Post details',
            img: 'https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg',
            price: 50,
            suggestions: ["New Arrivals", "Recommend"]

        },
        {
            postId: 4,
            details: 'Post details',
            img: 'https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg',
            price: 50,
            suggestions: ["New Arrivals"]

        },
        {
            postId: 5,
            details: 'Post details',
            img: 'https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg',
            price: 50,
            suggestions: ["Popular"]

        },
        {
            postId: 6,
            details: 'Post details',
            img: 'https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg',
            price: 50,
            suggestions: ["Popular"]

        },

    ];
    const contentType = [
        {
            type: "All",
            color: "#00C9A7"

        },
        {
            type: 'New Arrivals',
            color: '#F16B6B',
        },
        {
            type: 'Popular',
            color: '#F9C67A',
        },
        {
            type: 'Recommend',
            color: '#7AC8F9',
        },

    ];
    const handleSearchText = e => {
        setSearchText(e);
    };
    const handlePressAddButton = () => {
        setVisible(!visible);
        console.log('Hello Floting button');
    };
    const handleContent = type => {
        if (content === type) return;
        setContent(type);
    };
    const navigation = useNavigation();
    const handleLendBtn = () => {
        navigation.navigate("RentPage");
        setVisible(false);

    }
    const handleRentBtn = () => {
        navigation.navigate("RentPage");
        setVisible(false);

    }
    return (
        <View style={styles.container}>
            <FlatList
                ListHeaderComponent={
                    <HomePageHeader content={content} page="FindToLend" />
                }
                data={post}
                contentContainerStyle={{
                    flexGrow: 1
                }}
                columnWrapperStyle={{ flexWrap: 'wrap' }}
                numColumns={2}
                renderItem={({ item }) => {
                    if (item.suggestions.includes(content)) {
                        return (
                            <View style={{ width: '50%', flex: 1 }} >
                                <ProductLend item={item} />
                            </View>);
                    } else if (content === "All") {
                        return (
                            <View style={{ width: '50%', flex: 1 }} >
                                <ProductLend item={item} />
                            </View>);
                    }
                }}
                keyExtractor={(item) => item.postId}
                ListFooterComponent={<View style={{ height: 50 }} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    textHeader: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    container: {
        flex: 1,
        flexGrow: 1,
    },
    contentColumn: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    row: {
        flex: 1,
        justifyContent: 'space-around',
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
        backgroundColor: 'transparent',
        opacity: 0,
    },
    cardCnt: {
        borderWidth: 0,
        shadowColor: 'rgba(0,0,0, 0.0)', // Remove Shadow for iOS
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0, // Remove Shadow for Android
        backgroundColor: 'transparent',
    },
    // cardImg: {
    //   width: width,
    //   borderRadius: 40,
    // },
    cardText: {
        textAlign: 'left',
        fontWeight: 'bold',
    },
    contentType: {
        marginLeft: 5,
        height: 70,
        width: 120,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentText: {
        textAlign: 'left',
        fontWeight: 'bold',
        padding: 5,
        fontSize: 18,
        color: 'white',
    },
    dropdown: {
        width: 70,
        textAlign: 'center',
        margin: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        textAlign: 'center',
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    textContent: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
