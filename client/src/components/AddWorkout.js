import React, { useState } from "react";
import {FormControl, Button, Input} from "@mui/material";
import { FormGroup, InputLabel } from "@mui/material";

export default function AddWorkout () {
  return (
    <div>
      <h1>Add Workout</h1>
      <FormGroup>
        <FormControl>
          <InputLabel>Workout Type</InputLabel>
          <Input />
        </FormControl>

        <FormControl>
          <InputLabel>Sets</InputLabel>
          <Input />
        </FormControl>

        <FormControl>
          <InputLabel>Reps</InputLabel>
          <Input />
        </FormControl>
      </FormGroup>

      <FormControl>
        <InputLabel>Weight</InputLabel>
        <Input />
      </FormControl>

      <Button variant="contained" className="workout">
        Log Workout
      </Button>
    </div>
  );
};
