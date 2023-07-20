import React from 'react';
import { createContext, useState ,useEffect} from 'react';
const Authcontext = createContext({});

export const AuthProvider =({children}) => {
    const[auth,setAuth] = useState(false);

    useEffect(() => {
        const authToken = localStorage.getItem('authToken');
        if (authToken) {
          setAuth(true);
        }
      }, []);
    
      const login = (name,token) => {
        localStorage.setItem(name, token);
        setAuth(true);
      };
    
      const logout = () => {
        localStorage.removeItem('authToken');
        setAuth(false);
      };

    return(
       <Authcontext.Provider  value={{ auth, login , logout}}>
        {children}
       </Authcontext.Provider>
    )
}

export default Authcontext;