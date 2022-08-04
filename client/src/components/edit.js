import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router"

export default function Edit() {
  const [form, setForm] = useState({
    workout: "",
    sets: "",
    reps: "",
    weight: "",
    records: [],
  })
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString()
      const response = await fetch(
        `http://localhost:3000/exercise/${params.id.toString()}`
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

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value }
    })
  }

  async function onSubmit(e) {
    e.preventDefault()
    const editedExercise = {
      workout: form.workout,
      sets: form.sets,
      reps: form.reps,
      weight: form.weight,
    }

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:3000/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedExercise),
      headers: {
        "Content-Type": "application/json",
      },
    })

    navigate("/")
  }
  // This following section will display the form that takes input from the user to update the data.
  return (
    <div>
      <h3>Update Exercise</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="workout">workout </label>
          <select
            id="workout"
            onChange={(e) => updateForm({ workout: e.target.value })}
          >
            <option value={"Select Workout"}>Select Workout</option>
            <option value={"Bench Press"}>Bench Press</option>
            <option value={"Incline Bench Press"}>Incline Bench Press</option>
            <option value={"Decline Bench Press"}>Decline Bench Press</option>
            <option value={"Squat"}>Squat</option>
            <option value={"Leg Press"}>Leg Press</option>
            <option value={"Romanian Deadlift"}>Romanian Deadlift</option>
            <option value={"Deadlift"}>Deadlift</option>
            <option value={"Lat Pulldown"}>Lat Pulldown</option>
            <option value={"Pull-Ups"}>Pull-Ups</option>
            <option value={"Push-Ups"}>Push-Ups</option>
          </select>
          {/* <input
            type="text"
            id="workout"
            value={form.workout}
            onChange={(e) => updateForm({ workout: e.target.value })}
          /> */}
        </div>

        <div>
          <label htmlFor="sets">sets </label>
          <input
            type="text"
            id="sets"
            value={form.sets}
            onChange={(e) => updateForm({ sets: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="reps">reps </label>
          <input
            type="text"
            id="reps"
            value={form.sets}
            onChange={(e) => updateForm({ reps: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="weight">sets </label>
          <input
            type="text"
            id="weight"
            value={form.weight}
            onChange={(e) => updateForm({ weight: e.target.value })}
          />
        </div>

        <br />

        <div>
          <input type="submit" value="Update Exercise" />
        </div>
      </form>
    </div>
  )
}
