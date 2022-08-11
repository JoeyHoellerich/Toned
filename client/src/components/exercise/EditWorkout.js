import { Container, Box} from "@mui/material"
import React, {useState} from "react"
import editWorkoutTitle from "../../imgs/editworkout-title.svg"
import { useParams, useNavigate } from "react-router"

export default function EditWorkout(props){

    const params = useParams()
    const navigate = useNavigate()

    const workoutData = {
        "_id": "62ec22c5b1bb9a6fd48408be",
        "workout": "Deadlift",
        "sets": 3,
        "reps": 1,
        "weight": 225,
        "user": {
          "$oid": "62ef6e2f0d2dd3c89c5855e0"
        },
        "date": "2022-08-09T18:06:21.647+00:00",
        "__v": 0
    }

    const inputBoxStyle = [
        {margin: "auto"},
        {paddingBottom: "15px"}
    ]

    const [form, setForm] = useState({
        workout: "",
        sets: "",
        reps: "",
        weight: "",
        date: ""
    })

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
        await fetch(`http://localhost:3000/update/${params.id}`, {
          method: "PUT",
          body: JSON.stringify(editedExercise),
          headers: {
            "Content-Type": "application/json",
          },
        })
    
        navigate("/")
    }

    function updateForm(value) {
        return setForm((prev) => {
          return { ...prev, ...value }
        })
    }

    // converts NumberLong to mm-dd-yyyy date to display to user
    // function getDateIfDate(d) {
    //     var m = d.match(/\/Date\((\d+)\)\//);
    //     return m ? (new Date(+m[1])).toLocaleDateString('en-US', {month: '2-digit', day: '2-digit', year: 'numeric'}) : d;
    // }

    function utcToLocale(d) {
        let date = new Date(d)
        var dd = date.getDate(); 
        var mm = date.getMonth()+1;
        var yyyy = date.getFullYear(); 
        if(dd<10){dd='0'+dd} 
        if(mm<10){mm='0'+mm};
        return (`${yyyy}-${mm}-${dd}`)
    }

    return(
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
                                defaultValue= {workoutData.workout}
                            >
                                <option value={"Select Workout"}>Select Workout</option>
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
                                defaultValue={workoutData.sets}
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
                                defaultValue={workoutData.reps}
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
                                defaultValue={workoutData.weight}
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
                                defaultValue={
                                    utcToLocale(workoutData.date)
                                }

                                style = {{"height" : "2.5em"}}
                                onChange={e => updateForm({
                                    date: e.target.value
                                })}
                            />
                        </label>
                    </Box>
                    <Box sx={inputBoxStyle}>
                        <div className="center">
                            <button type="submit" className="tonedButton">Add Workout</button>
                        </div>
                    </Box>
                </form>
            </Container>
        </Container>
    )

}