import { Container, Box } from "@mui/material"
import React, { useEffect, useState, useContext } from "react"
import { useParams, useNavigate } from "react-router"
import { Link } from "react-router-dom"
import UserContext from "../../context/UserContext"
import Navbar from "../navbar/Nav"
import EditOffOutlinedIcon from "@mui/icons-material/EditOffOutlined"

const Exercise = (props) => (
  <tr>
    <td>{props.exercise.workout}</td>
    <td>{props.exercise.sets}</td>
    <td>{props.exercise.reps}</td>
    <td>{props.exercise.weight}</td>

    <td>
      <div className="btnContainer">
        <Link to={`/edit/${props.exercise._id}`}>
          <EditOffOutlinedIcon className="editPencil" />
        </Link>
      </div>
    </td>
  </tr>
)
const inputBoxStyle = [{ paddingBottom: "15px" }]
export default function WorkoutPage() {
  let { user } = useContext(UserContext)
  const username = user[0].username
  const navigate = useNavigate()
  const [exercises, setExercises] = useState([])

  // This method fetches the records from the database
  useEffect(() => {
    async function getExercises() {
      const response = await fetch(`https://toned-mern.herokuapp.com/exercise/${username}`)

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
  }, [exercises.length, username])


  // This method will map out the records on the table
  function exerciseList() {
    return Object.values(exercises).map((exercise) => {
      return (
        <Exercise
          exercise={exercise}
          key={exercise._id}
        />
      )
    })
  }

  function welcomePage() {
    return (
      <div>
        <h1 className="recent">Welcome!</h1>
        <p className="welcome">
          You don't appear to have any previous workouts recorded. Try adding a
          new workout using the "Add Workout" button at the bottom of the screen
        </p>
      </div>
    )
  }

  // This following section will display the table with the records of individuals.
  return (
    <div>
      <Navbar />
      <Container>
        {exerciseList().length === 0 ? (
          welcomePage()
        ) : (
          <h3 className="recent">RECENT WORKOUTS</h3>
        )}
        <Box sx={inputBoxStyle}>
          {exerciseList().length > 0 && (
            <table id="recentTable" style={{ marginTop: 20 }}>
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
          )}
        </Box>

        <button className="tonedButton">
          <Link to="/add">Add Workout</Link>
        </button>

        {exerciseList().length > 0 && (
          <button className="tonedButton">
            <Link to={`/pastworkouts`}>Past Workouts</Link>
          </button>
        )}
      </Container>
    </div>
  )
}
