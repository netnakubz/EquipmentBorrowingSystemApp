import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, StyleSheet, FlatList, SafeAreaView } from "react-native";
import Product from "../components/Product";
import API from "../env/API";

export function LikeScreen() {
    const [post, setPost] = useState();
    const getLikePost = async () => {
        const data = await API.getLikePost();
        setPost(data);
    }
    useEffect(() => {
        getLikePost();
    }, []);
    return (
        <FlatList
            data={post}
            renderItem={({ item }) => (
                <View style={{ width: '50%' }} >
                    <Product item={item.postRentModel} />
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