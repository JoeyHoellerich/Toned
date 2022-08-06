import React from "react"

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom"

// We import all the components we need in our app
import Navbar from "./components/navbar"
import ExerciseLog from "./components/exerciseLog"
import Edit from "./components/edit"
import Create from "./components/create"
import CreateUser from "./components/user/createUser"
import ShowUser from "./components/user/showUser"

const App = () => {
  return (
    <div>
      <Navbar />
      <ShowUser />
      <Routes>
        <Route exact path="/" element={<ExerciseLog />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  )
}

export default App
