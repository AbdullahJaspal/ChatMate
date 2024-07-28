import React from 'react';
import {StyleSheet} from 'react-native';

const friendProfileStyle = StyleSheet.create({
  topTab: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImage: {
    width: 95,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
  socialCont: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
    alignItems: 'center',
    marginVertical: 15,
    alignSelf: 'center',
  },
});
export default friendProfileStyle;
