import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Picker, Button } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import ModalSelector from 'react-native-modal-selector'

import { TouchableOpacity } from "react-native-gesture-handler";
import API from "../env/API";
export default function LendPage({ route }) {
    const [textValue, setTextValue] = useState("");
    const [open, setOpen] = useState(false);
    const [myItems, setMyItems] = useState();
    // const { val } = route.params;
    const { params } = route;
    const [value, setValue] = useState();
    const handleText = (text) => {
        setTextValue(text);
    }
    const navigation = useNavigation();

    const updateVal = (val) => {
        setValue(val);
    }
    const handlePostBtn = async () => {
        API.lendPost({
            details: 'asdfasdf',
            itemId: value.itemId,
            userId: value.userId
        }).then(() => {
            navigation.goBack();
        })
    }
    const getEquipment = async () => {
        const data = await API.getEquipmentByUserId();
        setMyItems(data);
        setValue(data[0])
    }
    const handleSelectItem = (selector) => {
        setValue(selector);
    }
    useEffect(() => {
        getEquipment();
    }, []);

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
                <ModalSelector
                    onChange={(selector) => {
                        handleSelectItem(selector);
                    }}
                    ref={selector => { selector = selector; }}
                    data={myItems}
                    keyExtractor={item => item.itemId}
                    labelExtractor={item => item.name}
                >
                    <TouchableOpacity>
                        <View style={[styles.dropdown]}>
                            <View>
                                <Text style={{ textAlign: 'center', color: "#777777" }}>{value?.name}</Text>
                            </View>
                            <View style={{ right: 0, position: 'absolute' }}>
                                <Ionicons size={20} name="chevron-down-circle-outline" />
                            </View>
                        </View>
                    </TouchableOpacity>
                </ModalSelector>

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