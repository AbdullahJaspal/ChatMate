import React, {useEffect, useState} from 'react';
import {Dimensions, TextInput, TouchableOpacity, View} from 'react-native';
import {Image} from 'react-native-elements';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const {width, height} = Dimensions.get('screen');

const HingedInput = ({placeholder, onChangeText, value, type, zIndex}) => {
  const widt = useSharedValue(0);
  const rotate = useSharedValue(0);
  const slideAnim = useSharedValue(0);
  const inpuWidth = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: type === 'name' ? width / 2.8 : -width / 2.8},
        {
          rotate:
            type === 'name' ? `${rotate.value}deg` : `${-rotate.value}deg`,
        },
        {translateX: type === 'name' ? -width / 2.8 : width / 2.8},
      ],
    };
  }, []);

  useEffect(() => {
    //rotate by 1 degree on every letter

    if (type === 'password' && value.length) {
      if (value.length < 9) {
        rotate.value = withSpring(-value.length * 2);
      } else if (value.length < 20) {
        rotate.value = withSpring(-40);
      } else {
        rotate.value = withSpring(-90);
      }
      slideAnim.value = withTiming(1, {duration: 3000});
    } else {
      if (value.length < 9) {
        rotate.value = withSpring(-value.length * 2);
      } else if (value.length < 16) {
        rotate.value = withSpring(-40);
      } else {
        rotate.value = withSpring(-90);
      }
    }
  }, [value]);

  const textInputStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            slideAnim.value,
            [0, 1],
            [0, width / 1.5 - inpuWidth.value - 12 * 1],
          ),
        },
      ],
    };
  }, []);
  return (
    <Animated.View
      style={[
        {
          backgroundColor: 'white',
          width: width / 1.4,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 1},
          shadowOpacity: 0.5,
          shadowRadius: 1,
          elevation: 2,
          height: 50,
          borderRadius: 100,
          marginTop: 20,
          justifyContent: 'center',
          zIndex: zIndex,
        },
        animatedStyle,
      ]}>
      <Animated.View
        style={[{paddingHorizontal: 12, width: '100%'}, textInputStyle]}>
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          onContentSizeChange={event => {
            inpuWidth.value = event.nativeEvent.contentSize.width;
            console.log(event.nativeEvent.contentSize.width);
          }}
        />
      </Animated.View>
    </Animated.View>
  );
};

export default HingedInput;
