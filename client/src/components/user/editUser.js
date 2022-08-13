import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router"

export default function Edit() {
  const [form, setForm] = useState({
    user: "",
    records: [],
  })
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString()
      const response = await fetch(
        `https://toned-mern.herokuapp.com/user/${params.id.toString()}`
      )

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`
        window.alert(message)
        return
      }
      const record = await response.json()
      if (!record) {
        window.alert(`Record with id ${id} not found`)
        navigate("/")
        return
      }
      setForm(record)
    }
    fetchData()
    return
  }, [params.id, navigate])

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value }
    })
  }

  async function onSubmit(e) {
    e.preventDefault()
    const editedUser = {
      user: form.user,
    }

    // This will send a post request to update the data in the database.
    await fetch(`https://toned-mern.herokuapp.com/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedExercise),
      headers: {
        "Content-Type": "application/json",
      },
    })

    navigate("/")
  }

  return (
    <div>
      <h3>Update User</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label>User</label>
          <input
            type="text"
            id="user"
            value={form.user}
            onChange={(e) => updateForm({ user: e.target.value })}
          />
        </div>

        <div>
          <input type="submit" value="Update Exercise" />
        </div>
      </form>
    </div>
  )
}
