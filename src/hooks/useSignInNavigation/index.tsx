// ** Custom Hook Navigation !
import {useNavigation} from '@react-navigation/native';

const useSignInNavigation = () => {
  const navigation = useNavigation<SignInStackNavigatorProps>();
  return navigation;
};

export default useSignInNavigation;
