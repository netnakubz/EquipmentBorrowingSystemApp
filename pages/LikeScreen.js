import React from "react";
import { View, Text, ScrollView, Image, StyleSheet, FlatList, SafeAreaView } from "react-native";
import Product from "../components/Product";

export function LikeScreen() {
    const post = [
        {
            postId: 1,
            details: 'Post details',
            img: 'https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg',
            price: 50,
        },
        {
            postId: 2,
            details: 'Post details',
            img: 'https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg',
            price: 50,
        },
        {
            postId: 3,
            details: 'Post details',
            img: 'https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg',
            price: 50,
        },
        {
            postId: 4,
            details: 'Post details',
            img: 'https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg',
            price: 50,
        },
        {
            postId: 5,
            details: 'Post details',
            img: 'https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg',
            price: 50,
        },
        {
            postId: 6,
            details: 'Post details',
            img: 'https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg',
            price: 50,
        },
    ];
    return (
        <FlatList
            data={post}
            renderItem={({ item }) => (
                <View style={{ width: '50%' }} >
                    <Product item={item} />
                </View>
            )}
            numColumns={2}
            keyExtractor={(item) => item.postId}
            ListFooterComponent={<View style={{ height: 50 }} />}
        />
    );
}


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    col: {
        flexDirection: 'column'
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 50,
    },
    container: {
        flex: 1,
        flexGrow: 1
    },
    contentColumn: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});