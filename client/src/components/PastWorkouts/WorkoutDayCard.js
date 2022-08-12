import React from 'react'
import { Box, Container } from "@mui/material"

import ExpandCard from './ExpandCard'

export default function WorkoutDayCard(props) {

    const workoutContainerStyle = [
        {marginBottom: "20px"},
        {padding: 0},
    ]

    const workoutBoxStyle = [
        {borderLeft: 2},
        {borderRight: 2},
        {borderTop: 2},
        {borderColor: "#E4E4E4"},
    ]

    return(
        <Container sx = {workoutContainerStyle}>
            <h2 className='workoutDate'>Workouts from Past 30 Days</h2>
            <Box sx = {workoutBoxStyle}>
                {props.data.benchPress.length > 0 ? <ExpandCard name = "Bench Press" data={props.data.benchPress} toEdit = {props.toEdit}/> : <></>}
                {props.data.deadlift.length > 0 ? <ExpandCard name = "Dead Lift" data={props.data.deadlift} toEdit = {props.toEdit} /> : <></>}
                {props.data.declineBenchPress.length > 0 ? <ExpandCard name = "Decline Bench Press" data={props.data.declineBenchPress} toEdit = {props.toEdit} /> : <></>}
                {props.data.inclineBenchPress.length > 0 ? <ExpandCard name = "Incline Bench Press" data={props.data.inclineBenchPress} toEdit = {props.toEdit} /> : <></>}
                {props.data.latPulldown.length > 0 ? <ExpandCard name = "Lat Pulldown" data = {props.data.latPulldown} toEdit = {props.toEdit} /> : <></>}
                {props.data.legPress.length > 0 ? <ExpandCard name = "Leg Press" data = {props.data.legPress} toEdit = {props.toEdit} /> : <></>}
                {props.data.pullUp.length > 0 ? <ExpandCard name = "Pull-Ups" data = {props.data.pullUp} toEdit = {props.toEdit} /> : <></>}
                {props.data.pushUp.length > 0 ? <ExpandCard name = "Push-Ups" data = {props.data.pushUp} toEdit = {props.toEdit} /> : <></>}
                {props.data.romanianDeadlift.length > 0 ? <ExpandCard name = "Romanian Deadlift" data = {props.data.romanianDeadlift} toEdit = {props.toEdit} /> : <></>}
                {props.data.squat.length > 0 ? <ExpandCard name = "Squat" data = {props.data.squat} toEdit = {props.toEdit} /> : <></>}
            </Box>
        </Container>
    )
}