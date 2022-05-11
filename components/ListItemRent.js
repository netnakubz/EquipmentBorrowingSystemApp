import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
export default function ListItemRent() {
    return (
        <TouchableOpacity
            onPress={() => { console.log("item") }}
        >
            <View style={styles.item}>
                <View style={styles.itemBorder}>
                    <View >
                        <Image
                            style={styles.itemImage}
                            source={{ uri: "https://picsum.photos/200/300" }} />
                    </View>
                </View>
                <View style={styles.itemContents}>
                    <View>
                        <Text>ITEM NAME</Text>
                    </View>
                    <View>
                        <Text style={{ color: "#FF6280" }}>ITEM PRICE</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    itemBorder: {
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "grey",
        width: 100,
        height: 100,
    },
    itemImage: {
        width: 80,
        height: 80,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center'
    },
    item: {
        marginLeft: 10,
    }
})