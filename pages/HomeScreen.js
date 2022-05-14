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
import Swiper from 'react-native-swiper'


import axios from 'axios';
import { Card, Overlay, SearchBar } from 'react-native-elements';
import { Product } from '../components/Product';
import { ProductPage } from "./ProductPage"
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { FindToBorrowPage } from "./FindToBorrowPage";
import { FindToLendPage } from './FindToLendPage';
const RenderHomeScreen = () => {
  return (
    <Swiper
      showsPagination={false}
      loop={false}
    >
      <FindToBorrowPage />
      <FindToLendPage />
    </Swiper>
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
