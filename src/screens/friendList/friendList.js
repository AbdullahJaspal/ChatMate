import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import friendListStyles from './friendListStyles';
import {primary} from '../../constants/Colors';
const {width, height} = Dimensions.get('screen');
const FriendList = () => {
  const [search, setSearch] = useState(false);
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

  const renderFriends = ({item}) => {
    return (
      <View
        style={{
          width: width / 1.1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          alignSelf: 'center',
          marginVertical: 10,
          borderBottomWidth: 0.5,
          paddingBottom: 10,
          borderColor: '#888888',
        }}>
        <Image
          source={{uri: item.uri}}
          style={{height: 40, width: 40, borderRadius: 5}}
        />
        <View style={{width: '60%'}}>
          <Text style={{fontFamily: 'bayon', fontSize: 20, marginTop: -5}}>
            {item.name}{' '}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              fontFamily: 'chivo',
              fontSize: 10,
              marginTop: -5,
              color: '#888888',
            }}>
            {item.message}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            height: 25,
            backgroundColor: primary,
            borderRadius: 4,
            marginTop: 15,
            paddingHorizontal: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'chivo',
              fontSize: 11,
              color: 'white',
            }}>
            Message
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View style={friendListStyles.topCont}>
        <Animated.Text
          style={[topTextStyle, {fontFamily: 'bayon', marginTop: 10}]}>
          Friends
        </Animated.Text>
        <Animated.View style={[searchStyles, friendListStyles.searchCont]}>
          <Icon name="search" type="feather" onPress={handleAnim} />
          {search && (
            <TextInput
              placeholder="Search friends"
              style={{marginLeft: 10, width: '90%'}}
              onChangeText={handleSearch}
            />
          )}
        </Animated.View>
      </View>

      <FlatList
        data={[
          {
            uri: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
            name: 'John Jon',
            message: 'Traveller , Dentist',
          },
        ]}
        renderItem={renderFriends}
        style={{marginTop: 10}}
        ListEmptyComponent={() => {
          return (
            <View style={friendListStyles.emptyCont}>
              <Image
                source={require('../../assets/icons/noMessage.png')}
                style={friendListStyles.emptyImage}
              />
              <Text style={friendListStyles.emptyTxt}>No Friends Now</Text>
              <Text style={friendListStyles.emptyDes}>
                It looks like you haven't added any friends yet.
              </Text>
              <TouchableOpacity style={friendListStyles.button}>
                <Text style={friendListStyles.buttonText}>Find Friends</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default FriendList;
