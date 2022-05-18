import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import { Card, Overlay, SearchBar } from 'react-native-elements';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductPage } from '../pages/ProductPage';
import { useNavigation } from '@react-navigation/native';
const ProductStack = createNativeStackNavigator();



export function ProductLend({ item }) {
    const navigation = useNavigation();
    const onClickItem = postId => {
        // console.log(postId);
        navigation.navigate('DirectMessage', {
            postId: postId
        });
    };
    function generateRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    return (
        <TouchableOpacity onPress={() => onClickItem(item.postId)}>
            <Card containerStyle={[styles.cardCnt, { backgroundColor: generateRandomColor() }]}>
                <Card.Title
                >
                    <Text style={{ color: "white" }}>หาเมาส์ไร้สาย</Text>
                </Card.Title>
                <View>
                    <Text>50 THB ต่อวัน</Text>
                </View>
                <View>
                    <Text>
                        โพสต์เมื่อ ...
                    </Text>
                </View>
                <View>
                    <Text>
                        รายละเอียด
                    </Text>
                </View>
                <View>
                    <Text style={{ textAlign: 'right' }}>เช่า 2 วัน</Text>
                </View>
            </Card>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardCnt: {
        borderWidth: 0,
        shadowColor: 'rgba(0,0,0, 0.0)', // Remove Shadow for iOS
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0, // Remove Shadow for Android
        borderRadius: 30,
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