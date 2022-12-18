import React, { useState } from 'react'
import { createContext } from 'react'

export let AuthContext=createContext()



const AuthContextProvider = ({children}) => {
  let [state,setState]=useState({
    isAuth:false,
    token:null
  })

  let Login=(token)=>{
    setState({
      ...state,
      isAuth:true,
      token

    })
  }

  let Logout=()=>{
    setState({
      ...state,
      isAuth:false,
      token:null
    })
  }

  return (
    <AuthContext.Provider value={{Login,Logout,authState:state}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider