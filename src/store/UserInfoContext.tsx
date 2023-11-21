import { createContext, useState, useContext, Dispatch, SetStateAction } from 'react';

type GithubUser = {
  avatar_url: string;
  bio: string;
  company: string;
  created_at: string;
  email: string;
  followers: string;
  following: string;
  html_url: string;
  location: string;
  login: string;
  name: string;
  public_repos: string;
  twitter_username: string;
};

interface UserInfoContextProps {
  initialState: boolean;
  userInfo: GithubUser;
  setUserInfo: Dispatch<SetStateAction<GithubUser>>;
  toggleInitialState: () => void;
};

const UserInfoContext = createContext<UserInfoContextProps>({
  initialState: true,
  userInfo: {
    avatar_url: '',
    bio: '',
    company: '',
    created_at: '',
    email: '',
    followers: '',
    following: '',
    html_url: '',
    location: '',
    login: '',
    name: '',
    public_repos: '',
    twitter_username: '',
  },
  setUserInfo: () => {},
  toggleInitialState: () => {},
});

export const useUserInfo = () => useContext(UserInfoContext);

export const UserInfoProvider = ({ children }: { children: any }) => {
  const [userInfo, setUserInfo] = useState({
    avatar_url: '',
    bio: '',
    company: '',
    created_at: '',
    email: '',
    followers: '',
    following: '',
    html_url: '',
    location: '',
    login: '',
    name: '',
    public_repos: '',
    twitter_username: '',
  });
  const [initialState, setInitialState] = useState(true);

  const toggleInitialState = () => {
    setInitialState(false);
  };

  return(
    <UserInfoContext.Provider
      value={{ initialState, userInfo, setUserInfo, toggleInitialState }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};