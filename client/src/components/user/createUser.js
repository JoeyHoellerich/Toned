import React, { useState, useContext } from "react"
import { Box, IconButton } from "@mui/material"
import { useNavigate } from "react-router"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import createUserTitle from "../../imgs/signup-title.svg"
import UserContext from "../../context/UserContext"

export default function CreateUser() {
  const { user, updateUser } = useContext(UserContext)

  const inputBoxStyle = [{ margin: "auto" }, { paddingBottom: "15px" }]

  const arrowStyle = [
    { color: "#E4E4E4" },
    { fontSize: "3em" },
    { paddingLeft: "3%" },
    { paddingTop: "3%" },
  ]

  const [form, setForm] = useState({
    username: "",
    firstName: "",
    lastName: "",
    age: "",
    weight: "",
  })

  const [invalidUser, setInvalidUser] = useState(false)

  const navigate = useNavigate()

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value }
    })
  }

  function toLogin() {
    navigate("/")
  }

  function changeUser(e) {
    updateForm({ username: e.target.value })
    if (form.username === "") {
      setInvalidUser(false)
    }
  }

  async function onSubmit(e) {
    e.preventDefault()

    const newUser = { ...form }

    let response = await fetch(`http://localhost:3000/user/${form.username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    let userObject = await response.json()

    if (userObject.length > 0) {
      setInvalidUser(true)
    } else {
      let newUserResponse = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      }).catch((error) => {
        window.alert(error)
        return
      })

      updateUser(newUserResponse)

      setForm({
        username: "",
        firstName: "",
        lastName: "",
        age: "",
        weight: "",
      })
      navigate("/workouts")
    }
  }

  return (
    <div>
      <IconButton onClick={toLogin}>
        <ArrowBackIcon sx={arrowStyle} />
      </IconButton>
      <img src={createUserTitle} alt="sign up" className="center" />
      <form onSubmit={onSubmit}>
        <Box sx={inputBoxStyle}>
          <label className="center">
            <h2 className="tonedInputLabel">Username</h2>
            <input
              className="tonedInput"
              name="user"
              id="username-input"
              type="text"
              value={form.username}
              onChange={changeUser}
              pattern="[^' ']+"
              required
            />
          </label>
        </Box>
        <Box sx={inputBoxStyle}>
          <label className="center">
            <h2 className="tonedInputLabel">First Name</h2>
            <input
              className="tonedInput"
              name="firstName"
              id="firstName-input"
              type="text"
              value={form.firstName}
              onChange={(e) => updateForm({ firstName: e.target.value })}
              required
            />
          </label>
        </Box>
        <Box sx={inputBoxStyle}>
          <label className="center">
            <h2 className="tonedInputLabel">Last Name</h2>
            <input
              className="tonedInput"
              name="lastName"
              id="lastName-input"
              type="text"
              value={form.lastName}
              onChange={(e) => updateForm({ lastName: e.target.value })}
              required
            />
          </label>
        </Box>
        <Box sx={inputBoxStyle}>
          <label className="center">
            <h2 className="tonedInputLabel">Age</h2>
            <input
              className="tonedInput"
              name="age"
              id="age-input"
              type="number"
              value={form.age}
              onChange={(e) => updateForm({ age: e.target.value })}
              required
            />
          </label>
        </Box>
        <Box sx={inputBoxStyle}>
          <label className="center">
            <h2 className="tonedInputLabel">Weight</h2>
            <input
              className="tonedInput"
              name="weight"
              id="weight-input"
              type="number"
              value={form.weight}
              onChange={(e) => updateForm({ weight: e.target.value })}
              required
            />
          </label>
        </Box>
        {invalidUser ? (
          <h2 className="errorMsg">
            That Username has already been taken, try another one
          </h2>
        ) : (
          <></>
        )}
        <Box>
          <div className="center">
            <h2 className="tonedLabel">Let's Get Going!</h2>
            <button
              type="submit"
              className="tonedButton"
              style={{ marginBottom: "5%" }}
            >
              Create an Account
            </button>
          </div>
        </Box>
      </form>
    </div>
  )
}
