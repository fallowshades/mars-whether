# mars-whether

## boiler plate set up

https://onedrive.live.com/view.aspx?resid=73D8324D775D536C%215116&id=documents&wd=target%28analys%20iteration.one%7CBA6408B8-DFC4-4AC3-B6BA-7582291A00A6%2FV1.1.1%7C8071FFAC-2BF9-45B2-B4A5-874E94C29112%2F%29
onenote:https://d.docs.live.net/73d8324d775d536c/Documents/Planning/analys%20iteration.one#V1.1.1&section-id={BA6408B8-DFC4-4AC3-B6BA-7582291A00A6}&page-id={8071FFAC-2BF9-45B2-B4A5-874E94C29112}&object-id={567E3B3B-5C62-0468-1BF0-950CAA929B28}&A 



https://notjust.notion.site/React-Native-Supabase-Masterclass-47a69a60bc464c399b5a0df4d3c4a630?p=e56395f318de4a899ab4f3a09547e879&pm=s (guide)

- pick navigation
```sh
npx create-expo-app@latest src -t         
```


src\app_layout.tsx

- clean up

```tsx
import { Slot, Stack } from 'expo-router';
import {AuthProvider} from '../features/auth';
return(
      <AuthProvider>
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

        <Slot />
     </ThemeProvider>
    </AuthProvider>
  
)
```

src\constants\constants.ts

```ts
export const Constants = {
  TOKEN_KEY: '',
  DOMAIN: '',
  INTEGRATION_API_URL: '',
  IOS_STAGING_CLIENT_ID:
    '',
  IOS_STAGING_CLIENT_SECRET:
    '',

  ANDROID_STAGING_CLIENT_ID:
    '',
  ANDROID_STAGING_CLIENT_SECRET:
    '',
};
```

src\constants\index.ts

```ts
export {Constants} from './constants';
```

src\features\auth\AuthContext.tsx

- b2b with transitional stores with some undefined, token allow to get user

```ts
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
```

index.tsx

src\models\User.ts

```ts
export type User = {
  readonly id: number;

};
```