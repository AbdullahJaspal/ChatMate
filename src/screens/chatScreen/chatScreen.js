import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  GiftedChat,
  InputToolbar,
  Actions,
  Composer,
  Send,
  Bubble,
  SystemMessage,
  Message,
  MessageText,
  MessageImage,
} from 'react-native-gifted-chat';
import chatStyles from './styles';
import Video, {VideoRef} from 'react-native-video';
import {Icon} from 'react-native-elements';
import {primary} from '../../constants/Colors';
import Animated from 'react-native-reanimated';

const {width, height} = Dimensions.get('screen');
const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [myMessage, setMyMessage] = useState('');
  const [controls, setControls] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const videoRef = useRef < VideoRef > null;

  useEffect(() => {
    setMessages([
      {
        _id: 2,
        text: 'Hello developer',
        createdAt: new Date(Date.UTC(2016, 5, 12, 17, 20, 0)),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 3,
        text: 'Hi! I work from home today! Hi! I work from home today!',
        createdAt: new Date(Date.UTC(2016, 5, 13, 17, 20, 0)),
        user: {
          _id: 1,
          name: 'React Native',
          avatar:
            'https://media.licdn.com/dms/image/D4D08AQE0CXu4hnoe7g/croft-frontend-shrinkToFit1024/0/1646754728586?e=2147483647&v=beta&t=ADkOVwOwmP-4rCH4y0g2_OBFlsszl01TpQPhCgt5SSc',
        },
        image:
          'https://media.licdn.com/dms/image/D4D08AQE0CXu4hnoe7g/croft-frontend-shrinkToFit1024/0/1646754728586?e=2147483647&v=beta&t=ADkOVwOwmP-4rCH4y0g2_OBFlsszl01TpQPhCgt5SSc',
      },

      {
        _id: 5,
        text: 'This is a quick reply. Do you love Gifted Chat? (checkbox)',
        createdAt: new Date(Date.UTC(2016, 5, 15, 17, 20, 0)),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
        // video: 'https://www.w3schools.com/html/mov_bbb.mp4',

        quickReplies: {
          type: 'checkbox', // or 'radio',
          values: [
            {
              title: 'Yes',
              value: 'yes',
            },
            {
              title: 'Yes, let me show you with a picture!',
              value: 'yes_picture',
            },
            {
              title: 'Nope. What?',
              value: 'no',
            },
          ],
        },
      },
      {
        _id: 6,
        text: 'Come on!',
        createdAt: new Date(Date.UTC(2016, 5, 15, 18, 20, 0)),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 7,
        text: `Hello this is an example of the ParsedText, links like http://www.google.com or http://www.facebook.com are clickable and phone number 444-555-6666 can call too.
        But you can also do more with this package, for example Bob will change style and David too. foo@gmail.com
        And the magic number is 42!
        #react #react-native`,
        createdAt: new Date(Date.UTC(2016, 5, 13, 17, 20, 0)),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderChatEmpty = () => {
    return (
      <View style={chatStyles.emptyChatrender}>
        <Image
          source={require('../../assets/icons/chat.png')}
          style={chatStyles.chatImage}
        />
        <Text style={chatStyles.emptyText}>Chat is empty</Text>
        <Text style={chatStyles.emptySubText}>Be the one to break the ice</Text>
      </View>
    );
  };

  const renderActions = props => {
    return (
      <View
        style={{
          width: '20%',
          flexDirection: 'row',
          height: '100%',
          alignItems: 'center',
          paddingHorizontal: 10,
          justifyContent: 'space-between',
        }}>
        <Icon name="refresh" type="font-awesome" size={22} />

        <View>
          <Icon name="images" type="entypo" size={22} />
          <View style={{position: 'absolute'}}>
            <Animated.View style={chatStyles.iconStyle}>
              <Icon type="feather" name={'camera'} />
            </Animated.View>
            <Animated.View style={chatStyles.iconStyle}>
              <Icon type="font-awesome" name={'image'} />
            </Animated.View>
          </View>
        </View>
      </View>
    );
  };

  const renderComposer = props => {
    return (
      <Composer
        {...props}
        textInputStyle={{
          color: '#222B45',
          backgroundColor: '#EDF1F7',
          borderWidth: 1,
          borderRadius: 5,
          borderColor: '#E4E9F2',
          paddingTop: 8.5,
          paddingHorizontal: 12,
          marginLeft: 0,
        }}
      />
    );
  };

  const renderSend = props => {
    return (
      <Send {...props} disabled={!props.text}>
        <Image
          source={require('../../assets/icons/send.png')}
          style={chatStyles.sendIcon}
        />
      </Send>
    );
  };

  const renderInputToolbar = props => (
    <InputToolbar
      {...props}
      containerStyle={{
        backgroundColor: 'white',
      }}
    />
  );

  const renderSystemMessage = props => {
    return (
      <SystemMessage
        {...props}
        wrapperStyle={{borderWidth: 10, borderColor: 'white'}}
        textStyle={{color: 'red', fontWeight: '900'}}
      />
    );
  };

  const renderMessageText = props => {
    return (
      <MessageText
        {...props}
        containerStyle={{
          left: {backgroundColor: '#EDF1F7'},
          right: {backgroundColor: '#C88A36'},
        }}
        textStyle={{
          left: {color: 'black'},
          right: {color: 'white'},
        }}
        // linkStyle={{
        //   left: {color: 'orange'},
        //   right: {color: 'orange'},
        // }}
        customTextStyle={{fontSize: 14, lineHeight: 24}}
      />
    );
  };
  const renderBubble = props => {
    console.log(props);
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {backgroundColor: '#EDF1F7'},
          right: {backgroundColor: '#C88A36'},
        }}
        containerToNextStyle={{
          left: {},
          right: {},
        }}
      />
    );
  };
  const renderMessageImage = props => {
    return (
      <MessageImage
        {...props}
        imageStyle={{
          width: width / 1.3,
          height: width / 1.3,
        }}
      />
    );
  };

  const renderMessageVideo = (props: any) => {
    const {currentMessage} = props;
    console.log('props');
    console.log(props);
    return (
      <TouchableOpacity
        style={{padding: 5}}
        onPress={() => {
          setFullscreen(true);
        }}>
        <Video
          source={{uri: currentMessage.video}}
          ref={videoRef}
          useNativeDriver={true}
          style={{
            width: fullscreen ? width : width / 1.4,
            height: fullscreen ? height : width / 1.4,
          }}
          collapsable
          resizeMode={fullscreen ? 'contain' : 'cover'}
          controls={fullscreen}
          fullscreen={fullscreen}
          onFullscreenPlayerDidDismiss={() => {
            setFullscreen(false);
          }}
        />
      </TouchableOpacity>
    );
  };

  const renderMessage = props => {
    return (
      <Message
        {...props}
        renderBubble={renderBubble}
        renderMessageImage={renderMessageImage}
        // renderMessageVideo={renderMessageVideo}
        renderMessageText={renderMessageText}
        containerStyle={{
          backgroundColor: 'red',
        }}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: 50,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomWidth: 0.5,
          paddingHorizontal: 10,
          marginBottom: 2,
          borderColor: '#808080',
        }}>
        <Icon name="chevron-left" type="entypo" size={26} />
        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
          {/* <View style={{height: 35, width: 35, borderRadius: 100}}>
            <Image
              source={require('../../assets/images/imagec.png')}
              style={{height: '100%', width: '100%', borderRadius: 100}}
            />
          </View> */}
          <Text style={{fontFamily: 'bayon', fontSize: 18}}>John Jon</Text>
        </View>
        <Icon name="add-user" type="entypo" size={20} />
      </View>
      <GiftedChat
        messages={messages}
        renderChatEmpty={renderChatEmpty}
        renderActions={renderActions}
        renderComposer={renderComposer}
        renderInputToolbar={renderInputToolbar}
        renderSystemMessage={renderSystemMessage}
        renderMessage={renderMessage}
        onSend={onSend}
        renderSend={renderSend}
        alwaysShowSend
        inverted
        renderAvatarOnTop
        user={{
          _id: 1,
          name: 'Abdullah',
          avatar: require('../../assets/images/image.png'),
        }}
        isLoadingEarlier
      />
    </View>
  );
};
export default ChatScreen;
