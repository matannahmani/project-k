import { createContext, useContext, useEffect, useState } from 'react';
import React from 'react';
import { AppWrapper } from './AppContext';
import { apiRequest } from './api';

const UserContext = createContext();


const userState = {logged: true,wasLogged: false,firstload: true,info: {username: 'Matan',photo: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=4435832813146621&height=50&width=50&ext=1634285958&hash=AeROKZT9aU39RV5AcxM'}}
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