import React, { useEffect } from "react"
import WorkoutDayCard from "./WorkoutDayCard"
import pastWorkoutTitle from "../../imgs/pastworkouts-title.svg"
import { Container } from "@mui/material"
import Navbar from "../navbar/Nav"
import { useSearchParams } from "react-router-dom";

// Mock Data
const data = [[{
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
  },
  {
    "_id": "62ec22c5b1bb9a6fd48408bf",
    "workout": "Squat",
    "sets": 3,
    "reps": 1,
    "weight": 225,
    "user": {
      "$oid": "62ef6e2f0d2dd3c89c5855e0"
    },
    "date": {
      "$date": {
        "$numberLong": "1659983268937"
      }
    },
    "__v": 0
  },
  {
    "_id": "62ec22c5b1bb9a6fd48408bc",
    "workout": "Tummy Tap",
    "sets": 3,
    "reps": 1,
    "weight": 225,
    "user": {
      "$oid": "62ef6e2f0d2dd3c89c5855e0"
    },
    "date": {
      "$date": {
        "$numberLong": "1659983268938"
      }
    },
    "__v": 0
  }],
  [{
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
  },
  {
    "_id": "62ec22c5b1bb9a6fd48408bf",
    "workout": "Squat",
    "sets": 3,
    "reps": 1,
    "weight": 225,
    "user": {
      "$oid": "62ef6e2f0d2dd3c89c5855e0"
    },
    "date": {
      "$date": {
        "$numberLong": "1659983268937"
      }
    },
    "__v": 0
  },
  {
    "_id": "62ec22c5b1bb9a6fd48408bc",
    "workout": "Tummy Tap",
    "sets": 3,
    "reps": 1,
    "weight": 225,
    "user": {
      "$oid": "62ef6e2f0d2dd3c89c5855e0"
    },
    "date": {
      "$date": {
        "$numberLong": "1659983268938"
      }
    },
    "__v": 0
  }]
]

export default function PastWorkouts(){

  // location.state gets you state from previous component
  // const location = useLocation()
  // const username = location.state[0].username

  // gets query params from url
  let [searchParams] = useSearchParams()
  let params = Object.fromEntries([...searchParams])

  useEffect(() => {
    console.log(params)
  })

    return(
      <div>
        <Navbar user={params.user}/>
        <Container>
            <img className="center" alt="Past Workouts" src = {pastWorkoutTitle} />
            {data.map((exercises, index) => {
                return (
                    <WorkoutDayCard key={index} data={exercises} />
                )
            })}
        </Container>
      </div>
    )
}