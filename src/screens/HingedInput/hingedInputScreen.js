import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import HingedInput from './hingedInput';

const {width, height} = Dimensions.get('screen');
const HingedInputScreen = () => {
  const [search, setSearch] = useState('');
  const [password, setPassword] = useState('');
  const widt = useSharedValue(0);
  const rotate = useSharedValue(0);
  const translateY = useSharedValue(0);
  const translateX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: width / 2.4},
        {
          rotate: `${rotate.value}deg`,
        },
        {translateX: -width / 2.4},
      ],
    };
  }, []);

  useEffect(() => {
    //rotate by 1 degree on every letter
    if (search.length < 10) {
      rotate.value = withSpring(-search.length);
    } else if (search.length < 20) {
      rotate.value = withSpring(-50);
    } else {
      rotate.value = withSpring(-90);
    }
  }, [search]);
  const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
  return (
    <View
      style={{
        backgroundColor: '#D9D9D9',
        flex: 1,
        alignItems: 'center',
      }}>
      <Image
        source={require('../../assets/icons/image.png')}
        style={{
          height: 150,
          width: width / 1.4,
          resizeMode: 'contain',
          marginTop: 100,
        }}
      />
      <View
        style={{
          height: height / 2.8,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <HingedInput
          placeholder={'Username'}
          onChangeText={val => {
            setSearch(val);
          }}
          value={search}
          type={'name'}
          zIndex={10}
        />
        <HingedInput
          placeholder={'Password'}
          onChangeText={val => {
            setPassword(val);
          }}
          value={password}
          type={'password'}
          zIndex={0}
        />
        <View
          style={{
            backgroundColor: '#001A73',
            width: width / 3,
            height: 45,
            marginTop: 40,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 0,
          }}>
          <Text style={{color: 'white', fontFamily: 'bayon', fontSize: 18}}>
            Login
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HingedInputScreen;
