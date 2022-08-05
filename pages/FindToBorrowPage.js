import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    RefreshControl,
} from 'react-native';

import axios from 'axios';
import Product from '../components/Product';
import {useNavigation} from '@react-navigation/native';
import {HomePageHeader} from '../components/HomePageHeader';
import {FloatingBtn} from '../components/FloatingBtn';
import LottieView from 'lottie-react-native';
import API from "../env/API";

export const FindToBorrowPage = ({content, setContent, isHomePage, setHomePage}) => {
    const [visible, setVisible] = useState(false);
    const [fetchingData, setFetchingData] = useState(false);
    const [fetching, setFetching] = useState(false);
    const [totalData, setTotalData] = useState(1);
    // const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImIwNmExMTkxNThlOGIyODIxNzE0MThhNjdkZWE4Mzc0MGI1ZWU3N2UiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiS2FuaXQgS3VhZGthZXciLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2pHRnhvT1RCdzdNMXROR2NFUFdxY2g3eERoZ2xreEtTYko4VzVJZ3c9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZXJicy01OWM0NSIsImF1ZCI6ImVyYnMtNTljNDUiLCJhdXRoX3RpbWUiOjE2NDgxODMxMjAsInVzZXJfaWQiOiJNTmZ0N2czS1NBVEZhclFKSUd2RWxrSVA2TzgzIiwic3ViIjoiTU5mdDdnM0tTQVRGYXJRSklHdkVsa0lQNk84MyIsImlhdCI6MTY0ODE4MzEyMCwiZXhwIjoxNjQ4MTg2NzIwLCJlbWFpbCI6InBrYW5pdDQwMUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNDkwOTIzMTYzMzIxNjU4NTA1MSJdLCJlbWFpbCI6WyJwa2FuaXQ0MDFAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.Vm-dLiJYe3Z7zgnHX0FlZBI3kv6xgcxB17k2fKn8STaPpjn9FMKETEkXVyW1aiJ16DBg3Oi_dpFW4PAGNMo2QUftPpnw5vD_ookZePObgMsGlTuvD7-saNLnM67gzEC6ZLNNbr8BKXraCVcTRZ3ToUyTMMkF69SXeOuQ72uoFQyIOuof4Roh52-87FOZwZt0osi-54SSxr0DUtpoP_608gxpzZaifCj3Qtd0u85SA6ZZqUIjAO3cdKAnR3mZOhmXBSp-GPkauw_nNj0RTUNR-XZQ_nRuFh2lMpAH2Vxhf1eNS2EuGifOc6jAItPT2zb5WUy15XDGxwKCVa1DMnIoNA";
    // const [post, setPost] = useState();
    // useEffect(() => {

    //     const fetchData = async () => {
    //         // Get list of item
    //         // const listOfItem = await axios.get("http://192.168.0.104:8080/api/v1/get/post",
    //         //     // {
    //         //     //     headers: { Authorization: `Bearer ${token}` }
    //         //     // }
    //         // ).catch(err => {
    //         //     console.error(err);
    //         // });
    //         // const listOfType = await axios.get("http://192.168.10.111:8080/api/v1/getListOfItem", { headers: { Authorization: `Bearer ${token}` } })

    //         const posts = await axios.get("http://192.168.0.104:8080/api/v1/get/post");
    //         console.log(posts.data);
    //         setPost(posts.data);
    //         // setTypeOfItem(listOftype.data)
    //     }
    //     fetchData();
    // }, []);
    const uuid = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    const flatListRef = useRef();
    useEffect(() => {
        console.log(content);
    }, [content]);
    useEffect(() => {
        flatListRef.current.scrollToOffset({animated: true, offset: 0})
        setHomePage(false);
    }, [isHomePage === true]);
    const [post, setPost] = useState([
        {
            postId: '1',
            details: 'Post details',
            img: 'https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg',
            price: 123,
            suggestions: ["New Arrivals"]
        },
    ])
    let post2 = [
        {
            postId: uuid(),
            details: 'Post details',
            img: 'https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg',
            price: 50,
            suggestions: ["New Arrivals"]
        },
        {
            postId: uuid(),
            details: 'Post details',
            img: 'https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg',
            price: 50,
            suggestions: ["New Arrivals", "Popular"]
        },
        {
            postId: uuid(),
            details: 'Post details',
            img: 'https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg',
            price: 50,
            suggestions: ["New Arrivals", "Popular"]
        },
        {
            postId: uuid(),
            details: 'Post details',
            img: 'https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg',
            price: 50,
            suggestions: ["New Arrivals", "Popular"]
        },
        {
            postId: uuid(),
            details: 'Post details',
            img: 'https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg',
            price: 50,
            suggestions: ["New Arrivals", "Popular"]
        },
        {
            postId: uuid(),
            details: 'Post details',
            img: 'https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg',
            price: 50,
            suggestions: ["New Arrivals", "Popular"]
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

    const handleContent = type => {
        if (content === type) return;
        setContent(type);
    };

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const _onReFresh = () => {
        setFetchingData(true);
        wait(2000).then(() => setFetchingData(false));
    }
    const _NewData = async () => {
        setFetching(true);
        setTotalData(totalData + 1);
        // const data = await API.getPostFindToBorrow(totalData);
        // setPost(data);
        wait(2000).then(() => setFetching(false));
    }
    const navigation = useNavigation();

    return (
        <View style={styles.container} containerStyle={{background: 'transparent'}}>
            <FlatList
                ListHeaderComponent={
                    <View>
                        <HomePageHeader content={content} page="FindToBorrow"/>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {contentType.map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => handleContent(item.type)}>
                                    <View
                                        style={[styles.contentType, {backgroundColor: item.color}]}>
                                        <Text style={styles.contentText}>{item.type}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                }
                ref={flatListRef}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
                data={post.filter(e => {
                    if (content !== "All")
                        return e.suggestions.includes(content);
                    return e;
                })}
                renderItem={({item}) => {
                    return (
                        <View style={{width: '50%'}}>
                            <Product item={item}/>
                        </View>);
                }}
                keyExtractor={(item) => item.postId}
                numColumns={2}
                initialNumToRender={5}
                refreshControl={
                    <RefreshControl
                        style={{bottom: 0}}
                        refreshing={fetchingData}
                        onRefresh={_onReFresh}
                    />
                }
                onMomentumScrollEnd={() => {
                    _NewData()
                }}
                ListFooterComponent={() => {
                    return (
                        <View>
                            {fetching ? (
                                    <View style={{height: 100, flexDirection: 'row', justifyContent: 'center'}}>
                                        <LottieView
                                            autoPlay
                                            style={{
                                                width: 30,
                                                backgroundColor: '#eee',
                                            }}
                                            // Find more Lottie files at https://lottiefiles.com/featured
                                            source={require('../assets/loader.json')}
                                        />
                                    </View>
                                ) :
                                (
                                    <View style={{height: 50}}/>
                                )
                            }
                        </View>
                    );
                }
                }

            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    contentColumn: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
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

});
