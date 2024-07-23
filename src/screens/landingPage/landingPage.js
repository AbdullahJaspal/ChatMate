import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity, View} from 'react-native';
import {primary} from '../../constants/Colors';

const LandingPage = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        style={{
          backgroundColor: primary,
          height: 50,
          width: 180,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontFamily: 'chivo', fontSize: 18, color: 'white'}}>
          Find Chat
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingPage;
