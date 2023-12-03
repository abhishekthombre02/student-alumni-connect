import React, {createContext, useContext, useState} from 'react'


const authContext= createContext()


function useProvideAuth(){
    const [loggedIn,setLoggedIn] = useState(false)
    const [userData,setUserData] = useState({})

    const handleLogStatusChange = () =>{
        console.log("working state changed")
        setLoggedIn(!loggedIn)

    }

    const changeUserData = (data) =>{
        setUserData(data)
    }

    return {
        loggedIn,
        handleLogStatusChange,
        changeUserData,
        userData
    }
}

export function ProvideAuth({children}) {
    const auth = useProvideAuth()

    return <authContext.Provider value= {auth}>{children}</authContext.Provider>
}

export const useAuth = () => useContext(authContext)