import React, {useState} from "react"
import { Container, Box } from "@mui/material"
import { useParams, useNavigate } from "react-router"

import tonedTitle from "../../imgs/toned-title.svg"
import tonedLogo from "../../imgs/toned-logo.svg"

export default function Login(){

    const params = useParams()
    const navigate = useNavigate()

    const [user, setUser] = useState("")
    const [isUser, setIsUser] = useState(false)

    function changeUser(e){
        setUser(e.target.value)
        if(user == ""){
            setIsUser(false)
        }
    }

    async function onSubmit(e) {
        e.preventDefault()
    
        // Check to see if user is in database
        let userObject = await fetch(`http://localhost:5000/user/${user}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
    
        // if the user exists 
        if (userObject.headers.get("content-length") > 2){
            console.log(userObject)
        } else {
            setIsUser(true)
        }
        
    }

    function toCreateAccount(){
        navigate("/createuser")
    }
    
    const inputBoxStyle = [
        {margin: "auto"},
        {paddingBottom: "15px"}
    ]

    return(
        <div>
            <img src={tonedTitle} alt="toned" className="center" />
            <img src={tonedLogo} alt="toned logo" className="center loginImg" />
            <Container>
                <form onSubmit={onSubmit}>
                    <Box sx={inputBoxStyle}>
                        <label className="center">
                            <h2 className="tonedInputLabel">Username</h2>
                            <Box sx={{display: "flex"}}>
                                <input 
                                    className="tonedInput" 
                                    name="user" id="username-input" 
                                    type="text"
                                    value={user}
                                    onChange={changeUser} 
                                />
                                <button type="submit" className="loginBtn">Go!</button>
                            </Box>
                        </label>
                    </Box>
                    {isUser && user !== ""?
                        <Box sx={inputBoxStyle}>
                            <p className="errorMsg">Invalid Username, Try Creating an Account!</p>
                        </Box> : <></>
                    }
                    <Box>
                        <div className="center">
                            <h2 className="tonedLabel">Don't have an account?</h2>
                            <button onClick={toCreateAccount} className="tonedButton" style={{marginBottom: "5%"}}>Create an Account</button>
                        </div>
                    </Box>
                </form>
            </Container>
        </div>

    )
}