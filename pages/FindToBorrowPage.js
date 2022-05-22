import React, { useEffect, useMemo, useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import axios from 'axios';
import { Product } from '../components/Product';
import { useNavigation } from '@react-navigation/native';
import { HomePageHeader } from '../components/HomePageHeader';
export const FindToBorrowPage = ({ content, setContent }) => {
    const [visible, setVisible] = useState(false);
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

    const handleContent = type => {
        if (content === type) return;
        setContent(type);
    };
    const navigation = useNavigation();

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <HomePageHeader content={content} page="FindToBorrow" />
            <View style={styles.container} containerStyle={{ background: 'transparent' }}>
                <View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {contentType.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => handleContent(item.type)}>
                                <View
                                    style={[styles.contentType, { backgroundColor: item.color }]}>
                                    <Text style={styles.contentText}>{item.type}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
                <View style={styles.contentColumn}>
                    {post && post.map((item, key) => {
                        // if (item.suggestions.includes(content)) {
                        return (
                            <View style={{ width: '50%' }} key={key}>
                                <Product item={item} />
                            </View>);
                        // } else if (content === "All") {
                        //     return (
                        //         <View style={{ width: '50%' }} key={key}>
                        //             <Product item={item} />
                        //         </View>);
                        // }
                    })}
                </View>

            </View>
        </ScrollView>
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
