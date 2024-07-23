import React from 'react';
import {StyleSheet} from 'react-native';

const chatStyles = StyleSheet.create({
  emptyChatrender: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{scaleY: -1}],
  },
  chatImage: {width: 80, height: 80, resizeMode: 'contain'},
  emptyText: {
    fontFamily: 'chivo',
    fontSize: 20,
    color: 'black',
    marginVertical: 5,
  },
  emptySubText: {
    fontFamily: 'chivo-light',
    fontSize: 16,
    color: 'black',
  },
  inputToolCont: {
    height: 50,
    width: '22%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  refreshIcon: {width: 30, height: 30, resizeMode: 'contain'},
  addIcon: {width: 40, height: 40, resizeMode: 'contain'},
  inputCont: {
    width: '75%',
    height: 45,
    borderWidth: 0.5,
    borderRadius: 100,
    borderColor: '#888888',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
  },
  sendIcon: {
    width: 40,
    height: '90%',
    resizeMode: 'contain',
    marginRight: 3,
  },
  iconStyle: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: 'white',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
  },
});

export default chatStyles;
