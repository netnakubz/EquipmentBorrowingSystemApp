import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import { Section } from "../components/Section";
import { Input } from "react-native-elements";
export const EquipmentSettings = ({ navigation }) => {
    const [countItem, setCountItem] = useState(1);
    const [serials, setSerials] = useState([]);
    const [objects, setObjects] = useState([{ key: "abc", serial: "", price: 0 }]);
    const scrollViewRef = useRef();
    const handleSaveBtn = () => {
    }
    const handlePressDelete = (key) => {
        const index = objects.findIndex(item => item.key === key);
        if (countItem > 1) {
            setCountItem(prev => --prev);
            objects.splice(index, 1);
            setObjects(prev => [...prev]);
        }
    }
    const handlePressAddItem = () => {
        let key = (Math.random() + 1).toString(36).substring(2);
        setCountItem(prev => ++prev);
        setObjects(prev => [...prev, { key: key, serial: "", price: 0 }]);
    }
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.9 }}>
                <ScrollView
                    ref={scrollViewRef}
                    onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                >
                    <Section marginTop={10}>
                        <View style={[styles.row, styles.storage]}>
                            <View style={styles.row}>
                                <View>
                                    <Ionicons name="layers-outline" size={20} />
                                </View>
                                <View>
                                    <Text>คลัง</Text>
                                </View>
                            </View>
                            <View>
                                <Text>{countItem}</Text>
                            </View>
                        </View>
                    </Section>
                    <View style={[styles.row, { justifyContent: 'space-between' }]}>
                        <View style={{ flex: 0.6, marginTop: 40, marginLeft: 30 }}>
                            <Text>Serial Number</Text>
                        </View>
                        <View style={{ flex: 0.4, marginTop: 40 }}>
                            <Text>ราคาต่อวัน</Text>
                        </View>
                    </View>
                    {
                        countItem && objects.map((el, i) => (
                            <Section marginTop={3} key={el.key}>
                                <View style={[styles.row, { justifyContent: 'space-between', maxHeight: 20, alignItems: 'center' }]}>
                                    <View style={{ flex: 0.6, marginTop: 10 }}>
                                        <Input
                                            placeholder="HX1234ER"
                                            inputContainerStyle={{
                                                borderBottomColor: "#00000000"
                                            }}
                                        />
                                    </View>
                                    <View style={{ flex: 0.4, marginTop: 10 }}>
                                        <Input
                                            placeholder="20"
                                            keyboardType="numeric"
                                            containerStyle={{
                                                width: 120
                                            }}
                                            inputContainerStyle={{
                                                borderWidth: 1,
                                                borderRadius: 20,
                                            }}
                                            textAlign="center"
                                        />
                                    </View>
                                    <View>
                                        <TouchableOpacity
                                            onPress={() => handlePressDelete(el.key)}
                                        >
                                            <Ionicons
                                                name="remove"
                                                size={20}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Section>
                        ))
                    }
                    <Section marginTop={10}>
                        <TouchableOpacity
                            onPress={() => handlePressAddItem()}
                        >
                            <View style={styles.row}>
                                <View>
                                    <Ionicons name="add-circle-outline" color={"#FF6280"} size={20} />
                                </View>
                                <View>
                                    <Text> เพิ่มอุปกรณ์</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Section>
                </ScrollView>

            </View>
            <View style={{ flex: 0.1 }}>
                <View style={[styles.saveBtn, styles.row]}>
                    <TouchableOpacity
                        style={styles.btnStyle}
                        onPress={() => handleSaveBtn()}
                    >
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>บันทึก</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        flexDirection: "row"
    },
    storage: {
        justifyContent: 'space-between',
        alignItems: "center"
    },
    saveBtn: {
        position: "absolute",
        justifyContent: "center",
        bottom: 10,
        width: '100%',

    },
    btnStyle: {
        backgroundColor: "#FF6280",
        borderRadius: 40,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
    },
})