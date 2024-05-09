import React from 'react'
import './Healthcare.css'
import { Grid, Typography } from "@material-ui/core";

const Robot = () => {
  return (
    <div className="robot-container">
      <div className="robot">
        <div className="face"></div>
        <div className="head"></div>
        <div className="body"></div>
        <div className="left-arm"></div>
        <div className="right-arm"></div>
        <div className="right-eye"></div>
        <div className="left-eye"></div>
      </div>
    </div>
  );
};

const App = () => {
  return (
      <div className="container">
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item>
            <Robot />
          </Grid>
          <Grid item>
          <Typography variant="h5"><a href="https://elderly-health.netlify.app">Health First</a></Typography>
          </Grid>
        </Grid>
      </div>
  );
}

export default App;
