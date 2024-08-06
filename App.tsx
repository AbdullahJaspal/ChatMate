import 'react-native-gesture-handler';
import React from 'react';
import Test from './src/screens/test/test';
import ChatScreen from './src/screens/chatScreen/chatScreen';
import {SafeAreaView} from 'react-native';
import FriendProfile from './src/screens/friendProfile/friendProfile';
import Conversations from './src/screens/conversations/conversations';
import FriendList from './src/screens/friendList/friendList';
import LandingPage from './src/screens/landingPage/landingPage';
import HingedInputScreen from './src/screens/HingedInput/hingedInputScreen';
import CompanyEmploye from './src/screens/companyEmploye/companyEmploye';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CompanyEmploye />
    </SafeAreaView>
  );
};

export default App;
