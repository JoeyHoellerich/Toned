import { React } from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"

// We import all the components we need in our app
import Edit from "./components/exercise/edit"
import Create from "./components/exercise/create"
import CreateUser from "./components/user/createUser"
import PastWorkouts from "./components/PastWorkouts/PastWorkouts"
import EditWorkout from "./components/exercise/EditWorkout"
import Login from "./components/user/Login"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path="/add" element={<Create />} />
        <Route path="/pastworkouts" element={<PastWorkouts />} />
        <Route path="/editworkout" element={<EditWorkout />} />
      </Routes>
    </div>
  )
}

export default App
