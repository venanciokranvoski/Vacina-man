import React from 'react';
import BottomTabNavigator from './SignedInNavigator/BottomTabNavigator';
import SignInNavigator from './SignInNavigator';
import useAuth from '~/hooks/useAuth';


// import { Container } from './styles';

const Routes: React.FC = () => {
  const {isSigned} = useAuth();

  // //Aprendizado
  // useEffect(() => {
  //   DevSettings.addMenuItem('Change Routes', () => setIsLogged(old => !old));
  // }, []);

  return isSigned ? <BottomTabNavigator /> : <SignInNavigator />;
};

export default Routes;
