import React from 'react';
import {Image, Text, View} from 'react-native';
import {primary} from '../constants/Colors';

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: primary,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={require('../assets/images/logo.png')}
        style={{width: 100, height: 100, resizeMode: 'center'}}
      />
      <Text style={{fontFamily: 'bayon', fontSize: 30}}>Chat Mate</Text>
      <Text style={{fontFamily: 'chivo', fontSize: 18, color: 'white'}}>
        Discover your next friend.
      </Text>
    </View>
  );
};
export default Splash;
