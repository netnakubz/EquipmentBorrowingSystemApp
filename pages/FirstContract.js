import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Dimensions, SafeAreaView, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Modal, Touchable } from "react-native";
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Section } from "../components/Section";
import ModalSelector from 'react-native-modal-selector'
import { Input } from "react-native-elements";
import { ContractModal } from "../components/ContractModal";
import DateTimePicker from '@react-native-community/datetimepicker';

export const FirstContract = ({ navigation, route }) => {
    const [userItem, setUserItem] = useState("");
    const [userIdOwner, setUserIdOwner] = useState({});
    const [userIdBorrower, setUesrIdBorrower] = useState({});
    const [totalItem, setTotalItem] = useState(10);
    const [equipment, setEquipment] = useState({});
    const [totalRent, setTotalRent] = useState();
    const [price, setPrice] = useState();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [fineLate, setFineLate] = useState();
    const [fineBroken, setFineBroken] = useState();
    const [editStatus, setEditStatus] = useState("");
    const [itemId, setItemId] = useState("");
    const [totalRentModalVisible, setTotalRentModalVisible] = useState(false);
    const [priceModalVisible, setPriceModalVisible] = useState(false);
    const [fineLateModalVisible, setFineLateModalVisible] = useState(false);
    const [fineBrokenModalVisible, setFineBrokenModalVisible] = useState(false);
    const [startDateModalVisible, setStartDateModalVisible] = useState(false);
    const [endDateModalVisible, setEndDateModalVisible] = useState(false);
    const { setNewContract, newContract, values, save } = route.params;
    const [show, setShow] = useState(false);
    const handleSendContract = () => {
        let contract = {
            userIdOwner: userIdOwner,
            userIdBorrower: userIdBorrower,
            equipment: equipment,
            totalRent: totalRent,
            price: price,
            startDate: startDate,
            endDate: endDate,
            fineLate: fineLate,
            fineBroken: fineBroken
        }
        setNewContract(contract);
        navigation.goBack();
    }
    const showMode = (currentMode) => {
        if (Platform.OS === 'android') {
            setShow(false);
            // for iOS, add a button that closes the picker
        }
        setMode(currentMode);
    };
    const getEquipment = () => {
    }
    const setValues = async () => {
        if (values) {
            let temp = JSON.parse(values);
            console.log(temp);

            setEquipment(temp.equipment)
            setUserIdOwner(temp.userIdOwner)
            setUesrIdBorrower(temp.userIdBorrower)
            setTotalRent(temp.totalRent)
            setStartDate(new Date(temp.startDate))
            setEndDate(new Date(temp.endDate))
            setPrice(temp.price)
            setFineLate(temp.fineLate)
            setFineBroken(temp.fineBroken)
            console.log(equipment);
        }
    }
    useEffect(() => {
        setValues();
    }, []);
    const data = [
        { id: 10001, name: "สมชาย รักดี" },
        { id: 10002, name: 'สมศรี สายทอง' },
    ];
    const equipments = [
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
    ]

    const handleSelectOwner = (selector) => {
        if (selector.id !== userIdOwner.id)
            setEquipment({});
        setUserIdOwner(selector)
        let value = selector.id === data[0].id ? 1 : 0;
        setUesrIdBorrower(data[value]);
    }
    const handlePrice = (e) => {
        setPrice(e);
    }
    const handleItemPick = (e) => {
        setEquipment(e);
    }
    const handleTotalRent = (e) => {
        if (e <= equipment.total)
            setTotalRent(e);
    }
    const handleFineLate = (e) => {
        setFineLate(e);
    }
    const handleFineBroken = (e) => {
        setFineBroken(e)
    }
    const handleStartDate = (event, selectedDate) => {
        const currentDate = selectedDate;
        setStartDate(currentDate);
    }
    const handleEndDate = (event, selectedDate) => {
        const currentDate = selectedDate;
        setEndDate(currentDate);
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                }} >
                <View style={{ flex: 1 }}>
                    <ModalSelector
                        onChange={(selector) => {
                            handleSelectOwner(selector)
                        }}
                        ref={selector => { selector = selector; }}
                        data={data}
                        keyExtractor={item => item.id}
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
                    <View style={{ flexDirection: 'row', height: 30, alignItems: 'center' }}>
                        <Text style={{ textAlignVertical: 'center' }}>การเช่า</Text>
                    </View>
                    <ModalSelector
                        onChange={(selector) => {
                            handleItemPick(selector)
                        }}
                        ref={selector => { selector = selector; }}
                        data={equipments.filter(item => item.owner === userIdOwner.id)}
                        keyExtractor={item => item.id}
                        labelExtractor={item => item.name}
                    >
                        <TouchableOpacity>
                            <Section >
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 16 }}>อุปกรณ์</Text>
                                        <Text style={{ color: "#FF6820" }}> *</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 16 }}>{equipment.name}</Text>
                                        <Ionicons name="chevron-forward" size={30} color={"#B4B4B4"} />
                                    </View>
                                </View>
                            </Section>
                        </TouchableOpacity>
                    </ModalSelector>
                    {equipment.total &&
                        <ContractModal
                            visible={totalRentModalVisible}
                            setVisible={setTotalRentModalVisible}
                            defaultValue={totalRent}
                            placeholder={"จำนวนที่เช่า"}
                            handleItem={handleTotalRent}
                            totalItem={equipment.total}
                        />
                    }
                    <TouchableOpacity
                        onPress={() => {
                            setTotalRentModalVisible(true);
                        }}
                    >
                        <Section >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16 }}>จำนวนที่เช่า</Text>
                                    <Text style={{ color: "#FF6820" }}> *</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16 }}>{totalRent}</Text>
                                    <Ionicons name="chevron-forward" size={30} color={"#B4B4B4"} />
                                </View>
                            </View>
                        </Section>
                    </TouchableOpacity>
                    <ContractModal
                        visible={priceModalVisible}
                        setVisible={setPriceModalVisible}
                        defaultValue={price}
                        placeholder={"ราคาต่อวัน"}
                        handleItem={handlePrice}
                    />
                    <TouchableOpacity
                        onPress={() => setPriceModalVisible(true)}
                    >
                        <Section >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16 }}>ราคา</Text>
                                    <Text style={{ color: "#FF6820" }}> *ต่อวันต่อชิ้น</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16 }}>{price}</Text>
                                    <Ionicons name="chevron-forward" size={30} color={"#B4B4B4"} />
                                </View>
                            </View>
                        </Section>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', height: 30, alignItems: 'center' }}>
                        <Text style={{ textAlignVertical: 'center' }}>ค่าปรับต่อวันต่อชิ้น</Text>
                    </View>
                    <ContractModal
                        visible={fineLateModalVisible}
                        setVisible={setFineLateModalVisible}
                        defaultValue={fineLate}
                        placeholder={"ค่าปรับล่าช้า"}
                        handleItem={handleFineLate}
                    />
                    <TouchableOpacity
                        onPress={() => setFineLateModalVisible(true)}
                    >
                        <Section >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16 }}>ค่าปรับล่าช้า</Text>
                                    <Text style={{ color: "#FF6820" }}> *</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16 }}>{fineLate}</Text>
                                    <Ionicons name="chevron-forward" size={30} color={"#B4B4B4"} />
                                </View>
                            </View>
                        </Section>
                    </TouchableOpacity>
                    <ContractModal
                        visible={fineBrokenModalVisible}
                        setVisible={setFineBrokenModalVisible}
                        defaultValue={fineBroken}
                        placeholder={"ค่าปรับความเสียหาย"}
                        handleItem={handleFineBroken}
                    />
                    <TouchableOpacity
                        onPress={() => setFineBrokenModalVisible(true)}
                    >
                        <Section >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16 }}>ค่าปรับเสียหาย</Text>
                                    <Text style={{ color: "#FF6820" }}> *</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16 }}>{fineBroken}</Text>
                                    <Ionicons name="chevron-forward" size={30} color={"#B4B4B4"} />
                                </View>
                            </View>
                        </Section>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', height: 30, alignItems: 'center' }}>
                        <Text style={{ textAlignVertical: 'center' }}>ระยะเวลา</Text>
                    </View>

                    <ContractModal
                        visible={startDateModalVisible}
                        setVisible={setStartDateModalVisible}
                        defaultValue={startDate}
                        placeholder={"วันที่"}
                        handleItem={handleStartDate}
                        type="date"
                    />
                    <TouchableOpacity
                    >
                        <Section >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16 }}>วันเริ่มต้น</Text>
                                    <Text style={{ color: "#FF6820" }}> *</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <DateTimePicker
                                        style={{ width: 100 }}
                                        testID="dateTimePicker"
                                        value={startDate}
                                        mode={"date"}
                                        is24Hour={true}
                                        onChange={handleStartDate}
                                    />
                                    <Ionicons name="chevron-forward" size={30} color={"#B4B4B4"} />
                                </View>
                            </View>
                        </Section>
                    </TouchableOpacity>

                    <TouchableOpacity

                    >
                        <Section >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16 }}>วันสิ้นสุด</Text>
                                    <Text style={{ color: "#FF6820" }}> *</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <DateTimePicker
                                        style={{ width: 100 }}
                                        testID="dateTimePicker"
                                        value={endDate}
                                        mode={"date"}
                                        is24Hour={true}
                                        onChange={handleEndDate}
                                    />
                                    <Ionicons name="chevron-forward" size={30} color={"#B4B4B4"} />
                                </View>
                            </View>
                        </Section>
                    </TouchableOpacity>
                </View >
            </ScrollView>
            {save &&
                <View style={{ backgroundColor: 'white', height: 70, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => handleSendContract()}
                    >
                        <View style={{
                            backgroundColor: "#FF6280",
                            width: 300,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 30
                        }}>
                            <Text style={{ color: 'white', fontSize: 20 }}>บันทึกและเสนอ</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            }

        </SafeAreaView >

    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
});