import React from 'react';
import {Dimensions, Image, Text} from 'react-native';
import {TouchableOpacity, View} from 'react-native';
import {primary} from '../../constants/Colors';
const {width, height} = Dimensions.get('screen');
const LandingPage = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={require('../../assets/icons/findChat.png')}
        style={{width: width / 1.4, height: width / 1.4, resizeMode: 'contain'}}
      />
      <TouchableOpacity
        style={{
          height: 40,
          backgroundColor: primary,
          borderRadius: 4,
          paddingHorizontal: 15,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'chivo',
            fontSize: 18,
            color: 'white',
          }}>
          Search
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingPage;
