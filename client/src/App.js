import React from "react"
import { Route, Routes } from "react-router-dom"
import logo from "./imgs/toned-logo.svg"
import tonedtitle from "./imgs/toned-title.svg"
import "./App.css"

// We import all the components we need in our app
import Navbar from "./components/navbar/navbar"
import ExerciseLog from "./components/exercise/exerciseLog"
import Edit from "./components/exercise/edit"
import Create from "./components/exercise/create"
import CreateUser from "./components/user/createUser"
import ShowUser from "./components/user/showUser"
import UserLogin from "./components/user/userLogin"

function App() {
  return (
    <div className="App">
      <img src={tonedtitle} width="100%" alt="toned" />
      <img src={logo} className="App-logo" alt="logo" />
      <ShowUser />
      <UserLogin />
      <Routes>
        <Route exact path="/" element={<ExerciseLog />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <Navbar />
    </div>
  )
}

export default App
