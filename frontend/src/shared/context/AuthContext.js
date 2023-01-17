import { useState, createContext, useCallback, useContext } from 'react';

import { acesso } from '../../api/allyApi';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const allyData = JSON.parse(localStorage.getItem('@ally'));

    console.log(allyData);

    if (allyData) {
      return {
        token: allyData.token,
        user: allyData.user,
      };
    }

    return undefined;
  });

  const login = useCallback(async ({ email, password }) => {
    const response = await acesso({ email, password });

    const { token, user } = response;

    localStorage.setItem('@ally', JSON.stringify({ token, user }));
    setData(user);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@ally');
    setData(undefined);
    console.log('signOut');
  }, []);
  return (
    <AuthContext.Provider value={{ login, signOut, user: data }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthContext, AuthProvider, useAuth };
