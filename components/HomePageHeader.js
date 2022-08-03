import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { UnderHeader } from "./UnderHeader";
import { Card, Overlay, SearchBar } from 'react-native-elements';

export const HomePageHeader = ({ content, page }) => {
    const [searchText, setSearchText] = useState('');
    const [value, setValue] = useState(null);
    const [typeOfItem, setTypeOfItem] = useState([]);
    const [selectedType, setSelectedType] = useState('all');

    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
    ];

    const handleSearchText = e => {
        setSearchText(e);
    };

    return (
        <View>
            <View>
                <Text style={styles.textContent}>{content}</Text>
                <Text style={styles.textHeader}>{page === "FindToBorrow" ? "Find To Borrow" : "Find To Lend"}</Text>
                <UnderHeader page={page} />
            </View>
            <View>
                <SearchBar
                    round={true}
                    platform="android"
                    lightTheme={true}
                    placeholder="What are you looking for?"
                    onChangeText={e => handleSearchText(e)}
                    value={searchText}
                />
            </View>
            <View>
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={selectedType}
                    searchPlaceholder="Search..."
                    value={value}
                    onChange={item => {
                        setValue(item.value);
                    }}
                />
            </View>
        </View >
    );
}
const styles = StyleSheet.create({

    textHeader: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    dropdown: {
        width: 70,
        textAlign: 'center',
        margin: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    textContent: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
