import Grid from "@mui/material/Grid";
import React from "react";
import ReactPlayer from "react-player";

function Home() {
  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      direction='column'
    >
      <Grid>
        <ReactPlayer url='https://www.youtube.com/watch?v=LT910zKihSQ' />
      </Grid>

      <Grid>
        <ReactPlayer url='https://www.youtube.com/watch?v=UHlkTu_xzd0' />
      </Grid>
      <Grid>
        <ReactPlayer url='https://www.youtube.com/watch?v=hO2LubLjmWw' />
      </Grid>
    </Grid>
  );
}

export default Home;
