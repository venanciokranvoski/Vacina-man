/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '~/@types/routes/BottomTabNavigator';
import Icon from '~/components/Icon';
import HomeStackNavigator from '../HomeStackNavigator';
import ProfileHomeStackNavigator from '../ProfileStackNavigator';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="home"
        component={HomeStackNavigator}
        options={{
          header: () => null,
          tabBarIcon: () => <Icon icon="listening" />,
        }}
      />
      <BottomTab.Screen
        name="profile"
        component={ProfileHomeStackNavigator}
        options={{
          header: () => null,
          tabBarIcon: () => <Icon icon="reading" />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;
