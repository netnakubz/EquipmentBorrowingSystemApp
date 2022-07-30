import {
    Image,
    Text,
    View,
    TouchableOpacity,
    StyleSheet,

} from 'react-native';
import { Card } from 'react-native-paper';


export default function Chat({ props, navigation, user }) {
    const name = props.user_one != user ? props.user_one_name : props.user_two_name;
    const onPressChat = (roomId) => {
        navigation.navigate('DirectMessage', {
            roomId: roomId,
            destination: props.name,
            user: user
        });
    };
    return (
        <TouchableOpacity
            onPress={() => {
                onPressChat(props.room_ID);
            }}>
            <Card style={styles.card}>
                <View style={styles.row}>
                    <View>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={{
                                uri: props.image,
                            }}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <View>
                            <Text style={styles.chatName}>{name}</Text>
                        </View>
                        {/* <View>
                            <Text>{chat}</Text>
                        </View> */}
                    </View>
                    {/* <View style={{ flex: 1 }}>
                        <Text style={{ textAlign: 'right' }}>{time}</Text>
                    </View> */}
                </View>
            </Card>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
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
