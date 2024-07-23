import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {BackgroundImage} from 'react-native-elements/dist/config';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  useSharedValue,
  interpolate,
  useAnimatedScrollHandler,
  Extrapolation,
  useAnimatedStyle,
} from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

const data = [
  {
    day: 'Day 1',
    reward: '+20',
  },
  {
    day: 'Day 2',
    reward: '+20',
  },
  {
    day: 'Day 3',
    reward: '+25',
  },
  {
    day: 'Day 4',
    reward: '+25',
  },
  {
    day: 'Day 5',
    reward: '+30',
  },
  {
    day: 'Day 6',
    reward: '+30',
  },
  {
    day: 'Day 7',
    reward: '+30',
  },
];

const dataCenter = [
  {
    day: 'Get reward notifications',
    reward: '+ 20 Bonus',
  },
  {
    day: 'Get reward sharing',
    reward: '+ 20 Bonus',
  },
  {
    day: 'Get reward review',
    reward: '+ 100 Bonus',
  },
  {
    day: 'Complete your profile',
    reward: '+ 50 Bonus',
  },
  {
    day: 'Complete Book of Love',
    reward: '+ 50 Bonus',
  },
  {
    day: 'Follow us on Instagram',
    reward: '+ 50 Bonus',
  },
  {
    day: 'Follow us on Tik Tok',
    reward: '+ 50 Bonus',
  },
  {
    day: 'Confirm email',
    reward: '+ 5 Bonus',
  },
];

const Test = () => {
  const [day, setDay] = useState('');
  const renderTop = item => {
    return (
      <TouchableOpacity
        style={{alignItems: 'center'}}
        onPress={() => {
          setDay(item.day);
        }}>
        <LinearGradient
          colors={
            day === item.day ? ['#5470FE', '#FA67C6'] : ['#2E3138', '#2E3138']
          }
          style={{
            backgroundColor: '#2E3137',
            justifyContent: 'center',
            width: 45,
            paddingVertical: 10,
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: day === item.day ? 'white' : '#838383',
              fontWeight: 'bold',
              fontSize: 12,
            }}>
            {item.reward}
          </Text>
          <Image
            source={
              day === item.day
                ? require('../../assets/images/coin.png')
                : require('../../assets/images/coinDull.png')
            }
            style={{
              height: 25,
              width: 25,
              resizeMode: 'contain',
              marginTop: 10,
            }}
          />
        </LinearGradient>
        <View style={{}}></View>
        <Text style={{color: '#838383', marginTop: 5}}>{item.day}</Text>
      </TouchableOpacity>
    );
  };

  const renderCenter = ({item}) => {
    return (
      <View
        style={{
          width: '95%',
          backgroundColor: '#2E3137',
          height: 60,
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 10,
          paddingHorizontal: 10,
          marginTop: 10,
        }}>
        <Image
          source={require('../../assets/images/coin.png')}
          style={{height: 30, width: 30, resizeMode: 'contain'}}
        />
        <View style={{width: '60%'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 13,
              fontWeight: '700',
              letterSpacing: 1,
            }}>
            {item.day}
          </Text>
          <Text
            style={{
              color: '#E671C3',
              fontSize: 12,
              fontWeight: '400',
            }}>
            {item.reward}
          </Text>
        </View>

        <LinearGradient
          colors={['#5470FE', '#FA67C6']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{
            height: 25,
            paddingHorizontal: 15,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
          }}>
          <Text style={{color: 'white', fontSize: 12, fontWeight: '700'}}>
            Get
          </Text>
        </LinearGradient>
      </View>
    );
  };
  const renderBottom = ({item}) => {
    return (
      <View
        style={{
          width: '95%',
          backgroundColor: '#2E3137',
          height: 60,
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 10,
          paddingHorizontal: 10,
          marginTop: 10,
        }}>
        <Image
          source={require('../../assets/images/coin.png')}
          style={{height: 30, width: 30, resizeMode: 'contain'}}
        />
        <View style={{width: '55%'}}>
          <Text
            style={{
              color: '#E671C3',
              fontSize: 13,
              fontWeight: '700',
            }}>
            {item.reward}
          </Text>
        </View>

        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#5470FE', '#FA67C6']}
          style={{
            height: 25,
            paddingHorizontal: 15,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
          }}>
          <Text style={{color: 'white', fontSize: 12, fontWeight: '700'}}>
            Watch
          </Text>
        </LinearGradient>
      </View>
    );
  };

  const imageHeight = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      imageHeight.value = e.contentOffset.y;
    },
  });

  const animatedStyles = useAnimatedStyle(() => {
    const Image_Height = interpolate(
      imageHeight.value,
      [0, height / 3.5 - 100],
      [height / 3.9, 100],
      {
        extrapolateRight: Extrapolation.CLAMP,
      },
    );

    return {
      height: Image_Height,
    };
  });
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Image
        style={{height: '100%', width: '100%', position: 'absolute'}}
        source={require('../../assets/images/Vector.png')}
      />

      <View style={{height: 130}}></View>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        contentContainerStyle={{
          paddingTop: height / 5,
        }}>
        <View
          style={{
            backgroundColor: 'black',
            width: '95%',
            alignSelf: 'center',
            borderRadius: 20,
          }}>
          <Text
            style={{
              marginLeft: 15,
              marginTop: 20,
              color: 'white',
              fontSize: 18,
              fontWeight: '700',
            }}>
            Daily Check-in
          </Text>
          <Text
            style={{
              marginLeft: 15,
              color: '#BFBFBF',
              fontSize: 14,
              marginTop: 2,
              fontWeight: '400',
            }}>
            Earn rewards for check-in
          </Text>
          <View
            style={{
              width: '95%',
              alignSelf: 'center',
              marginTop: 10,
              justifyContent: 'space-between',
              height: 100,
              flexDirection: 'row',
            }}>
            {data.map(item => {
              return renderTop(item);
            })}
          </View>
          <View
            style={{
              height: 50,
              width: '95%',
              alignSelf: 'center',
              marginVertical: 10,
            }}>
            <BackgroundImage
              source={require('../../assets/images/buttton.png')}
              style={{
                height: 50,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              resizeMode={'contain'}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                Get Daily Bonus
              </Text>
            </BackgroundImage>
          </View>
          <Text
            style={{
              marginLeft: 15,
              marginTop: 10,
              color: 'white',
              fontSize: 18,
              fontWeight: '700',
            }}>
            Task for Beginner
          </Text>
          <Text
            style={{
              marginLeft: 15,
              color: '#BFBFBF',
              fontSize: 14,
              marginTop: 2,
              fontWeight: '400',
            }}>
            Only one chance
          </Text>
          <FlatList
            renderItem={renderCenter}
            data={dataCenter}
            scrollEnabled={false}
          />
          <Text
            style={{
              marginLeft: 15,
              marginTop: 10,
              color: 'white',
              fontSize: 18,
              fontWeight: '700',
            }}>
            Watch Ads, Earn Bonus
          </Text>
          <Text
            style={{
              marginLeft: 15,
              color: '#BFBFBF',
              fontSize: 13,
              fontWeight: '400',
              marginTop: 2,
            }}>
            Watch all Ads, get extra rewards
            <Text style={{color: '#E671C3'}}>+ 20 Bonus</Text>
          </Text>
          <FlatList
            renderItem={renderBottom}
            data={dataCenter}
            scrollEnabled={false}
          />
          <Text
            style={{
              marginLeft: 15,
              marginTop: 20,
              color: 'white',
              fontSize: 18,
              fontWeight: '700',
              letterSpacing: 1,
            }}>
            Description
          </Text>
          <Text
            style={{
              marginLeft: 15,
              color: '#BFBFBF',
              fontSize: 12,
              fontWeight: '400',
              marginTop: 5,
            }}>
            1. All interpretation rights of Bonus belong to Pixllove
          </Text>
          <Text
            style={{
              marginLeft: 15,
              color: '#BFBFBF',
              fontSize: 12,
              fontWeight: '400',
              marginTop: 5,
            }}>
            2. Bonus can only be used for depixelation or livechat, valid for 10
            days and will be automatically expired and liquidated after
            expiration.
          </Text>
          <Text
            style={{
              marginLeft: 15,
              color: '#BFBFBF',
              fontSize: 12,
              fontWeight: '400',
              marginTop: 5,
            }}>
            3. For 100 bonus coins, you get 1 depixelation and 3 live chats
          </Text>
          <Text
            style={{
              marginLeft: 15,
              color: '#BFBFBF',
              fontSize: 12,
              fontWeight: '400',
              marginTop: 5,
            }}>
            4. The daily limit will be used first when going live. After that,
            bonus coins will be used. If there are not enough bonus coins, the
            balance will be used automatically.
          </Text>
          <Text
            style={{
              marginLeft: 15,
              color: '#BFBFBF',
              fontSize: 12,
              fontWeight: '400',
              marginTop: 5,
            }}>
            5. The sign-in refreshes every evening at 0 am (UTC+1)
          </Text>

          <View style={{height: 55}} />
        </View>
      </Animated.ScrollView>

      <Animated.View
        // style={[styles.imageWrap, ]}
        style={[
          {
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            paddingLeft: 15,
            position: 'absolute',
            top: 20,
            width: width,
          },
          animatedStyles,
        ]}>
        <Icon name="chevron-left" type="feather" color={'white'} size={30} />
        <Text
          style={{
            marginLeft: 20,
            marginTop: 10,
            color: 'white',
            fontSize: 18,
            fontWeight: '700',
            letterSpacing: 1,
          }}>
          Your Bonus :
        </Text>
        <Text
          style={{
            marginLeft: 20,
            marginTop: 5,
            color: 'white',
            fontSize: 17,
            fontWeight: '800',
            letterSpacing: 1,
          }}>
          20
        </Text>
      </Animated.View>
    </View>
  );
};

export default Test;
