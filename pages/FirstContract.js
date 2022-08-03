import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, LogBox, SafeAreaView, ScrollView, Touchable } from "react-native";
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Section } from "../components/Section";
import ModalSelector from 'react-native-modal-selector'

export const FirstContract = ({ navigation, route }) => {
    const [userItem, setUserItem] = useState("");
    const [userIdOwner, setUserIdOwner] = useState({});
    const [userIdBorrower, setUesrIdBorrower] = useState({});
    const [totalRent, setTotalRent] = useState("");
    const [price, setPrice] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [fineLate, setFineLate] = useState("");
    const [fineBroken, setFindBroken] = useState("");
    const [editStatus, setEditStatus] = useState("");
    const [itemId, setItemId] = useState("");
    useEffect(() => {
        console.log(route);
    }, []);
    let index = 0;
    const data = [
        { index: 123, name: "สมชาย รักดี" },
        { index: 124, name: 'สมศรี สายทอง' }
    ];
    const handleSelectOwner = (selector) => {
        setUserIdOwner(selector)
        let value = selector.index === 0 ? 1 : 0;
        setUesrIdBorrower(data[value]);
    }
    const handleItemPick = (e) => { }
    const handleTotalRent = (e) => { }

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <ModalSelector
                        onChange={(selector) => {
                            handleSelectOwner(selector)
                        }}
                        ref={selector => { selector = selector; }}
                        data={data}
                        keyExtractor={item => item.index}
                        labelExtractor={item => item.name}
                    >
                        <TouchableOpacity>
                            <Section marginTop={10}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 16 }}>เจ้าของ</Text>
                                        <Text style={{ color: "#FF6820" }}> *</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text>{userIdOwner.name}</Text>
                                        <Ionicons name="chevron-forward" size={30} color={"#B4B4B4"} />
                                    </View>
                                </View>
                            </Section>
                        </TouchableOpacity>
                    </ModalSelector>
                    <TouchableOpacity>
                        <Section marginTop={2}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16 }}>ผู้เช่า</Text>
                                    <Text style={{ color: "#FF6820" }}> *</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text>{userIdBorrower.name}</Text>
                                </View>
                            </View>
                        </Section>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', height: 30, alignItems: 'center' }}>
                        <Text style={{ textAlignVertical: 'center' }}>การเช่า</Text>
                    </View>
                    <TouchableOpacity>
                        <Section >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16 }}>อุปกรณ์</Text>
                                    <Text style={{ color: "#FF6820" }}> *</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Ionicons name="chevron-forward" size={30} color={"#B4B4B4"} />
                                </View>
                            </View>
                        </Section>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Section >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16 }}>จำนวนที่เช่า</Text>
                                    <Text style={{ color: "#FF6820" }}> *</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Ionicons name="chevron-forward" size={30} color={"#B4B4B4"} />
                                </View>
                            </View>
                        </Section>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Section >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16 }}>ราคา</Text>
                                    <Text style={{ color: "#FF6820" }}> *ต่อวันต่อชิ้น</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Ionicons name="chevron-forward" size={30} color={"#B4B4B4"} />
                                </View>
                            </View>
                        </Section>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', height: 30, alignItems: 'center' }}>
                        <Text style={{ textAlignVertical: 'center' }}>ค่าปรับต่อวันต่อชิ้น</Text>
                    </View>
                    <TouchableOpacity>
                        <Section >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16 }}>ค่าปรับล่าช้า</Text>
                                    <Text style={{ color: "#FF6820" }}> *</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Ionicons name="chevron-forward" size={30} color={"#B4B4B4"} />
                                </View>
                            </View>
                        </Section>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Section >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16 }}>ค่าปรับเสียหาย</Text>
                                    <Text style={{ color: "#FF6820" }}> *</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Ionicons name="chevron-forward" size={30} color={"#B4B4B4"} />
                                </View>
                            </View>
                        </Section>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', height: 30, alignItems: 'center' }}>
                        <Text style={{ textAlignVertical: 'center' }}>ระยะเวลา</Text>
                    </View>
                    <TouchableOpacity>
                        <Section >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16 }}>วันเริ่มต้น</Text>
                                    <Text style={{ color: "#FF6820" }}> *</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Ionicons name="chevron-forward" size={30} color={"#B4B4B4"} />
                                </View>
                            </View>
                        </Section>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Section >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16 }}>วันสิ้นสุด</Text>
                                    <Text style={{ color: "#FF6820" }}> *</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Ionicons name="chevron-forward" size={30} color={"#B4B4B4"} />
                                </View>
                            </View>
                        </Section>
                    </TouchableOpacity>

                </View >
            </ScrollView>
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    style={{ width: "100%" }}
                >
                    <View>
                        <Text style={{ color: "#FF6820" }}>บันทึกและเสนอ</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView >

    );
}

const styles = StyleSheet.create({

});