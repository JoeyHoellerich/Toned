import React, { useState } from "react"
import { useNavigate } from "react-router"

export default function CreateUser() {
  const [form, setForm] = useState({
    username: "",
  })
  const navigate = useNavigate()

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value }
    })
  }

  async function onSubmit(e) {
    e.preventDefault()

    const newUser = { ...form }

    await fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).catch((error) => {
      window.alert(error)
      return
    })

    setForm({ username: "" })
    navigate("/")
  }

  return (
    <div>
      <h3>Create a user</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            value={form.username}
            onChange={(e) => updateForm({ username: e.target.value })}
          />
        </div>

        <div>
          <input type="submit" value="Create Username" />
        </div>
      </form>
    </div>
  )
}
