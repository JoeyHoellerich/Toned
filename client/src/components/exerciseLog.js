import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

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

export default function ExerciseLog() {
  const [exercises, setExercises] = useState([])
  console.log({ exercises })

  // This method fetches the records from the database
  useEffect(() => {
    async function getExercises() {
      const response = await fetch(`http://localhost:3000/exercise`)

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`
        window.alert(message)
        return
      }

      const exercises = await response.json()
      setExercises(exercises)
    }
    getExercises()

    return
  }, [exercises.length])

  // This method will delete a record
  async function deleteExercise(id) {
    await fetch(`http://localhost:3000/${id}`, {
      method: "DELETE",
    })
    const newExercises = exercises.filter((el) => el._id !== id)
    setExercises(newExercises)
    console.log({ exercises })
  }

  // This method will map out the records on the table
  function exerciseList() {
    return exercises.map((exercise) => {
      return (
        <Exercise
          exercise={exercise}
          deleteExercise={() => deleteExercise(exercise._id)}
          key={exercise._id}
        />
      )
    })
  }

  // This following section will display the table with the records of individuals.
  return (
    <div>
      <h3>Exercise List</h3>
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
