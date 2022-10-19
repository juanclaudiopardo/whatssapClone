import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const InputBox = () => {
  const [newMessage, setNewMessage] = useState('');

  const onSend = () => {
    setNewMessage('');
  };

  return (
    <SafeAreaView edges={'bottom'} style={styles.container}>
      <AntDesign name='plus' size={24} color='royalblue' />
      <TextInput
        style={styles.input}
        onChangeText={setNewMessage}
        value={newMessage}
      />
      <MaterialIcons
        onPress={onSend}
        style={styles.send}
        name='send'
        size={16}
        color='white'
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    paddingHorizontal: 10,
    // paddingBottom: 30,
    // paddingTop: 15,
  },
  input: {
    backgroundColor: 'white',
    height: 35,
    borderRadius: 20,
    flex: 1,
    paddingHorizontal: 10,
    borderColor: 'lightgrey',
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 10,
  },
  send: {
    backgroundColor: 'royalblue',
    padding: 7,
    borderRadius: 15,
    overflow: 'hidden',
  },
});
export default InputBox;
