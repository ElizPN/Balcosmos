import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";

function Listen() {
  return (
    <Box
      textAlign='center'
      sx={{ backgroundColor: "#000000cf", padding: "40px" }}
    >
      <Typography variant='h5' mb={3}>
        LISTEN
      </Typography>
      <Grid
        container
        spacing={2}
        alignItems='center'
        direction='row'
        id='listen'
      >
        <Grid item xs={4}>
          <iframe
            title='YouTube'
            width='100%'
            height='450px'
            src='https://www.youtube.com/embed/LT910zKihSQ'
          ></iframe>
        </Grid>

        <Grid item xs={4}>
          <iframe
            title='Soundcloud'
            width='100%'
            height='450px'
            src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1548380725&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
          ></iframe>
        </Grid>
        <Grid item xs={4}>
          <iframe
            title='Spotify'
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
