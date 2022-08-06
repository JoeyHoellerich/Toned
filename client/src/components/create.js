import React, { useState } from "react"
import { useNavigate } from "react-router"

export default function Create() {
  const [form, setForm] = useState({
    workout: "",
    sets: "",
    reps: "",
    weight: "",
  })
  const navigate = useNavigate()

  // These methods will update the state properties
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value }
    })
  }

  // This function will handle the submission
  async function onSubmit(e) {
    e.preventDefault()

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newExercise = { ...form }

    await fetch("http://localhost:3000/exercise/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newExercise),
    }).catch((error) => {
      window.alert(error)
      return
    })

    setForm({ workout: "", sets: "", reps: "", weight: "" })
    navigate("/")
  }
  // This following section will display the form that takes the input from the user

  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="workout">Workout</label>
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
            className="form-control"
            id="workout"
            value={form.workout}
            onChange={(e) => updateForm({ workout: e.target.value })}
          /> */}
        </div>

        <div>
          <label htmlFor="sets">Sets</label>
          <input
            type="text"
            id="sets"
            value={form.sets}
            onChange={(e) => updateForm({ sets: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="reps">Reps</label>
          <input
            type="text"
            id="reps"
            value={form.reps}
            onChange={(e) => updateForm({ reps: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="weight">Weight</label>
          <input
            type="text"
            id="weight"
            value={form.weight}
            onChange={(e) => updateForm({ weight: e.target.value })}
          />
        </div>

        <div>
          <input type="submit" value="Add exercise" />
        </div>
      </form>
    </div>
  )
}
