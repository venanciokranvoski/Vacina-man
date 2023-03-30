/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Button} from 'react-native';

// import { Container } from './styles';

const Feed: React.FC = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('stories');
  };

  const handlePressPost = () => {
    navigation.navigate('profile', {
      screen: 'post',
    });
  }
  return (
    <View style={{backgroundColor: '#fefefe', flex: 1}}>
      <Button title="Go to Stories" onPress={handlePress} />
      <Button title="ir para Post" onPress={handlePressPost} />
    </View>
  );
};

export default Feed;
