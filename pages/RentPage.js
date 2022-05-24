import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, Modal } from "react-native";
import { Input } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DismissKeyboard } from "../components/DismissKeybord";
import { Section } from "../components/Section";


export const RentPage = () => {
    const [postDetails, setPostDetails] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const handlePostDetails = (e) => {
        setPostDetails(e);
    }
    const handlePricePerDay = () => { console.log("price") }
    const handlePeriod = () => { console.log("period") }
    const handleSaveBtn = () => { console.log("save") }

    return (
        <DismissKeyboard>
            <View style={styles.container}>
                <View style={{ flex: 0.9 }}>
                    <Section marginTop={10}>
                        <View>
                            <View style={[styles.row, styles.postDetails]}>
                                <View style={styles.row}>
                                    <Text>รายละเอียดโพสต์</Text>
                                    <Text style={{ color: "#FF6280" }}> *</Text>
                                </View>
                                <View>
                                    <Text style={{
                                        color: "#464646"
                                    }}>
                                        {postDetails.length}/500
                                    </Text>
                                </View>
                            </View>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                    Alert.alert("Modal has been closed.");
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <TouchableOpacity
                                            style={[styles.button, styles.buttonClose]}
                                            onPress={() => setModalVisible(!modalVisible)}
                                        >
                                            <Ionicons name="close-outline" size={40} />
                                            {/* <Text style={styles.textStyle}>Hide Modal</Text> */}
                                        </TouchableOpacity>
                                        <View style={{ padding: 20 }}>
                                            <Input
                                                onPressIn={() => setModalVisible(true)}
                                                multiline={true}
                                                defaultValue={postDetails}
                                                maxLength={500}
                                                containerStyle={{
                                                    height: Dimensions.get('window').height,
                                                }}
                                                inputContainerStyle={{
                                                    borderBottomColor: "#00000000"
                                                }}
                                                placeholder="เพิ่มรายละเอียดอุปกรณ์"
                                                onChangeText={(e) => handlePostDetails(e)}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </Modal>
                            <View
                                style={[styles.row, { maxHeight: 1000 }]}
                            >
                                <TouchableOpacity
                                    onPress={() => setModalVisible(true)}
                                >
                                    <Text style={{ color: '#898989', fontSize: 20, flexWrap: 'wrap' }}>{postDetails ? postDetails : "เพิ่มรายละเอียดอุปกรณ์"}</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </Section >
                    <Section marginTop={5}>
                        <TouchableOpacity
                            onPress={() => { handlePricePerDay() }}
                        >
                            <View style={[styles.row, { justifyContent: 'space-between' }]}>
                                <View style={styles.row}>
                                    <View>
                                        <Ionicons name="pricetag-outline" size={30} color="#464646" />
                                    </View>
                                    <View style={styles.row}>
                                        <Text> ราคาต่อวัน</Text>
                                        <Text style={{ color: '#FF6280' }}> * ไม่เกิน</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ color: "#464646" }}>ตั้งค่า</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Section>
                    <Section marginTop={2}>
                        <TouchableOpacity
                            onPress={() => { handlePeriod() }}
                        >
                            <View style={[styles.row, { justifyContent: 'space-between' }]}>
                                <View style={styles.row}>
                                    <View>
                                        <Ionicons name="time-outline" size={30} color="#464646" />
                                    </View>
                                    <View style={styles.row}>
                                        <Text> ระยะเวลา(วัน)</Text>
                                        <Text style={{ color: '#FF6280' }}> * </Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ color: "#464646" }}>ตั้งค่า</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Section>
                </View >
                <View style={{ flex: 0.1 }}>
                    <View style={[styles.saveBtn, styles.row]}>
                        <View style={{ width: '90%', height: '100%', justifyContent: 'center' }}>
                            <TouchableOpacity
                                style={styles.btnStyle}
                                onPress={() => handleSaveBtn()}
                            >
                                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>โพสต์</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View >
        </DismissKeyboard >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        flexDirection: 'row'
    },
    postDetails: {
        justifyContent: 'space-between'
    },
    btnStyle: {
        backgroundColor: "#FF6280",
        borderRadius: 40,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    saveBtn: {
        position: "absolute",
        justifyContent: "center",
        bottom: 10,
        width: '100%',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        marginLeft: 10,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});