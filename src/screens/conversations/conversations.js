import React, {useCallback, useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {Dimensions, FlatList, Text, TextInput, View} from 'react-native';
import {Icon} from 'react-native-elements';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import convoStyles from './convoStyles';
import {primary} from '../../constants/Colors';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('screen');

let conv = [
  {
    key: 1,
    uri: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
    name: 'John',
    message: 'Hello!',
  },
  {
    key: 2,
    uri: 'https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk',
    name: 'Kelly',
    message: 'What are you doing?',
  },
  {
    key: 3,
    uri: 'https://baconmockup.com/250/250/',
    name: 'Daniel',
    message: 'Wassup!',
  },
  {
    key: 4,
    uri: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
    name: 'Tom',
    message:
      'If you could be any age for the rest of your life, which would you choose?',
  },
  {
    key: 5,
    uri: 'https://robohash.org/mail@ashallendesign.co.uk',
    name: 'Aliya',
    message: 'Wassup!',
  },
  {
    key: 6,
    uri: 'https://baconmockup.com/250/250/',
    message: 'What are you doing?',
    name: 'Pop',
  },
];
const Conversations = () => {
  const [search, setSearch] = useState(false);
  const [seletedSwipe, setSeletedSwipe] = useState('');
  const [data, setData] = useState(conv);
  const buttonAnim = useSharedValue(0);

  const searchStyles = useAnimatedStyle(() => {
    const widt = interpolate(buttonAnim.value, [1, 0], [width / 1.1, 40]);
    const borderRadius = interpolate(buttonAnim.value, [1, 0], [10, 0]);
    const borderWidth = interpolate(buttonAnim.value, [1, 0], [1, 0]);
    const justifyContent = interpolate(
      buttonAnim.value,
      [1, 0],
      ['flex-start', 'space-between'],
    );
    return {
      width: widt,
      borderRadius: borderRadius,
      borderWidth: borderWidth,
      justifyContent: justifyContent,
      paddingHorizontal: buttonAnim.value === 1 ? 10 : 0,
    };
  }, []);

  const topTextStyle = useAnimatedStyle(() => {
    const fontSize = interpolate(buttonAnim.value, [1, 0], [1, 24]);
    return {
      fontSize: fontSize,
    };
  }, []);

  const Renderconversation = ({item}) => {
    const translateX = useSharedValue(0);
    const swipe = useSharedValue(0);

    const pan = Gesture.Pan()
      .onBegin(event => {
        console.log(event);
        //   pressed.value = true;
        translateX.value = withTiming(0);
      })
      .onChange(event => {
        translateX.value = event.translationX;
      })
      .onFinalize(event => {
        console.log(event);
        //   offset.value = withSpring(0);
        if (event.translationX < -50) {
          translateX.value = withTiming(-50);
        } else {
          translateX.value = withTiming(0);
        }

        //   pressed.value = false;
      });
    const tabStyle = useAnimatedStyle(() => {
      return {
        transform: [{translateX: translateX.value}],
        height: translateX.value === -width ? 0 : 50,
      };
    });
    const iconContSyle = useAnimatedStyle(() => {
      const opacity = translateX.value <= -50 ? withTiming(1) : withTiming(0);
      return {
        opacity: opacity,
      };
    });

    const tabContStyle = useAnimatedStyle(() => {
      return {
        height: translateX.value === -width ? withTiming(0) : withTiming(50),
        opacity: translateX.value === -width ? withTiming(0) : withTiming(1),
        marginVertical:
          translateX.value === -width
            ? withTiming(0, {}, finished => {
                if (finished) {
                  runOnJS(handleRemoval)(item);
                }
              })
            : withTiming(10),
      };
    });
    const handleDelete = () => {
      translateX.value = withTiming(-width);
      console.log(data);
    };

    return (
      <Animated.View style={[{flex: 1}, tabContStyle]}>
        <GestureHandlerRootView key={item.key}>
          <GestureDetector gesture={pan} style={{zIndex: 100}}>
            <Animated.View style={[convoStyles.listRender, tabStyle]}>
              <Image
                source={{uri: item.uri}}
                style={{height: 40, width: 40, borderRadius: 5}}
              />
              <View style={{width: '63%'}}>
                <Text style={{fontFamily: 'bayon', fontSize: 16}}>
                  {item.name}
                </Text>
                <Text numberOfLines={1} style={convoStyles.message}>
                  {item.message}
                </Text>
              </View>
              <Text style={convoStyles.date}>May 22, 2024</Text>
            </Animated.View>
          </GestureDetector>
          <Animated.View
            style={[
              iconContSyle,
              {
                height: 40,
                width: 40,
                position: 'absolute',
                alignItems: 'center',
                right: '5%',
                justifyContent: 'center',
                zIndex: 0,
              },
            ]}>
            <Icon
              name="delete"
              color={'red'}
              style={{zIndex: 0}}
              onPress={handleDelete}
            />
          </Animated.View>
        </GestureHandlerRootView>
      </Animated.View>
    );
  };
  const handleRemoval = item => {
    const arr = conv.filter(val => {
      return val.key !== item.key;
    });
    setData(arr);
    conv = arr;
  };
  const handleAnim = () => {
    buttonAnim.value = search ? withTiming(0) : withTiming(1);
    setSearch(!search);
  };
  const handleSearch = txt => {
    const arr = conv.filter(val => {
      return val.name.includes(txt);
    });
    setData(arr);
  };

  return (
    <View style={{flex: 1}}>
      <View style={convoStyles.topCont}>
        <Animated.Text
          style={[topTextStyle, {fontFamily: 'bayon', marginTop: 10}]}>
          Coversations
        </Animated.Text>
        <Animated.View style={[searchStyles, convoStyles.searchCont]}>
          <Icon name="search" type="feather" onPress={handleAnim} />
          {search && (
            <TextInput
              placeholder="Search coversation"
              style={{marginLeft: 10, width: '90%'}}
              onChangeText={handleSearch}
            />
          )}
        </Animated.View>
      </View>

      <FlatList
        data={data}
        renderItem={({item}) => <Renderconversation item={item} />}
        style={{marginTop: 10}}
        keyExtractor={key => key.key}
        ListEmptyComponent={() => {
          return (
            <View style={convoStyles.emptyCont}>
              <Image
                source={require('../../assets/icons/noMessage.png')}
                style={convoStyles.emptyImage}
              />
              <Text style={convoStyles.emptyTxt}>No Coversations</Text>
              <Text style={convoStyles.emptyDes}>
                It looks like you haven't started any chats yet. Start a new
                chat to see your list grow!
              </Text>
              <TouchableOpacity style={convoStyles.button}>
                <Text style={convoStyles.buttonText}>Find Friends</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Conversations;
