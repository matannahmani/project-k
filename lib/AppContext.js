/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useState } from 'react';
const AppContext = createContext();

const appState = {loading: false,p: {},purchase: {}}
export {appState};

export function AppWrapper({ children }) {
    const [app,setApp] = useState(appState);

    
    return (
        <AppContext.Provider value={[app,setApp]}>
        {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
  return useContext(AppContext);
}