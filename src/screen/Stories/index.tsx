/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import Button from '~/components/Button';

// import { Container } from './styles';

const Stories: React.FC = () => {
  return (
    <View style={{backgroundColor: '#e23030', flex: 1}}>
      <Button title="GO to Stories"></Button>
    </View>
  );
};

export default Stories;
