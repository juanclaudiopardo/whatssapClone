import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useNavigation } from '@react-navigation/native';
dayjs.extend(relativeTime);

const ChatListItem = ({ data }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('Chat', { id: data.id, name: data.user.name })
      }
      style={styles.container}
    >
      <Image
        source={{
          uri: data.user.image,
        }}
        style={styles.image}
      />
      {/* Content Container */}
      <View style={styles.infoContainer}>
        {/* Row */}
        <View style={styles.row}>
          <Text style={styles.name}>{data.user.name}</Text>
          <Text style={styles.time}>
            {dayjs(data.lastMessage.createdAt).fromNow(true)}
          </Text>
        </View>

        <Text style={styles.message}>{data.lastMessage.text}</Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
  },
  infoContainer: {
    flex: 1,
    borderBottomColor: 'lightgray',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  image: { width: 60, aspectRatio: 1, borderRadius: 30, marginRight: 10 },
  row: { flexDirection: 'row', marginBottom: 5 },
  name: { fontSize: 18, fontWeight: 'bold', flex: 1 },
  time: { fontSize: 16, color: 'grey' },
  message: { fontSize: 16, color: 'grey' },
});
export default ChatListItem;
