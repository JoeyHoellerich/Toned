import React, { useState, useContext, useEffect } from "react"
import { Container, Box } from "@mui/material"
import { useNavigate } from "react-router"

import tonedTitle from "../../imgs/toned-title.svg"
import tonedLogo from "../../imgs/toned-logo.svg"
import UserContext from "../../context/UserContext"

export default function Login() {
  let { user, updateUser } = useContext(UserContext)

  const navigate = useNavigate()

  const [userInput, setUserInput] = useState("")
  const [isUser, setIsUser] = useState(false)

  function changeUser(e) {
    setUserInput(e.target.value)
    if (userInput === "") {
      setIsUser(false)
    }
  }

  async function onSubmit(e) {
    e.preventDefault()

    // Check to see if user is in database
    let response = await fetch(`http://localhost:3000/user/${userInput}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    // returns response as an array of objects, for user it is just 1 object
    let userObject = await response.json()

    // if the user exists
    if (userObject.length > 0) {
      updateUser(userObject)
      navigate(`/exercisepage`)
    } else {
      setIsUser(true)
    }
  }

  function toCreateAccount() {
    navigate("/createuser")
  }

  const inputBoxStyle = [{ margin: "auto" }, { paddingBottom: "15px" }]

  return (
    <div>
      <img src={tonedTitle} alt="toned" className="center" />
      <img src={tonedLogo} alt="toned logo" className="center loginImg" />
      <Container>
        <form onSubmit={onSubmit}>
          <Box sx={inputBoxStyle}>
            <label className="center">
              <h2 className="tonedInputLabel">Username</h2>
              <Box sx={{ display: "flex" }}>
                <input
                  className="tonedInput"
                  name="user"
                  id="username-input"
                  type="text"
                  value={userInput}
                  onChange={changeUser}
                />
                <button type="submit" className="loginBtn">
                  Go!
                </button>
              </Box>
            </label>
          </Box>
          {isUser && user !== "" ? (
            <Box sx={inputBoxStyle}>
              <p className="errorMsg">
                Invalid Username, Try Creating an Account!
              </p>
            </Box>
          ) : (
            <></>
          )}
          <Box>
            <div className="center">
              <h2 className="tonedLabel">Don't have an account?</h2>
              <button
                onClick={toCreateAccount}
                className="tonedButton"
                style={{ marginBottom: "5%" }}
              >
                Create an Account
              </button>
            </div>
          </Box>
        </form>
      </Container>
    </div>
  )
}
