import { createContext, useContext, useEffect, useState } from 'react';
import React from 'react';
import { AppWrapper } from './AppContext';
import { apiRequest } from './api';

const UserContext = createContext();


const userState = {logged: false,wasLogged: false,firstload: true,info: {username: ''}}
export {userState};

export function UserWrapper({ children }) {
    const [user,setUser] = useState(userState);
    
    useEffect( () => {
      const fetchLog = async () =>
      {
        const logged = localStorage.getItem('logged')
        if (logged){
          const checkuser = await apiRequest({path: 'users',method: 'get'});
          if (checkuser.status === 200){
              setUser({logged: true,firstload: false,info: checkuser.data});
          }
          else
            localStorage.setItem('logged',false);
        }
      }
      fetchLog();
  }, [])

    
    return (
      <AppWrapper>
        <UserContext.Provider value={[user,setUser]}>
        {children}
        </UserContext.Provider>
      </AppWrapper>
    );
}

export function useUserContext() {
  return useContext(UserContext);
}