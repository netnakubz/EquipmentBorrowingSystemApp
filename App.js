import * as React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  useColorScheme,
  ScrollView,
} from 'react-native';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import ListChat from './pages/ListChat';
import 'react-native-gesture-handler';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
//Screen
import { Navbar } from './components/Navbar';
import { HomeScreen } from './pages/HomeScreen';
import { LikeScreen } from './pages/LikeScreen';
import { PersonalScreen } from './pages/PersonalScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'home-outline';
              } else if (route.name === 'LikeScreen') {
                iconName = 'heart-outline';
              } else if (route.name === 'PersonalScreen') {
                iconName = 'person-outline';
              } else if (route.name === 'ChatRoom') {
                iconName = 'chatbubbles-outline';
              }
              if (focused) {
                color = '#FF6280';
              }
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },

            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: [
              {
                display: 'flex',
              },
              null,
            ],
          })}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="LikeScreen" component={LikeScreen} />
          <Tab.Screen name="ChatRoom" component={ListChat} />
          <Tab.Screen name="PersonalScreen" component={PersonalScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
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
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    marginTop: 10,
    flex: 1
  }
});
