import * as React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import ListChat from './pages/ListChat';
export default function App() {
  return <ListChat />;
}
const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  col: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  card: {
    padding: 10,
  },
  chatName: {
    fontWeight: 'bold',
  },
});
