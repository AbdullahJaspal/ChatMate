import 'react-native-gesture-handler';
import React from 'react';
import Test from './src/screens/test/test';
import ChatScreen from './src/screens/chatScreen/chatScreen';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ChatScreen />
    </SafeAreaView>
  );
};

export default App;
