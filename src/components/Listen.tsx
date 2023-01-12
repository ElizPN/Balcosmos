import { styled, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";

const StyledBoxContainer = styled(Box)(() => ({
  backgroundColor: "#000000cf",
  padding: 40,
  marginBottom: 100,
  textAlign: "center",
}));

const StyledTypography = styled(Typography)(() => ({
  fontWeight: "bold",
  marginBottom: 30,
}));

const StyledGridContainer = styled(Grid)(() => ({
  scrollMarginTop: "300px",
  alignItems: "center",
}));

function Listen() {
  return (
    <StyledBoxContainer>
      <StyledTypography variant='h5'>LISTEN</StyledTypography>
      <StyledGridContainer container  spacing={2} id='listen'>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <iframe
            title='YouTube'
            width='100%'
            height='450px'
            src='https://www.youtube.com/embed/LT910zKihSQ'
          ></iframe>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4}>
          <iframe
            title='Soundcloud'
            width='100%'
            height='450px'
            src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1548380725&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
          ></iframe>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <iframe
            title='Spotify'
            src='https://open.spotify.com/embed/artist/5wiOTsRu9iNdLAaQL2Oea3?utm_source=generator&theme=0'
            width='100%'
            height='450px'
          ></iframe>
        </Grid>
      </StyledGridContainer>
    </StyledBoxContainer>
  );
}

export default Listen;
