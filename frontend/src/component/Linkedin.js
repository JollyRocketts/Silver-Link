import { useState, useEffect } from "react";
import {
  Button,
  Chip,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from "@material-ui/icons/FilterList";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  body: {
    height: "inherit",
    padding: "30px",
    minHeight: "93vh",
  },
  jobTileOuter: {
    padding: "20px",
    margin: "20px 0",
    width: "100%",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    transition: "0.3s",
    "&:hover": {
      boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
    },
  },
  filterButton: {
    marginBottom: "20px",
  },
}));

const Linkedin = () => {
  const classes = useStyles();
  const [jobs, setJobs] = useState([]);
  const [searchOptions, setSearchOptions] = useState({
    query: "",
  });

  const fetchJobs = () => {
    axios.get("jobs.json")
      .then(response => {
        setJobs(response.data);
      })
      .catch(error => {
        console.error("Error fetching jobs:", error);
      });
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const JobTile = ({ job }) => {
    const deadline = new Date(job.postedDate).toLocaleDateString();
    return (
      <Paper className={classes.jobTileOuter} elevation={3}>
        <Grid container>
          <Grid container item xs={9} spacing={1} direction="column">
            <Grid item>
              <Typography variant="h5">{job.title}</Typography>
            </Grid>
            <Grid item>Company: {job.company}</Grid>
            <Grid item>Location: {job.location}</Grid>
            <Grid item>Posted Date: {deadline}</Grid>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => {
                // Handle Apply button click
              }}
            >
              Apply
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  };

  return (
    <Grid container item direction="column" alignItems="center" className={classes.body}>
      <Grid item container direction="column" justify="center" alignItems="center">
        <Typography variant="h2">Linkedin Jobs</Typography>
        <TextField
          label="Search Jobs"
          value={searchOptions.query}
          onChange={(event) =>
            setSearchOptions({
              ...searchOptions,
              query: event.target.value,
            })
          }
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton onClick={fetchJobs}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          style={{ width: "500px" }}
          variant="outlined"
        />
        <IconButton onClick={fetchJobs} className={classes.filterButton}>
          <FilterListIcon />
        </IconButton>
      </Grid>

      <Grid container item xs direction="column" alignItems="stretch" justify="center">
        {jobs.length > 0 ? (
          jobs.map((job) => <JobTile key={job.id} job={job} />)
        ) : (
          <Typography variant="h5" style={{ textAlign: "center" }}>
            No jobs found
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default Linkedin;
