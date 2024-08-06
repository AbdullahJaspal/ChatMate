import React from 'react';
import {Dimensions, FlatList, Image} from 'react-native';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import styles from './styles';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('screen');

const data = new Array(5).fill(0).map((_, index) => ({id: index}));
// [{id: 0}, {id: 1}, {id: 2}, ..., {id: 49}]

const CompanyEmploye = () => {
  const ScrollX = useSharedValue(0);
  const ScrollY = useSharedValue(0);
  const onScrollHandler = event => {
    ScrollX.value = event.nativeEvent.contentOffset.x;
    ScrollY.value = event.nativeEvent.contentOffset.y;
  };
  const {width: windowWidth} = Dimensions.get('window');

  const ListItemWidth = 100;
  const CONTAINER_HEIGHT = width + 100;
  const RenderItem = React.memo(({item, index, ScrollX, ScrollY}) => {
    const rStyle = useAnimatedStyle(() => {
      const inputRange = [ScrollX.value, 10];

      const translateYOutputRange = [-100, 100];

      console.log(inputRange);
      console.log(translateYOutputRange);

      const opacityOutputRange = [0.7, 0.9, 1, 0.9, 0.7];

      const scaleOutputRange = [0.7, 0.8, 1, 0.8, 0.7];

      const translateY = interpolate(
        ScrollX.value,
        inputRange,
        translateYOutputRange,
        Extrapolation.CLAMP,
      );

      const opacity = interpolate(
        ScrollX.value,
        inputRange,
        opacityOutputRange,
        Extrapolation.CLAMP,
      );

      const scale = interpolate(
        ScrollX.value,
        inputRange,
        scaleOutputRange,
        Extrapolation.CLAMP,
      );

      return {
        opacity,
        transform: [
          {
            translateY: translateY,
          },
          // Padding left is better than translateX
          {
            translateX: ListItemWidth * 3,
          },

          {
            scale,
          },
        ],
      };
    });
    return (
      <Animated.View
        style={[
          {
            marginTop: 100,
            width: ListItemWidth,
            marginHorizontal: 20,
          },
          rStyle,
        ]}>
        <View
          style={{
            backgroundColor: '#f0f8ff',
            borderRadius: 20,
            overflow: 'visible',
            borderRadius: 100,
            width: 80,
            height: 80,
            backgroundColor: '#ffdab9',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/images/man1.png')}
            style={{width: 40, height: 40}}
          />
        </View>
      </Animated.View>
    );
  });
  return (
    <View style={styles.maiCont}>
      <Text style={styles.topText}>COMPANY DETAILS</Text>
      <View style={styles.cardCont}>
        <LinearGradient
          start={{x: 0.0, y: 0.5}}
          end={{x: 0.5, y: 1.0}}
          colors={['#e6e6fa', '#ffdab9']}
          style={styles.cardHeader}>
          <View style={styles.logoCont}>
            <Image
              source={require('../../assets/images/com.png')}
              style={{width: '90%', height: '90%'}}
            />
          </View>
        </LinearGradient>

        <Text style={styles.name}>Cryptiks</Text>
        <Text style={styles.description}>
          At Crypitks, we specialize in providing top-notch development services
          tailored to meet the unique needs of our clients. {'\n'}
          {'\n'}
          Our team of experienced developers is dedicated to delivering
          innovative solutions that drive business growth and efficiency. At
          Crypitks, we are committed to excellence and customer satisfaction.
          Partner with us and experience the Crypitks difference!
        </Text>
      </View>
      <Text style={styles.listHead}>Members</Text>
      <FlatList
        data={data}
        style={{
          position: 'absolute',
          bottom: -80,
          height: 350,
        }}
        horizontal
        keyExtractor={item => item.id}
        snapToInterval={ListItemWidth}
        scrollEventThrottle={16}
        onScroll={onScrollHandler}
        pagingEnabled={true}
        contentContainerStyle={{
          justifyContent: 'center',
        }}
        renderItem={({item, index}) => {
          return (
            <RenderItem
              item={item}
              index={index}
              ScrollX={ScrollX}
              ScrollY={ScrollY}
            />
          );
        }}
      />
    </View>
  );
};

export default CompanyEmploye;
