import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    Dimensions,
    Animated
} from 'react-native';
import Constants from 'expo-constants';
import Hr from "./Hr";
const { interpolate, Extrapolate } = Animated;
const bannerImage = require('../assets/snack-icon.png');
const BANNER_HEIGHT = 180;

export const Profile = (props) => {

    const [profile, setProfile] = useState({
        name: "สมชายรักดี",
        email: "6210210000@psu.ac.th",
        Tel: '0800000000'
    });
    return (
        <View>
            <View style={styles.row}>
                <View>
                    <Image
                        style={styles.profileImage}
                        resizeMode="cover"
                        source={{ uri: "https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg" }}
                    />
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={styles.profileName}>{profile.name}</Text>
                </View>
            </View>
            <Hr size={40} />
            <View style={[styles.personalInfo, styles.row]}>
                <View>
                    <Text style={{ fontSize: 18, color: '#464646' }}>ข้อมูลส่วนตัว</Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            handlePressEditProfile();
                        }}
                    >
                        <Text
                            style={{ color: '#FF6280', fontSize: 18 }}
                        >แก้ไข</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Hr size={40} />
            <View style={styles.personalInfoContents}>
                <View >
                    <Text> Email : {profile.email}</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text> Tel : {profile.Tel}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        // marginTop: 80 + Constants.statusBarHeight,
        width: Dimensions.get('screen').width,
        height: BANNER_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
    },
    banner: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
    },
    button: {
        height: 50,
        width: 150,
        backgroundColor: 'red',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 50
    }
});