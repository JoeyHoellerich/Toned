import React, { useState, useEffect } from "react"
import editWorkoutTitle from "../../imgs/editworkout-title.svg"
import { Container, Box } from "@mui/material"
import { useParams, useNavigate } from "react-router"
import Navbar from "../navbar/Nav"

export default function Edit() {
  const [form, setForm] = useState({
    workout: "",
    sets: "",
    reps: "",
    weight: "",
    date: "",
    records: [],
  })
  const params = useParams()
  const { id } = useParams()
  const navigate = useNavigate()
  console.log(form)
  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString()
      const response = await fetch(
        `http://localhost:3000/exercise/id/${params.id.toString()}`
      )

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`
        window.alert(message)
        return
      }

      const record = await response.json()
      if (!record) {
        window.alert(`Record with id ${id} not found`)
        navigate("/workouts")
        return
      }

      setForm(record)
    }

    fetchData()

    return
  }, [params.id, navigate])

  async function onDelete(e) {
    e.preventDefault()

    await fetch(`http://localhost:3000/exercise/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })

    navigate("/workouts")
  }

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
      date: form.date,
    }

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:3000/exercise/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(editedExercise),
      headers: {
        "Content-Type": "application/json",
      },
    })

    navigate("/workouts")
  }

  function utcToLocale(d) {
    let date = new Date(d)
    var dd = date.getDate() + 1
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

  const inputBoxStyle = [{ margin: "auto" }, { paddingBottom: "15px" }]

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div>
      <Navbar />
      <Container>
        <img src={editWorkoutTitle} alt="Edit Workout" className="center" />
        <Container>
          <form onSubmit={onSubmit}>
            <Box sx={inputBoxStyle}>
              <label className="center" htmlFor="workout">
                <h2 className="tonedInputLabel">Workout</h2>
                <select
                  className="tonedInput"
                  id="workout"
                  name="workout"
                  value={form.workout}
                  onChange={(e) => updateForm({ workout: e.target.value })}
                >
                  <option value={"Select Workout"}>Select Workout</option>
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
              <label className="center">
                <h2 className="tonedInputLabel">Sets</h2>
                <input
                  className="tonedInput"
                  name="sets"
                  type="number"
                  id="sets"
                  value={form.sets}
                  onChange={(e) => updateForm({ sets: e.target.value })}
                />
              </label>
            </Box>

            <Box sx={inputBoxStyle}>
              <label className="center">
                <h2 className="tonedInputLabel">Reps</h2>
                <input
                  className="tonedInput"
                  name="reps"
                  type="number"
                  id="reps"
                  value={form.reps}
                  onChange={(e) => updateForm({ reps: e.target.value })}
                />
              </label>
            </Box>

            <Box sx={inputBoxStyle}>
              <label className="center">
                <h2 className="tonedInputLabel">Weight</h2>
                <input
                  className="tonedInput"
                  name="weight"
                  id="weight"
                  value={form.weight}
                  onChange={(e) => updateForm({ weight: e.target.value })}
                />
              </label>
            </Box>

            <Box sx={inputBoxStyle}>
              <label className="center">
                <h2 className="tonedInputLabel">Date</h2>
                <input
                  className="tonedInput"
                  name="date"
                  id="date"
                  type="date"
                  style={{ height: "2.5em" }}
                  value={form.date}
                  onChange={(e) =>
                    updateForm({
                      date: e.target.value,
                    })
                  }
                />
              </label>
            </Box>

            <Box sx={inputBoxStyle}>
              <div className="center">
                <button type="submit" className="tonedButton">
                  Update Workout
                </button>
              </div>
            </Box>
            <Box sx={inputBoxStyle}>
              <div className="center">
                <button
                  onClick={onDelete}
                  className="tonedButton"
                  style={{ backgroundColor: "#ff5252" }}
                >
                  Delete Workout
                </button>
              </div>
            </Box>
          </form>
        </Container>
      </Container>
    </div>
  )
}
