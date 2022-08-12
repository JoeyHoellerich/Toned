import React, { useContext, useState, useEffect } from "react"
import WorkoutDayCard from "./WorkoutDayCard"
import pastWorkoutTitle from "../../imgs/pastworkouts-title.svg"
import { Container } from "@mui/material"
import Navbar from "../navbar/Nav"

import UserContext from "../../context/UserContext"

export default function PastWorkouts(){

  const [data, setData] = useState({
    benchPress: [],
    inclineBenchPress: [],
    declineBenchPress: [],
    squat: [],
    legPress: [],
    romanianDeadlift: [],
    deadlift: [],
    latPulldown: [],
    pullUp: [],
    pushUp: []
  })

  function updateData(value) {
    return setData((prev) => {
      return { ...prev, ...value }
    })
}
  
  const {user} = useContext(UserContext)

  const username = user[0].username

  // when the page renders, go grab all the workout data for the various exercises
  useEffect(() => {
    const fetchData = async () => {
      fetchBenchPress();
      fetchInclineBenchPress();
      fetchDeclineBenchPress();
      fetchSquat();
      fetchLegPress();
      fetchRomanianDeadlift();
      fetchDeadlift();
      fetchLatPulldown();
      fetchPullUps();
      fetchPushUps();
    }

    // Get Squat Data from past 30 days
    const fetchSquat = async () => {
      const response = await fetch(`http://localhost:3000/exercise/${username}/specific/Squat`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      let userSquats = await response.json()
      updateData({squat: userSquats.exercise})
    }

    // Get Bench Press Data from past 30 days
    const fetchBenchPress = async () => {
      const response = await fetch(`http://localhost:3000/exercise/${username}/specific/Bench Press`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      let userBenchPress = await response.json()
      updateData({benchPress: userBenchPress.exercise})
    }

    // Get Incline Bench Press Data from past 30 days
    const fetchInclineBenchPress = async () => {
      const response = await fetch(`http://localhost:3000/exercise/${username}/specific/Incline Bench Press`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      let userInclineBenchPress = await response.json()
      updateData({inclineBenchPress: userInclineBenchPress.exercise})
    }    

    // Get Decline Bench Press Data from past 30 days
    const fetchDeclineBenchPress = async () => {
      const response = await fetch(`http://localhost:3000/exercise/${username}/specific/Decline Bench Press`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      let userDeclineBenchPress = await response.json()
      updateData({declineBenchPress: userDeclineBenchPress.exercise})
    } 

    // Get Leg Press Data from past 30 days
    const fetchLegPress = async () => {
      const response = await fetch(`http://localhost:3000/exercise/${username}/specific/Leg Press`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      let userLegPress = await response.json()
      updateData({legPress: userLegPress.exercise})
    }
    
    // Get Romanian Deadlift Data from past 30 days
    const fetchRomanianDeadlift = async () => {
      const response = await fetch(`http://localhost:3000/exercise/${username}/specific/Romanian Deadlift`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      let userRomanianDeadlift = await response.json()
      updateData({romanianDeadlift: userRomanianDeadlift.exercise})
    } 

    // Get Deadlift Data from past 30 days
    const fetchDeadlift = async () => {
      const response = await fetch(`http://localhost:3000/exercise/${username}/specific/Deadlift`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      let userDeadlift = await response.json()
      updateData({deadlift: userDeadlift.exercise})
    }

    // Get Lat Pulldown Data from past 30 days
    const fetchLatPulldown = async () => {
      const response = await fetch(`http://localhost:3000/exercise/${username}/specific/Lat Pulldown`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      let userLatPulldown = await response.json()
      updateData({latPulldown: userLatPulldown.exercise})
    }

    // Get Pull-Ups Data from past 30 days
    const fetchPullUps = async () => {
      const response = await fetch(`http://localhost:3000/exercise/${username}/specific/Pull-Ups`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      let userPullUps = await response.json()
      updateData({pullUp: userPullUps.exercise})
    }

    // Get Push-Ups Data from past 30 days
    const fetchPushUps = async () => {
      const response = await fetch(`http://localhost:3000/exercise/${username}/specific/Push-Ups`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      let userPushUps = await response.json()
      updateData({pushUp: userPushUps.exercise})
    }

    fetchData()
    .catch(console.error)
    console.log(data)
  }, [])

    return(
      <div>
        <Navbar />
        <Container>
            <img className="center" alt="Past Workouts" src = {pastWorkoutTitle} />
            <WorkoutDayCard data = {data} />
        </Container>
      </div>
    )
}