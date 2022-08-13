import React, { useState, useContext } from "react"
import { Container, Box } from "@mui/material"
import { useNavigate } from "react-router"
import addWorkoutTitle from "../../imgs/addworkout-title.svg"
import Navbar from "../navbar/Nav"
import UserContext from "../../context/UserContext"

export default function CreateWorkout() {
  let { user } = useContext(UserContext)
  const userId = user[0]._id

  const [form, setForm] = useState({
    workout: "Bench Press",
    sets: "",
    reps: "",
    weight: "",
    date: utcToLocale(),
    user: userId,
  })

  const navigate = useNavigate()

  const inputBoxStyle = [{ margin: "auto" }, { paddingBottom: "15px" }]

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

    await fetch("http://localhost:3000/exercise", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newExercise),
    }).catch((error) => {
      window.alert(error)
      return
    })

    setForm({
      workout: "",
      sets: "",
      reps: "",
      weight: "",
      date: utcToLocale(),
      user: userId,
    })
    navigate("/workouts")
  }

  function utcToLocale() {
    let date = new Date()
    var dd = date.getDate()
    var mm = date.getMonth() + 1
    var yyyy = date.getFullYear()
    if (dd < 10) {
      dd = "0" + dd
    }
    if (mm < 10) {
      mm = "0" + mm
    }
    return `${yyyy}-${mm}-${dd}`
  }
  // This following section will display the form that takes the input from the user

  return (
    <div>
      <Navbar />
      <img src={addWorkoutTitle} alt="Edit Workout" className="center" />
      <Container>
        <form onSubmit={onSubmit}>
          <Box sx={inputBoxStyle}>
            <label className="center">
              <h2 className="tonedInputLabel">Workout</h2>
              <select
                className="tonedInput"
                id="workout-select"
                onChange={(e) => updateForm({ workout: e.target.value })}
                style={{ width: "99.5%", height: "2.5em" }}
                value={form.workout}
                required
              >
                <option value={"Bench Press"}>Bench Press</option>
                <option value={"Incline Bench Press"}>
                  Incline Bench Press
                </option>
                <option value={"Decline Bench Press"}>
                  Decline Bench Press
                </option>
                <option value={"Squat"}>Squat</option>
                <option value={"Leg Press"}>Leg Press</option>
                <option value={"Romanian Deadlift"}>Romanian Deadlift</option>
                <option value={"Deadlift"}>Deadlift</option>
                <option value={"Lat Pulldown"}>Lat Pulldown</option>
                <option value={"Pull-Ups"}>Pull-Ups</option>
                <option value={"Push-Ups"}>Push-Ups</option>
                <option value={"Power Clean"}>Power Clean</option>
                <option value={"Singe Leg RDL"}>Singe Leg RDL</option>
                <option value={"Kettle Bell Swing"}>Kettle Bell Swing</option>
                <option value={"Db Lunges"}>Db Lunges</option>
              </select>
            </label>
          </Box>
          <Box sx={inputBoxStyle}>
            <label htmlFor="sets" className="center">
              <h2 className="tonedInputLabel">Sets</h2>
              <input
                className="tonedInput"
                name="sets"
                id="sets-input"
                type="number"
                onChange={(e) => updateForm({ sets: e.target.value })}
                value={form.sets}
                required
              />
            </label>
          </Box>
          <Box sx={inputBoxStyle}>
            <label htmlFor="reps" className="center">
              <h2 className="tonedInputLabel">Reps</h2>
              <input
                className="tonedInput"
                name="reps"
                id="reps-input"
                type="number"
                onChange={(e) => updateForm({ reps: e.target.value })}
                value={form.reps}
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
                onChange={(e) => updateForm({ weight: e.target.value })}
                value={form.weight}
                required
              />
            </label>
          </Box>
          <Box sx={inputBoxStyle}>
            <label htmlFor="date" className="center">
              <h2 className="tonedInputLabel">Date</h2>
              <input
                className="tonedInput"
                name="date"
                id="sets-input"
                type="date"
                style={{ height: "2.5em" }}
                onChange={(e) =>
                  updateForm({
                    date: e.target.value,
                  })
                }
                value={form.date}
                required
              />
            </label>
          </Box>
          <Box sx={inputBoxStyle}>
            <div className="center">
              <button type="submit" className="tonedButton">
                Add Workout
              </button>
            </div>
          </Box>
        </form>
      </Container>
    </div>
  )
}
