import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { Icon } from "@iconify/react";
import Link from "@mui/material/Link";

export default function Footer() {
  return (
    <Paper sx={{  bottom: 100, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation>
        <BottomNavigationAction
          href='https://www.facebook.com/Balcosmos'
          target='_blank'
          label='Facebook'
          icon={<Icon icon='ci:facebook' width='80' height='80' />}
        />
        <BottomNavigationAction
          href='https://www.youtube.com/@balcosmos'
          target='_blank'
          label='Youtube'
          icon={<Icon icon='icomoon-free:youtube' width='100' height='100' />}
        />
        <BottomNavigationAction
          href='https://soundcloud.com/balcosmos'
          target='_blank'
          label='Soundcloud'
          icon={<Icon icon='mdi:soundcloud' width='100' height='100' />}
        />
        <BottomNavigationAction
          href='https://open.spotify.com/artist/5wiOTsRu9iNdLAaQL2Oea3'
          target='_blank'
          label='Spotify'
          icon={<Icon icon='fa6-brands:spotify' width='100' height='100' />}
        />
        <BottomNavigationAction
          href='https://balcosmos.bandcamp.com/'
          target='_blank'
          label='Bandcamp'
          icon={<Icon icon='tabler:brand-bandcamp' width='100' height='100' />}
        />
      </BottomNavigation>
    </Paper>
  );
}
