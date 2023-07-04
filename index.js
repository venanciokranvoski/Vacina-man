/**
 * @format
 */
// se estou em anbiente de desenvolvimento! 
if (__DEV__) {
  require('./server.js');
}

import {AppRegistry} from 'react-native';
import App from './App.tsx';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
