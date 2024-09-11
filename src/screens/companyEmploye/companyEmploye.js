import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, FlatList, Image, TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  Easing,
  Extrapolation,
  interpolate,
  ReduceMotion,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import styles from './styles';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');

const data = [
  {
    id: 1,
    name: 'Alice Johnson',
    title: 'Software Engineer',
    profileImage: require('../../assets/images/man1.png'),
  },

  {
    id: 2,
    name: 'Bob Smith',
    title: 'Project Manager',
    profileImage: require('../../assets/images/man2.jpg'),
  },
  {
    id: 3,
    name: 'Charlie Brown',
    title: 'UX Designer',
    profileImage: require('../../assets/images/man3.jpg'),
  },
  {
    id: 4,
    name: 'Diana Prince',
    title: 'Data Scientist',
    profileImage: require('../../assets/images/man4.jpg'),
  },
  {
    id: 5,
    name: 'Ethan Hunt',
    title: 'DevOps Engineer',
    profileImage: require('../../assets/images/man5.jpg'),
  },
  {
    id: 6,
    name: 'Fiona Gallagher',
    title: 'QA Engineer',
    profileImage: require('../../assets/images/man1.png'),
  },
  {
    id: 7,
    name: 'George Martin',
    title: 'Business Analyst',
    profileImage: require('../../assets/images/man2.jpg'),
  },
  {
    id: 8,
    name: 'Hannah Lee',
    title: 'Frontend Developer',
    profileImage: require('../../assets/images/man3.jpg'),
  },
  {
    id: 9,
    name: 'Ian Wright',
    title: 'Backend Developer',
    profileImage: require('../../assets/images/man4.jpg'),
  },
  {
    id: 10,
    name: 'Jane Doe',
    title: 'Product Manager',
    profileImage: require('../../assets/images/man5.jpg'),
  },
  {
    id: 11,
    name: 'Kevin Hart',
    title: 'System Administrator',
    profileImage: require('../../assets/images/man1.png'),
  },
  {
    id: 12,
    name: 'Laura Palmer',
    title: 'Technical Writer',
    profileImage: require('../../assets/images/man2.jpg'),
  },
  {
    id: 13,
    name: 'Michael Scott',
    title: 'HR Manager',
    profileImage: require('../../assets/images/man3.jpg'),
  },
  {
    id: 14,
    name: 'Nina Simone',
    title: 'Graphic Designer',
    profileImage: require('../../assets/images/man4.jpg'),
  },
  {
    id: 15,
    name: 'Oscar Wilde',
    title: 'Database Administrator',
    profileImage: require('../../assets/images/man5.jpg'),
  },
  {
    id: 16,
    name: 'Paul Atreides',
    title: 'Cloud Architect',
    profileImage: require('../../assets/images/man1.png'),
  },
  // {
  //   id: 17,
  //   name: 'Quincy Adams',
  //   title: 'Security Analyst',
  //   profileImage: require('../../assets/images/man2.jpg'),
  // },
  // {
  //   id: 18,
  //   name: 'Rachel Green',
  //   title: 'Marketing Specialist',
  //   profileImage: require('../../assets/images/man3.jpg'),
  // },
  // {
  //   id: 19,
  //   name: 'Steve Rogers',
  //   title: 'Network Engineer',
  //   profileImage: require('../../assets/images/man4.jpg'),
  // },
  // {
  //   id: 20,
  //   name: 'Tina Turner',
  //   title: 'Customer Support',
  //   profileImage: require('../../assets/images/man5.jpg'),
  // },
];
// [{id: 0}, {id: 1}, {id: 2}, ..., {id: 49}]

const CompanyEmploye = () => {
  const ScrollX = useSharedValue(0);
  const Fulllist = useSharedValue(0);
  const vertticalList = useSharedValue(0);
  const [horizotal, setHorizontal] = useState(true);
  const flatListRef = useRef(null);

  const onScrollHandler = event => {
    ScrollX.value = event.nativeEvent.contentOffset.x;
  };

  const fullListStyle = useAnimatedStyle(() => {
    const fulListViewWidth = interpolate(
      Fulllist.value,
      [1, 0],
      [width, width * 1.5],
    );
    const fulListHeigth = interpolate(
      Fulllist.value,
      [1, 0],
      [height + 50, width * 1.5],
    );

    const fulListRadius = interpolate(Fulllist.value, [1, 0], [0, width]);
    const bottom = interpolate(Fulllist.value, [1, 0], [-50, -width / 1.05]);
    return {
      height: withTiming(fulListHeigth, {duration: 1000}),
      width: withTiming(fulListViewWidth, {duration: 1000}),
      borderRadius: withTiming(fulListRadius, {duration: 1000}),
      position: 'absolute',
      bottom: withTiming(bottom, {duration: 1000}),
    };
  });

  const flatListStyle = useAnimatedStyle(() => {
    const fullisHeight = interpolate(
      Fulllist.value,
      [1, 0],
      [height / 1.1, 300],
    );
    return {
      height: withTiming(fullisHeight),
      bottom: 0,
    };
  });

  const fullStyle = useAnimatedStyle(() => {
    const fullisHeight = interpolate(Fulllist.value, [1, 0], [50, 80]);
    return {
      width: fullisHeight,
      height: fullisHeight,
      marginRight: Fulllist.value,
    };
  });

  const ListItemWidth = width / 4;
  const RenderItem = React.memo(({index, item}) => {
    const itemx = useRef(0);
    const itemy = useRef(0);
    const rStyle = useAnimatedStyle(() => {
      const inputRange = [
        (index - 2) * ListItemWidth,
        (index - 1) * ListItemWidth,
        index * ListItemWidth,
        (index + 1) * ListItemWidth,
        (index + 2) * ListItemWidth,
      ];

      const outputRange = [
        0,
        -ListItemWidth / 3,
        -ListItemWidth / 2,
        -ListItemWidth / 3,
        20,
      ];

      const translateY = interpolate(
        ScrollX.value,
        inputRange,
        outputRange,
        Extrapolation.EXTEND,
      );

      const translateX = interpolate(Fulllist.value, [0, 0.5, 1], [0, 90, 150]);
      const translatey = interpolate(
        Fulllist.value,
        [0, 0.5, 1],
        [0, -(index - 0.5) * 100],
      );

      const widt = interpolate(
        Fulllist.value,
        [1, 0],
        [width / 1.2, ListItemWidth],
      );

      console.log('Index=>', index, [0, -(index - 1) * 100, 0]);

      return {
        width: Fulllist.value === 1 ? withTiming(widt) : ListItemWidth,
        // position: Fulllist.value !== 0 ? 'absolute' : 'relative',
        flexDirection: Fulllist.value !== 0 ? 'row' : 'column',
        alignItems: 'center',
        height: 100,
        transform: [
          {
            translateY: Fulllist.value !== 0 ? translatey : translateY,
          },
          {
            translateX:
              Fulllist.value === 1
                ? translateX
                : ListItemWidth / 2 + ListItemWidth,
          },
        ],
      };
    });

    return (
      <Animated.View
        ref={view => {
          if (!view) return;
          view.measureInWindow((x, y) => {
            itemx.current = x;
            itemy.current = y;
          });
        }}
        style={[rStyle]}>
        <Animated.View
          style={[
            {
              // backgroundColor: '#f0f8ff',
              borderRadius: 20,
              borderRadius: 100,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            },
            fullStyle,
          ]}>
          <Image
            source={item.profileImage}
            style={{width: '60%', height: '60%'}}
          />
        </Animated.View>
        <Text
          style={{
            fontFamily: 'chivo',
            marginTop: 5,
            marginLeft: Fulllist.value === 0 ? 0 : 10,
          }}>
          {item.name.split(' ')[0]}
        </Text>
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
      <Text style={styles.listHead}>Employees</Text>
      <Animated.View
        style={[
          {
            overflow: 'hidden',
          },
          fullListStyle,
        ]}>
        <LinearGradient
          start={{x: 0.0, y: 0.2}}
          end={{x: 0.3, y: 1.0}}
          colors={['#e6e6fa', '#ffdab9']}
          style={{width: '100%', height: '100%'}}
        />
      </Animated.View>
      <Animated.FlatList
        ref={flatListRef}
        data={data}
        // onMomentumScrollEnd={handleScrollEnd}
        // onEndReachedThreshold={handleScrollEnd}
        style={[
          {
            position: 'absolute',
          },
          flatListStyle,
        ]}
        initialScrollIndex={data.length / 2}
        onScroll={onScrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingRight: 300,
        }}
        horizontal={horizotal}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        getItemLayout={(data, index) => ({
          length: 100,
          offset: 100 * index,
          index,
        })}
        pinchGestureEnabled
        renderItem={({item, index}) => {
          return <RenderItem item={item} index={index} />;
        }}
      />
      <Text
        style={{
          position: 'absolute',
          bottom: 50,
          textDecorationLine: 'underline',
        }}
        onPress={() => {
          Fulllist.value = Fulllist.value === 0 ? 1 : 0;
          vertticalList.value = vertticalList.value === 0 ? 50 : 0;
          setHorizontal(!horizotal);
        }}>
        View FullList
      </Text>
    </View>
  );
};

export default CompanyEmploye;
