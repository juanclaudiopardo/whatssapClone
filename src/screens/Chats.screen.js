import { View, Text, FlatList } from 'react-native';
import React from 'react';
import ChatListItem from '../components/ChatListItem';
import chat from '../../assets/data/chats.json';

const Chats = () => {
  const chatdata = chat;
  return (
    <FlatList
      data={chatdata}
      renderItem={({ item }) => <ChatListItem data={item} />}
      style={{ backgroundColor: 'white' }}
    />
  );
};

export default Chats;
