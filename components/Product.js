import React, { useEffect, useState, memo } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import { Card, Overlay, SearchBar } from 'react-native-elements';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductPage } from '../pages/ProductPage';
import { useNavigation } from '@react-navigation/native';
const ProductStack = createNativeStackNavigator();
const Product = ({ item }) => {
    const navigation = useNavigation();
    const onClickItem = postId => {
        // console.log(postId);
        navigation.navigate('ProductPage', {
            postId: postId
        });
    };
    return (
        <TouchableOpacity onPress={() => onClickItem(item.postId)}>
            <Card containerStyle={styles.cardCnt}>
                <Card.Image
                    style={{ borderRadius: 30 }}
                    // source={{ uri: `http://192.168.0.104:8080/getImg?imgUrl=${item.img}` }} />
                    source={{ uri: `${item.img}` }}
                />
                <View>
                    <Text style={styles.cardText}>{item.details}</Text>
                </View>
                <View>
                    <Text>{item.price}฿ / วัน</Text>
                </View>
            </Card>
        </TouchableOpacity>
    );
};
export default memo(Product);
const styles = StyleSheet.create({
    cardCnt: {
        borderWidth: 0,
        shadowColor: 'rgba(0,0,0, 0.0)', // Remove Shadow for iOS
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0, // Remove Shadow for Android
        backgroundColor: 'transparent',
    },
    cardText: {
        textAlign: 'left',
        fontWeight: 'bold',
    },
    contentText: {
        textAlign: 'left',
        fontWeight: 'bold',
        padding: 5,
        fontSize: 18,
        color: 'white',
    },

});