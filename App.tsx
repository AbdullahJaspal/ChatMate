import 'react-native-gesture-handler';
import React from 'react';
import Test from './src/screens/test/test';
import ChatScreen from './src/screens/chatScreen/chatScreen';
import {SafeAreaView} from 'react-native';
import FriendProfile from './src/screens/friendProfile/friendProfile';
import Conversations from './src/screens/conversations/conversations';
import FriendList from './src/screens/friendList/friendList';
import LandingPage from './src/screens/landingPage/landingPage';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Conversations />
    </SafeAreaView>
  );
};

export default App;
