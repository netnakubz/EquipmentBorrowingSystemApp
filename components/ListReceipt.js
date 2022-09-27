import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
export const ListReceipt = ({ receipt }) => {
    const naviation = useNavigation();
    const handleOnPressReceipt = (item) => {
        naviation.navigate("SaveReceipt", { receipt:item });
    }
    return (
        receipt.map((item) => (
            <TouchableOpacity key={item.invoiceId}
                style={[styles.col, {
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignContent: 'flex-start'
                }]}
                onPress={() => handleOnPressReceipt(item)}
            >
                <View>
                    <Text style={{ fontSize: 18, textAlign: 'center' }}>
                        Invoice ID  {item.invoiceId}
                    </Text>
                </View>
                <Text style={{ textAlign: 'left' }}>
                    item : {item.name}
                </Text>
                <Text style={{ textAlign: 'left' }}>
                    serial : {item.serial}
                </Text>
            </TouchableOpacity>
        ))
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start"
    },
    col: {
        flexDirection: 'column',
        alignItems: 'center',
        width: `33.33%`,
        borderWidth: 0.5,
        height: 200
    },
})