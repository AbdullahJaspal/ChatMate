import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  maiCont: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
  },
  topText: {
    marginTop: 10,
    fontFamily: 'bayon',
    fontSize: 25,
    color: '#2f4f4f',
  },
  cardCont: {
    width: width / 1.1,
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  cardHeader: {
    width: width / 1.1,
    height: 80,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#EDD4B6',
    overflow: 'visible',
  },
  logoCont: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: 'white',
    position: 'absolute',
    alignSelf: 'center',
    top: 40,
    borderWidth: 2,
    borderColor: 'white',
    zIndex: 100,
    shadowColor: '#B0A8A4',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    marginTop: 50,
    fontFamily: 'chivo',
    fontSize: 18,
    color: '#1C1C1C',
    alignSelf: 'center',
  },
  description: {
    fontFamily: 'chivo-light',
    fontSize: 14,
    color: '#1C1C1C',
    alignSelf: 'center',
    textAlign: 'center',
    width: '85%',
    marginVertical: 10,
  },
  listHead: {
    marginTop: 50,
    fontFamily: 'chivo',
    fontSize: 18,
    color: '#1C1C1C',
    width: '90%',
  },
});

export default styles;
