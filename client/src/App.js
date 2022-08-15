import { React, useState } from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"

// Context
import UserContext from "./context/UserContext"

// We import all the components we need in our app
import Edit from "./components/exercise/edit"
import CreateWorkout from "./components/exercise/CreateWorkout"
import CreateUser from "./components/user/createUser"
import PastWorkouts from "./components/PastWorkouts/PastWorkouts"
import EditWorkout from "./components/exercise/EditWorkout"
import Login from "./components/user/Login"
import ErrorPage from "./components/error/ErrorPage"
import WorkoutPage from "./components/exercise/WorkoutPage"

function App() {
  const [user, setUser] = useState([])

  function updateUser(userData) {
    setUser(userData)
  }

  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <UserContext.Provider
              value={{ user: user, updateUser: updateUser }}
            >
              <Login />
            </UserContext.Provider>
          }
        />

        <Route
          path="/createuser"
          element={
            <UserContext.Provider
              value={{ user: user, updateUser: updateUser }}
            >
              <CreateUser />
            </UserContext.Provider>
          }
        />
        <Route
          exact
          path="/workouts"
          element={
            user.length > 0 ? (
              <UserContext.Provider
                value={{ user: user, updateUser: updateUser }}
              >
                <WorkoutPage />
              </UserContext.Provider>
            ) : (
              <ErrorPage />
            )
          }
        />
        <Route
          path="/add"
          element={
            <UserContext.Provider
              value={{ user: user, updateUser: updateUser }}
            >
              <CreateWorkout />
            </UserContext.Provider>
          }
        />
        <Route
          path="/pastworkouts"
          element={
            <UserContext.Provider
              value={{ user: user, updateUser: updateUser }}
            >
              <PastWorkouts />
            </UserContext.Provider>
          }
        />
        <Route
          path="/editworkout/:id"
          element={
            <UserContext.Provider
              value={{ user: user, updateUser: updateUser }}
            >
              <EditWorkout />
            </UserContext.Provider>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <UserContext.Provider
              value={{ user: user, updateUser: updateUser }}
            >
              <Edit />
            </UserContext.Provider>
          }
        />
      </Routes>
    </div>
  )
}

export default App
