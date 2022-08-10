import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
//import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
//import FormControlLabel from "@material-ui/core/FormControlLabel";
//import Checkbox from "@material-ui/core/Checkbox";

export const Login = () => {
  return (
    <Grid>
      <Paper elevation={10}>
        <Grid align="center">
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button type="submit" color="primary" variant="contained" fullWidth>
          Sign in
        </Button>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ?<Link href="#">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};
