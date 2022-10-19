import { FlatList } from 'react-native';
import chat from '../../assets/data/chats.json';
import ContactListItem from '../components/ContactListItem';

const Contacts = () => {
  const chatdata = chat;
  return (
    <FlatList
      data={chatdata}
      renderItem={({ item }) => <ContactListItem data={item} />}
      style={{ backgroundColor: 'white' }}
    />
  );
};

export default Contacts;
