import { Container, Box} from "@mui/material"
import React, {useState, useEffect} from "react"
import editWorkoutTitle from "../../imgs/editworkout-title.svg"
import { useParams, useNavigate } from "react-router"

import Navbar from "../navbar/Nav"

export default function EditWorkout(props){

    const { id } = useParams()
    const navigate = useNavigate()
    
    const [form, setForm] = useState({
        workout: "",
        sets: "",
        reps: "",
        weight: "",
        date: ""
    })

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3000/exercise/id/${id}`, {
                method: "GET",
                headers: {
                "Content-Type": "application/json",
                },
            })

            let responseJSON = await response.json();
            let exercise = responseJSON.exercise[0]
            updateForm({
                workout: exercise.workout,
                sets: exercise.sets,
                reps: exercise.reps,
                weight: exercise.weight,
                date: utcToLocale(exercise.date)
            })
        }

        fetchData()
    }, [])

    const inputBoxStyle = [
        {margin: "auto"},
        {paddingBottom: "15px"}
    ]


    async function onSubmit(e) {
        e.preventDefault()

        const editedExercise = {
          workout: form.workout,
          sets: form.sets,
          reps: form.reps,
          weight: form.weight,
          date: form.date
        }
    
        // This will send a post request to update the data in the database.
        await fetch(`http://localhost:3000/exercise/${id}`, {
          method: "PUT",
          body: JSON.stringify(editedExercise),
          headers: {
            "Content-Type": "application/json",
          },
        })
    
        navigate("/pastworkouts")
    }

    async function onDelete(e) {
        e.preventDefault()

        // This will send a post request to update the data in the database.
        await fetch(`http://localhost:3000/exercise/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
    
        navigate("/pastworkouts")
    }

    function updateForm(value) {
        return setForm((prev) => {
          return { ...prev, ...value }
        })
    }

    function utcToLocale(d) {
        let date = new Date(d)
        var dd = date.getDate()+1; 
        var mm = date.getMonth()+1;
        var yyyy = date.getFullYear(); 
        if(dd<10){dd='0'+dd} 
        if(mm<10){mm='0'+mm};
        return (`${yyyy}-${mm}-${dd}`)
    }

    return(
        <div>
            <Navbar />
            <Container>
                <img src={editWorkoutTitle} alt="Edit Workout" className="center" />
                <Container>
                    <form onSubmit={onSubmit}>
                        <Box sx={inputBoxStyle}>
                            <label className="center">
                                <h2 className="tonedInputLabel">Workout</h2>
                                <select className="tonedInput"
                                    id="workout-select"
                                    onChange={(e) => updateForm({ workout: e.target.value })}
                                    style={{width: "99.5%", height: "2.5em"}}
                                    value= {form.workout}
                                >
                                    <option value={"Bench Press"}>Bench Press</option>
                                    <option value={"Incline Bench Press"}>Incline Bench Press</option>
                                    <option value={"Decline Bench Press"}>Decline Bench Press</option>
                                    <option value={"Squat"}>Squat</option>
                                    <option value={"Leg Press"}>Leg Press</option>
                                    <option value={"Romanian Deadlift"}>Romanian Deadlift</option>
                                    <option value={"Deadlift"}>Deadlift</option>
                                    <option value={"Lat Pulldown"}>Lat Pulldown</option>
                                    <option value={"Pull-Ups"}>Pull-Ups</option>
                                    <option value={"Push-Ups"}>Push-Ups</option>
                                </select>
                            </label>
                        </Box>
                        <Box sx={inputBoxStyle}>
                            <label className="center">
                                <h2 className="tonedInputLabel">Sets</h2>
                                <input 
                                    className="tonedInput" 
                                    name="sets" id="sets-input" 
                                    type="number" 
                                    value={form.sets}
                                    onChange={e => updateForm({sets: e.target.value})}
                                />
                            </label>
                        </Box>
                        <Box sx={inputBoxStyle}>
                            <label className="center">
                                <h2 className="tonedInputLabel">Reps</h2>
                                <input 
                                    className="tonedInput" 
                                    name="reps" id="reps-input" 
                                    type="number" 
                                    value={form.reps}
                                    onChange={e => updateForm({reps: e.target.value})}
                                />
                            </label>
                        </Box>
                        <Box sx={inputBoxStyle}>
                            <label className="center">
                                <h2 className="tonedInputLabel">Weight</h2>
                                <input 
                                    className="tonedInput" 
                                    name="weight" id="weight-input" 
                                    type="number" 
                                    value={form.weight}
                                    onChange={e => updateForm({weight: e.target.value})}
                                />
                            </label>
                        </Box>
                        <Box sx={inputBoxStyle}>
                            <label className="center">
                                <h2 className="tonedInputLabel">Date</h2>
                                <input 
                                    className="tonedInput" 
                                    name="reps" id="sets-input" 
                                    type="date" 
                                    style = {{"height" : "2.5em"}}
                                    value = {form.date}
                                    onChange={e => updateForm({
                                        date: e.target.value
                                    })}
                                />
                            </label>
                        </Box>
                        <Box sx={inputBoxStyle}>
                            <div className="center">
                                <button type="submit" className="tonedButton">Update Workout</button>
                            </div>
                        </Box>
                        <Box sx={inputBoxStyle}>
                            <div className="center">
                                <button onClick = {onDelete} className="tonedButton" style={{backgroundColor: "#ff5252"}}>Delete Workout</button>
                            </div>
                        </Box>
                    </form>
                </Container>
            </Container>
        </div>
    )

}