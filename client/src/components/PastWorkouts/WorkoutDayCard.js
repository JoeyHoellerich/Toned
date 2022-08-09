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
            <h2 className='workoutDate'>Monday, 8 Aug 2022</h2>
            <Box sx = {workoutBoxStyle}>
                {props.data.map((exercise, index) => {
                    return(
                        <ExpandCard name = {exercise.workout}/>
                    )
                })}
            </Box>
        </Container>
    )
}