import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useNavigation } from '@react-navigation/native';
dayjs.extend(relativeTime);

const ContactListItem = ({ data }) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => {}} style={styles.container}>
      <Image
        source={{
          uri: data.user.image,
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.name}>{data.user.name}</Text>
        <Text numberOfLines={2} style={styles.subtitle}>
          {data.user.status}
        </Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
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
  name: { fontSize: 18, fontWeight: 'bold' },
});
export default ContactListItem;
