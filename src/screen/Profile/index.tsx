import React from 'react';
import {Text, Button} from 'react-native';
import {Container} from './styled';

const Profile: React.FC = ({navigation}) => {
  const handlePost = () => {
    navigation.navigate('post');
  };
  return (
    <Container>
      <Text>Profile</Text>
      <Button title="Go to POst" onPress={handlePost}></Button>
    </Container>
  );
};
export default Profile;
