import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import friendProfileStyle from './friendProfileStyle';

const FriendProfile = () => {
  return (
    <View style={{flex: 1}}>
      <View style={friendProfileStyle.topTab}>
        <Icon name="chevron-left" type="entypo" />
        <Icon name="add-user" type="entypo" size={20} />
        {/* <Icon name="user" type="entypo" size={20} /> */}
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={require('../../assets/images/profile.jpg')}
          style={friendProfileStyle.profileImage}
        />
        <Text style={{fontFamily: 'bayon', fontSize: 20, marginTop: 10}}>
          John , 24
        </Text>
        <Text style={{fontFamily: 'chivo', fontSize: 14, marginTop: -5}}>
          Traveller , Dentist
        </Text>
      </View>
      <View style={friendProfileStyle.socialCont}>
        <Image
          source={require('../../assets/icons/instagram.png')}
          style={{width: 25, height: 25, resizeMode: 'contain'}}
        />
        <Image
          source={require('../../assets/icons/line.png')}
          style={{width: 30, height: 20, resizeMode: 'contain'}}
        />
        <Image
          source={require('../../assets/icons/snapChat.png')}
          style={{width: 30, height: 30, resizeMode: 'contain'}}
        />
        <Image
          source={require('../../assets/icons/line.png')}
          style={{width: 30, height: 20, resizeMode: 'contain'}}
        />
        <Image
          source={require('../../assets/icons/facebook.png')}
          style={{width: 25, height: 25, resizeMode: 'contain'}}
        />
      </View>
      <Text
        style={{
          fontFamily: 'bayon',
          fontSize: 20,
          marginTop: 10,
          marginLeft: 10,
        }}>
        About
      </Text>
      <Text
        style={{
          fontFamily: 'chivo',
          fontSize: 14,
          marginTop: -5,
          marginHorizontal: 10,
          textAlign: 'auto',
        }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </Text>
    </View>
  );
};

export default FriendProfile;
