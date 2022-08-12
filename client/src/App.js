import { React, useState, Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"

// Context
import UserContext from "./context/UserContext"

// We import all the components we need in our app
import Edit from "./components/exercise/edit"
import Create from "./components/exercise/create"
import CreateUser from "./components/user/createUser"
import PastWorkouts from "./components/PastWorkouts/PastWorkouts"
import EditWorkout from "./components/exercise/EditWorkout"
import Login from "./components/user/Login"
import ErrorPage from "./components/error/ErrorPage"
import ExercisePage from "./components/exercise/ExercisePage"

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
          path="/exercisepage"
          element={
            user.length > 0 ? (
              <UserContext.Provider
                value={{ user: user, updateUser: updateUser }}
              >
                <ExercisePage />
              </UserContext.Provider>
            ) : (
              <ErrorPage />
            )
          }
        />
        <Route
          path="/add"
          element={
            user.length > 0 ? (
              <UserContext.Provider
                value={{ user: user, updateUser: updateUser }}
              >
                <Create />
              </UserContext.Provider>
            ) : (
              <ErrorPage />
            )
          }
        />
        <Route
          path="/pastworkouts"
          element={
            user.length > 0 ? (
              <UserContext.Provider
                value={{ user: user, updateUser: updateUser }}
              >
                <PastWorkouts />
              </UserContext.Provider>
            ) : (
              <ErrorPage />
            )
          }
        />
        <Route
          path="/editworkout/:id"
          element={
            user.length > 0 ? (
              <UserContext.Provider
                value={{ user: user, updateUser: updateUser }}
              >
                <EditWorkout />
              </UserContext.Provider>
            ) : (
              <ErrorPage />
            )
          }
        />
      </Routes>
    </div>
  )
}

export default App
