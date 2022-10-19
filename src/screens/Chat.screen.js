import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useEffect } from 'react';
import bg from '../../assets/BG.png';
import message from '../../assets/data/messages.json';
import Message from '../components/Message';
import InputBox from '../components/InputBox';
import { useNavigation } from '@react-navigation/native';
const messages = message;

const Chat = ({ route }) => {
  const id = route.params?.id;
  const name = route.params?.name;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, [name]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 70 : 90}
    >
      <ImageBackground source={bg} style={styles.bg}>
        <FlatList
          data={messages}
          renderItem={({ item }) => <Message message={item} />}
          inverted
          style={styles.list}
        />
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
});
export default Chat;
