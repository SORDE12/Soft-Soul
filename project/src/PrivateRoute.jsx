import { useContext } from "react";

import { Navigate } from "react-router-dom";

import { AuthContext } from "./Context/AuthContextProvider";

function PrivateRoute({children}){

    let {authState}=useContext(AuthContext)

    console.log(authState)

    if(!authState.isAuth){
        return <Navigate to="/login"/>
    }
    return children

}
export default PrivateRoute