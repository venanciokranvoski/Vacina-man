import {useContext} from 'react';
import {AuthContext} from '~/context/Auth';

// Custom hooks acessa ao context e se utiliza do context.
// 1 facilitando o reuso do codigo para melhorar o desenvolvimento.

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider ');
  }

  return context;
};

export default useAuth;
