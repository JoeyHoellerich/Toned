import React, { useEffect, useState, useContext, createContext } from "react"
import { Link } from "react-router-dom"
import UserContext from "../../context/UserContext"
import { useNavigate } from "react-router"
import Navbar from "../navbar/Nav"

const Exercise = (props) => (
  <tr>
    <td>{props.exercise.workout}</td>
    <td>{props.exercise.sets}</td>
    <td>{props.exercise.reps}</td>
    <td>{props.exercise.weight}</td>

    <td>
      <Link to={`/edit/${props.exercise._id}`}>Edit</Link>
      <button onClick={() => props.deleteExercise(props.exercise._id)}>
        Delete
      </button>
    </td>
  </tr>
)

export default function ExercisePage() {
  let { user } = useContext(UserContext)
  console.log({ user } + "user")
  const userId = user[0]._id
  const username = user[0].username

  console.log(username + "28")
  console.log(userId)
  // let { user, updateUser } = useContext(UserContext)

  const [exercises, setExercises] = useState([])
  console.log({ exercises })

  // This method fetches the records from the database
  useEffect(() => {
    async function getExercises() {
      const response = await fetch(`http://localhost:3000/exercise/${username}`)

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`
        window.alert(message)
        return
      }

      var resData = await response.json()
      setExercises((prev) => ({ ...prev, ...resData.workouts }))
    }
    getExercises()

    return
  }, [exercises.length])

  // This method will delete a record
  async function deleteExercise(id) {
    await fetch(`http://localhost:3000/exercise/${id}`, {
      method: "DELETE",
    })
    const newExercises = exercises.filter((el) => el._id !== id)
    setExercises(newExercises)
    console.log({ exercises })
  }

  // This method will map out the records on the table
  function exerciseList() {
    return Object.values(exercises).map((exercise) => {
      return (
        <Exercise
          exercise={exercise}
          deleteExercise={() => deleteExercise(exercise._id)}
          key={exercise._id}
        />
      )
    })
  }

  function welcomePage() {
    return (
      <div>
        <h1>Welcome!</h1>
        <p>
          You don't appear to have any previous workouts recorded. Try adding a
          new workout using the "Add Workout" button at the bottom of the screen
        </p>
        <Link to="/create">
          <button>ADD WORKOUT</button>
        </Link>
        <button>
          <Link to={`/pastworkouts`}>Past Workouts</Link>
        </button>
      </div>
    )
  }
  console.log(exerciseList().length)
  // This following section will display the table with the records of individuals.
  return (
    <div>
      <Navbar />
      {exerciseList().length === 0 ? welcomePage() : <h3>Exercise List</h3>}
      <table style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Workout</th>
            <th>Sets</th>
            <th>Reps</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>{exerciseList()}</tbody>
      </table>
    </div>
  )
}
