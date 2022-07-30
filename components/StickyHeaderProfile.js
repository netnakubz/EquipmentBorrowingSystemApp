import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Card } from "react-native-elements"
import { StickyHeaderScrollView } from 'react-native-simple-sticky-header';
import { Profile } from './Profile';
import DATA from './data';
import Hr from './Hr';

export default function App(props) {
    const { items } = props;
    const itemHeight = 200 * (items.length / 3);
    const [showPage, setShowPage] = useState("myItems");
    const [isOwnerProfile, setIsOwnerProfile] = useState(true);
    const hadleShowPage = (page) => {
        setShowPage(page);
    }
    return (
        <StickyHeaderScrollView
            top={() => (
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}
                >
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Profile isOwnerProfile={isOwnerProfile} />
                    </View>
                </View>
            )}
            bottom={() => (
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        width: '100%',
                        height: 50,
                        alignItems: "center",
                    }}
                >
                    <TouchableOpacity
                        onPress={() => hadleShowPage("myItems")}
                    >
                        <Feather size={25} name="grid" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => hadleShowPage("receipt")}
                    >
                        <Feather size={25} name="file-text" />
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => hadleShowPage("myItems")}
                    >
                        <Feather size={25} name="sliders" />
                    </TouchableOpacity>
                </ View>
            )}
            topHeight={180}
            bottomHeight={180}
            scrollViewBackground={'#f7f7f7'}
        >
            <View style={[styles.container, { top: isOwnerProfile ? - 65 : -10, height: isOwnerProfile ? itemHeight + 118 : itemHeight + 175 }]}>
                <View style={[styles.row]}>
                    {showPage === "myItems" &&
                        items.map((item) => (
                            <View style={[styles.col]} key={item.name}>
                                <Image
                                    style={{ width: "100%", height: "100%" }}
                                    resizeMode='cover'
                                    source={{ uri: 'https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg' }}
                                />
                            </View>
                        )) ||
                        showPage === "receipt" &&
                        <View>
                            <Text>Hello</Text>
                        </View>
                    }
                </View>
            </View>
        </StickyHeaderScrollView >
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