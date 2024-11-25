// import axios from 'axios';
// import * as SecureStore from 'expo-secure-store';
// import * as SplashScreen from 'expo-splash-screen';
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {Constants} from '../../constants';
import {User} from '../../models';

interface AuthProps {
  token?: string;
  isLoading: boolean;
  domain?: string;
  user?: User;
  onLogin: (
    userEmail: string,
    userPassword: string,
    userDomain?: string,
  ) => Promise<boolean>;
  /**
   * Logs out the user.
   * @returns `true` if authenticated, else `false`.
   */
  onLogout: () => () => Promise<void>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthProps>({
  onLogin: () => Promise.resolve(false),
  onLogout: () => Promise.resolve,
  isLoading: true,
  setIsLoading: () => {},
});

export const AuthProvider: React.FC<React.PropsWithChildren> = ({children}) => {
  const [token, setToken] = useState<string | undefined>(undefined);
  const [domain, setDomain] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState<User | undefined>(undefined);

  const setTokenState = useCallback(
    (newToken?: string) => {
    },
    [setToken],
  );

  useEffect(() => {
    const loadStorage = async () => {
     
    };
    loadStorage();
  }, [token, domain, setToken, setTokenState]);

  useEffect(() => {
    const getUser = async () => {
  
    };
    getUser();
  }, [token]);

  const login = useCallback(
    async (userEmail: string, userPassword: string, userDomain?: string) => {
    
    },
    [setTokenState],
  );

  const logout = useCallback(
    () => async (): Promise<void> => {
    
    },
    [setTokenState],
  );

  const onSetLoading = useCallback(setIsLoading, [setIsLoading]);

  const value: AuthProps | any = useMemo(
    () => ({
      token,
      onLogin: login,
      onLogout: logout,
      isLoading,
      domain,
      user: userInfo,
      setIsLoading: onSetLoading,
    }),
    [token, login, logout, isLoading, domain, userInfo, onSetLoading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
