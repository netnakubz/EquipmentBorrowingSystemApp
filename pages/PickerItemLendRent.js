import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Picker, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function PickerItemLendRent({ route }) {
    const [val, setValue] = useState("Java");
    const navigation = useNavigation();
    navigation.setOptions({
        headerRight: () => (
            <Button
                title="เลือก"
                onPress={() => handleSelectButton()}
            />
        )
    });
    const handleSelectButton = () => {
        navigation.navigate("RentPage", {
            val: val
        });
    }
    return (
        <View>
            <Picker
                selectedValue={val}
                onValueChange={(itemValue, itemIndex) => {
                    setValue(itemValue);
                }
                }
            >
                <Picker.Item label="Java" value="Java" />
                <Picker.Item label="JavaScript" value="JavaScript" />
            </Picker >
        </View>
    )
}