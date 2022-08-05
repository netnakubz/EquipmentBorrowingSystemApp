import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Picker, Button } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from "react-native-gesture-handler";
export default function LendPage({ route }) {
    const [textValue, setTextValue] = useState("");
    const [open, setOpen] = useState(false);
    const [myItems, setMyItems] = useState([
        {
            id: 1,
            name: "arduino",
            owner: 10001,
            total: 3
        },
        {
            id: 2,
            name: "test",
            owner: 10002,
            total: 5
        }
    ]);
    // const { val } = route.params;
    const { params } = route;
    const [value, setValue] = useState(myItems[0].name);
    const handleText = (text) => {
        setTextValue(text);
    }
    const navigation = useNavigation();

    const updateVal = (val) => {
        setValue(val);
    }
    const handlePostBtn = () => {
        console.log("Post btn");
    }
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button
                    title="โพสต์"
                    onPress={() => handlePostBtn()}
                />
            )
        })
        setValue(params ? params.val : value);
    }, [params])
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("PickerItemLendRent", { myItems: myItems })}
                >
                    <View style={[styles.dropdown]}            >
                        <View>
                            <Text style={{ textAlign: 'center', color: "#777777" }}>{value}</Text>
                        </View>
                        <View style={{ right: 0, position: 'absolute' }}>
                            <Ionicons size={20} name="chevron-down-circle-outline" />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <View>
                    <TextInput
                        placeholder="Type text..."
                        multiline
                        numberOfLines={4}
                        onChangeText={(text) => handleText(text)}
                        value={textValue}
                        style={styles.textInput}
                        maxLength={500}
                        editable
                    />
                </View>
                <View style={{ position: "absolute", bottom: 20, right: 50 }}>
                    <Text>{textValue.length}/500</Text>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    dropdown: {
        marginTop: 10,
        borderWidth: 1,
        width: 200,
        height: 30,
        borderRadius: 30,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textInput: {
        height: 40,
        width: 300,
        borderRadius: 20,
        height: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }

});