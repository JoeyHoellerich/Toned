import { Container, Box } from "@mui/material"
import React, {useState} from "react"
import editWorkoutTitle from "../../imgs/editworkout-title.svg"

export default function EditWorkout(props){

    const workoutData = {
        "_id": "62ec22c5b1bb9a6fd48408be",
        "workout": "Deadlift",
        "sets": 3,
        "reps": 1,
        "weight": 225,
        "user": {
          "$oid": "62ef6e2f0d2dd3c89c5855e0"
        },
        "date": {
          "$date": {
            "$numberLong": "1659983268936"
          }
        },
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
        date: {
            $date: {
                $numberLong: ""
            }
        }
    })

    function updateForm(value) {
        return setForm((prev) => {
          return { ...prev, ...value }
        })
    }

    // converts NumberLong to mm-dd-yyyy date to display to user
    function getDateIfDate(d) {
        var m = d.match(/\/Date\((\d+)\)\//);
        return m ? (new Date(+m[1])).toLocaleDateString('en-US', {month: '2-digit', day: '2-digit', year: 'numeric'}) : d;
    }

    function dateToTicks(d) {
        let date = new Date(d)
        return date.getTime()
    }

    return(
        <Container>
            <img src={editWorkoutTitle} alt="Edit Workout" className="center" />
            <Container>
                <form>
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
                                name="reps" id="sets-input" 
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
                                    getDateIfDate(`/Date(${workoutData.date.$date.$numberLong})/`)
                                }
                                onChange={e => updateForm({
                                    date: {
                                        $date : {
                                            $numberLong: dateToTicks(e.target.value)
                                        }
                                    }
                                })}
                            />
                        </label>
                    </Box>
                </form>
            </Container>
        </Container>
    )

}