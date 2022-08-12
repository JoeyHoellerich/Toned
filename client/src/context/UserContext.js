import React from "react"

// create Context to store User Data after loggin in
const UserContext = React.createContext({
    user: [],
    updateUser: () => {}
})

export default UserContext