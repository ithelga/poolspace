import {createContext, useContext, useEffect, useState} from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = getUser();
    setIsLoggedIn(user != null && user.id != null && user.token != null);
  }, []);

  const handleLogin = (user) => {
    setUser(user);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const getUser = () => {
    return JSON.parse(localStorage.getItem('user_data'));
  }

  const setUser = (user) => {
    return localStorage.setItem('user_data', JSON.stringify(user));
  }

  return (
    <AppContext.Provider value={{isLoggedIn, handleLogin, handleLogout, getUser}}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export {AppProvider, useAppContext};