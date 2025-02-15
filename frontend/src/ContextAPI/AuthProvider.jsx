import { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({children}) =>{
  const initialAuthUser= localStorage.getItem('Users');
  const [authUser, setauthUser] = useState(initialAuthUser? JSON.parse(initialAuthUser):undefined);
  return (
    <AuthContext.Provider value={{authUser,setauthUser}}>
      {children}
    </AuthContext.Provider>
  )
}
