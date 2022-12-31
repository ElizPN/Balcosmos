import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import ReactPlayer from "react-player";

function Listen() {
  return (
    <Box>
      <Grid
        container
        spacing={2}
        // justifyContent='center'
        // alignItems='center'
        // direction='column'
        id='listen'
      >
        <Grid item xs={4}>
          <ReactPlayer
            width='300px'
            height='450px'
            url='https://www.youtube.com/watch?v=LT910zKihSQ'
          />
        </Grid>

        <Grid item xs={4}>
          <ReactPlayer
            width='300px'
            height='450px'
            url='https://soundcloud.com/balcosmos'
          />
        </Grid>
        <Grid item xs={4}>
          <iframe
            title='Spoify'
            src='https://open.spotify.com/embed/artist/5wiOTsRu9iNdLAaQL2Oea3?utm_source=generator&theme=0'
            width='100%'
            height='450px'
          ></iframe>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Listen;
