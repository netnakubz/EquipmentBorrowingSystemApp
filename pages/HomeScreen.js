import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { Dropdown } from 'react-native-element-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';

import axios from 'axios';
import { Card, Overlay, SearchBar } from 'react-native-elements';
import { Product } from '../components/Product';
import { ProductPage } from "./ProductPage"

import { createNativeStackNavigator } from "@react-navigation/native-stack"

const RenderHomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [typeOfItem, setTypeOfItem] = useState([]);
  const [value, setValue] = useState(null);
  const [selectedType, setSelectedType] = useState('all');
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState('New Arrivals');
  // const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImIwNmExMTkxNThlOGIyODIxNzE0MThhNjdkZWE4Mzc0MGI1ZWU3N2UiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiS2FuaXQgS3VhZGthZXciLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2pHRnhvT1RCdzdNMXROR2NFUFdxY2g3eERoZ2xreEtTYko4VzVJZ3c9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZXJicy01OWM0NSIsImF1ZCI6ImVyYnMtNTljNDUiLCJhdXRoX3RpbWUiOjE2NDgxODMxMjAsInVzZXJfaWQiOiJNTmZ0N2czS1NBVEZhclFKSUd2RWxrSVA2TzgzIiwic3ViIjoiTU5mdDdnM0tTQVRGYXJRSklHdkVsa0lQNk84MyIsImlhdCI6MTY0ODE4MzEyMCwiZXhwIjoxNjQ4MTg2NzIwLCJlbWFpbCI6InBrYW5pdDQwMUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNDkwOTIzMTYzMzIxNjU4NTA1MSJdLCJlbWFpbCI6WyJwa2FuaXQ0MDFAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.Vm-dLiJYe3Z7zgnHX0FlZBI3kv6xgcxB17k2fKn8STaPpjn9FMKETEkXVyW1aiJ16DBg3Oi_dpFW4PAGNMo2QUftPpnw5vD_ookZePObgMsGlTuvD7-saNLnM67gzEC6ZLNNbr8BKXraCVcTRZ3ToUyTMMkF69SXeOuQ72uoFQyIOuof4Roh52-87FOZwZt0osi-54SSxr0DUtpoP_608gxpzZaifCj3Qtd0u85SA6ZZqUIjAO3cdKAnR3mZOhmXBSp-GPkauw_nNj0RTUNR-XZQ_nRuFh2lMpAH2Vxhf1eNS2EuGifOc6jAItPT2zb5WUy15XDGxwKCVa1DMnIoNA";
  //   const [post, setPost] = useState([]);
  // useEffect(() => {
  //     const fetchData = async () => {
  //Get list of item
  //         const listOfItem = await axios.get("http://192.168.10.111:8080/api/v1/get/post",
  //             {
  //                 headers: { Authorization: `Bearer ${token}`}
  //             }
  //         ).catch(err => {
  //             console.error(err);
  //         });
  //        const listOfType = await axios.get("http://192.168.10.111:8080/api/v1/getListOfItem",{headers: { Authorization: `Bearer ${token}`}})
  //         setPost(listOfItem.data);
  //        setTypeOfItem(listOftype.data)
  //     }
  //     fetchData();
  // }, []);
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
  const post = [
    {
      postId: 1,
      details: 'Post details',
      img: 'https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg',
      price: 50,
    },
    {
      postId: 2,
      details: 'Post details',
      img: 'https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg',
      price: 50,
    },
    {
      postId: 3,
      details: 'Post details',
      img: 'https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg',
      price: 50,
    },
    {
      postId: 4,
      details: 'Post details',
      img: 'https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg',
      price: 50,
    },
    {
      postId: 5,
      details: 'Post details',
      img: 'https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg',
      price: 50,
    },
    {
      postId: 6,
      details: 'Post details',
      img: 'https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg',
      price: 50,
    },

  ];
  const contentType = [
    {
      type: 'New Arrivals',
      color: '#F16B6B',
    },
    {
      type: 'Popular',
      color: '#F9C67A',
    },
    {
      type: 'Recommend',
      color: '#7AC8F9',
    },
  ];
  const handleSearchText = e => {
    setSearchText(e);
  };
  const handlePressAddButton = () => {
    setVisible(!visible);
    console.log('Hello Floting button');
  };
  const handleContent = type => {
    if (content === type) return;
    setContent(type);
  };
  return (
    <View style={styles.container} containerStyle={{ background: 'transparent' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.textContent}>{content}</Text>
          <Text style={styles.textHeader}>Find to Borrow</Text>
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
            search
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
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {contentType.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleContent(item.type)}>
                <View
                  style={[styles.contentType, { backgroundColor: item.color }]}>
                  <Text style={styles.contentText}>{item.type}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.contentColumn}>
          {post.map((item, key) => (
            <View style={{ width: '50%' }} key={key}>
              <Product item={item} />
            </View>
          ))}
        </View>
      </ScrollView>
      <View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Overlay
            overlayStyle={{
              position: 'absolute',
              bottom: 130,
              right: 10,
            }}
            width="auto"
            height="auto"
            isVisible={visible}
            onBackdropPress={() => handlePressAddButton()}>
            <View>
              <TouchableOpacity>
                <Text style={{ textAlign: 'center' }}>สร้างโพสต์ปล่อยเช่า</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop: 10,
                marginBottom: 10,
                borderBottomWidth: 1,
                borderBottomColor: 'black',
              }}
            />
            <View>
              <TouchableOpacity>
                <Text style={{ textAlign: 'center' }}>สร้างโพสต์ขอยืม</Text>
              </TouchableOpacity>
            </View>
          </Overlay>
        </View>
        <View>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'rgba(0,0,0,0)',
              alignItems: 'center',
              justifyContent: 'center',
              width: 60,
              position: 'absolute',
              bottom: 10,
              right: 10,
              height: 60,
              backgroundColor: '#FF6280',
              borderRadius: 100,
            }}
            onPress={() => handlePressAddButton()}>
            <Ionicons name="add-outline" size={50} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const HomeStack = createNativeStackNavigator();
export const HomeScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen component={RenderHomeScreen} name="RenderHomeScreen" />
    </HomeStack.Navigator>
  );
};
const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  container: {
    flex: 1,
    marginTop: 10,
  },
  contentColumn: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    backgroundColor: 'transparent',
    opacity: 0,
  },
  cardCnt: {
    borderWidth: 0,
    shadowColor: 'rgba(0,0,0, 0.0)', // Remove Shadow for iOS
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0, // Remove Shadow for Android
    backgroundColor: 'transparent',
  },
  // cardImg: {
  //   width: width,
  //   borderRadius: 40,
  // },
  cardText: {
    textAlign: 'left',
    fontWeight: 'bold',
  },
  contentType: {
    marginLeft: 5,
    height: 70,
    width: 120,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentText: {
    textAlign: 'left',
    fontWeight: 'bold',
    padding: 5,
    fontSize: 18,
    color: 'white',
  },
  dropdown: {
    width: 70,
    textAlign: 'center',
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    textAlign: 'center',
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  textContent: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
