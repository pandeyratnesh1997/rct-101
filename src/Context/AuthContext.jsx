import { createContext, useState } from "react";

export const AuthContext = createContext();


export const AuthProvider = ({children})=>{
     const [isAuth,setIsAuth] = useState(false); 
    async function getdata(){
   let res = await fetch('https://reqres.in/api/login');
   let data =  await res.json();
   console.log(data)

}
    getdata()
    const login = (username,password)=>{
        if(username && password){
            console.log(username,password)
            setIsAuth(true);
        }
    }
    const logout = ()=>{
        setIsAuth(false);
    }

    return(
            <AuthContext.Provider value={{isAuth, login, logout}}>
                {children}
            </AuthContext.Provider>
        )
}
