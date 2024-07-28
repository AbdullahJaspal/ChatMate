import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {primary} from '../../constants/Colors';
const {width, height} = Dimensions.get('screen');

const friendListStyles = StyleSheet.create({
  topCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
    alignSelf: 'center',
  },
  searchCont: {
    alignItems: 'center',
    height: 40,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  emptyCont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: height / 1.5,
  },
  emptyImage: {
    width: width / 2.5,
    height: width / 2.5,
    resizeMode: 'contain',
  },
  emptyTxt: {
    fontFamily: 'chivo',
    fontSize: 20,
    color: 'black',
    marginVertical: 5,
    marginTop: 15,
  },
  emptyDes: {
    fontFamily: 'chivo-light',
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    width: width / 1.3,
  },
  button: {
    height: 40,
    backgroundColor: primary,
    borderRadius: 10,
    marginTop: 15,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'chivo',
    fontSize: 18,
    color: 'white',
  },
});

export default friendListStyles;
