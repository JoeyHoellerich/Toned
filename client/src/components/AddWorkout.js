import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import { FormGroup, InputLabel } from "@mui/material";

export const AddWorkout = () => {
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
