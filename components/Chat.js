import {
    Image,
    Text,
    View,
    TouchableOpacity,
    StyleSheet,

} from 'react-native';
import { Card } from 'react-native-paper';


export default function Chat({ props, navigation, user }) {
    const name = props.userTwoName;
    const onPressChat = (roomId) => {
        console.log('Clicked');
        navigation.navigate('DirectMessage', {
            roomId: roomId,
            destination: props.name,
            user: user
        });
    };
    return (
        <TouchableOpacity
            onPress={() => {
                onPressChat(props.id);
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
