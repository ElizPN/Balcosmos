import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function About() {
  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      marginTop={50}
      marginBottom={60}
      id='biography'
    >
      <Grid item sx={{ backgroundColor: "#000000cf", padding: "40px" }}>
        <Typography textAlign='center' variant='h5' mb={3}>
          BIOGRAPHY
        </Typography>
        <Typography
          variant='body2'
          textAlign={"justify"}
          maxWidth={900}
          width='100%'
        >
          <Typography>
            Originating from Ukraine, Alexey Romanov (38) is behind the solo
            project “Balcosmos”. Influenced from a vast spectre of psytrance
            sub-genres, including Goa, Forest, Fullon and Progressive, Alexey’s
            initial Dj career evolved into the birth of his own music
            productions under the project “Barbuix”. In 2017 he released his
            debut album “Secret Ingredient” on the Russian based label Sound
            Kitchen records and has since played on multiple parties and events
            in countries such as Ukraine, Russia and Sweden.
          </Typography>

          <Typography>
            In 2020 his developing skills and culmination of experiences, forged
            his newly formed project Balcosmos, under which he is set to
            reconnect the audience with a fresh music approach of pure
            psychedelic vibes, balancing cleverly in between the barriers of
            progressive, fullon and forest. Balcosmos music was played and
            appreciated across the world with recent releases on multiple known
            psytrance labels, like IONO records, SOL Music and GreenTree
            Records.
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  );
}
