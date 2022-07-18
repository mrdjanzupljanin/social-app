import React from "react";

const authContext = React.createContext({
    isAuth: false,
    setIsAuth: false,
   
})

export default authContext;