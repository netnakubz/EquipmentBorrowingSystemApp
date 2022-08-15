import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    FlatList,
    RefreshControl,
} from 'react-native';

import Product from '../components/Product';
import {useNavigation} from '@react-navigation/native';
import {HomePageHeader} from '../components/HomePageHeader';
import LottieView from 'lottie-react-native';
import API from "../env/API";

export const FindToBorrowPage = ({content, setContent, isHomePage, setHomePage}) => {
    const [visible, setVisible] = useState(false);
    const [fetchingData, setFetchingData] = useState(false);
    const [fetching, setFetching] = useState(false);
    const [totalData, setTotalData] = useState(1);
    const uuid = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    const flatListRef = useRef();
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
        const data = API.getPostFindToBorrow(totalData);
        setPost(data);
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
                    console.log(e.suggestions)
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
                onMomentumScrollEnd={async () => {
                    await _NewData()
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
