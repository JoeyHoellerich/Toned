import React, { useEffect, useState } from "react"

export default function ShowUser() {
  // state used to fetch user collection data
  const [user, setUser] = useState([])

  // state used to track user value
  const [userValue, setUserValue] = useState("")

  useEffect(() => {
    // fetch all users
    async function getUser() {
      const response = await fetch(`http://localhost:3000/user`)

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`
        window.alert(message)
        return
      }

      const user = await response.json()
      setUser(user)
    }
    getUser()
    return
  }, [user.length])

  // map user data and have each username appear in drop down
  function userList() {
    return user.map((eachUser) => {
      return (
        <option
          key={eachUser._id}
          defaultValue={null}
          value={eachUser.username}
        >
          {eachUser.username}
        </option>
      )
    })
  }
  console.log({ user })
  console.log({ user: userValue.username })

  return (
    <div>
      <h3>{userValue != "" ? `Welcome: ${userValue}` : ""}</h3>
      <form>
        <label htmlFor="username">Select User: </label>
        <select id={"username"} onChange={(e) => setUserValue(e.target.value)}>
          {userList()}
        </select>
      </form>
    </div>
  )
}
