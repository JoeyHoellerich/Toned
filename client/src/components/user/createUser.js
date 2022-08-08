import React, { useState } from "react"
import { useNavigate } from "react-router"

export default function CreateUser() {
  const [form, setForm] = useState({
    username: "",
    firstName: "",
    lastName: "",
    age: "",
    weight: "",
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

    setForm({
      username: "",
      firstName: "",
      lastName: "",
      age: "",
      weight: "",
    })
    navigate("/")
  }

  return (
    <div>
      <h3>Create a user</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={form.username}
            onChange={(e) => updateForm({ username: e.target.value })}
          />
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={form.firstName}
            onChange={(e) => updateForm({ firstName: e.target.value })}
          />
          <label htmlFor="lastName">Last Name </label>
          <input
            type="text"
            id="lastName"
            value={form.lastName}
            onChange={(e) => updateForm({ lastName: e.target.value })}
          />
          <label htmlFor="age">Age</label>
          <input
            type="text"
            id="age"
            value={form.age}
            onChange={(e) => updateForm({ age: e.target.value })}
          />
          <label htmlFor="weight">Weight</label>
          <input
            type="text"
            id="weight"
            value={form.weight}
            onChange={(e) => updateForm({ weight: e.target.value })}
          />
        </div>

        <div>
          <input type="submit" value="Create Account" />
        </div>
      </form>
    </div>
  )
}
