import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { Icon } from "@iconify/react";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";

const StyledPaper = styled (Paper) (() => ({
  bottom: 100,
  left: 0,
  right: 0,
  fontSize: 50,
}));

const StyledBottomNavigationAction = styled(BottomNavigationAction)(() => ({
  width: 60,
  height: 60,
})) as typeof BottomNavigationAction;

export default function Footer() {
  return (
    <StyledPaper elevation={3}>
      <BottomNavigation>
        <StyledBottomNavigationAction
          href='https://www.facebook.com/Balcosmos'
          target='_blank'
          label='Facebook'
          icon={<Icon icon='ci:facebook' />}
        />
        <StyledBottomNavigationAction
          href='https://www.youtube.com/@balcosmos'
          target='_blank'
          label='Youtube'
          icon={<Icon icon='icomoon-free:youtube' />}
        />
        <StyledBottomNavigationAction
          href='https://soundcloud.com/balcosmos'
          target='_blank'
          label='Soundcloud'
          icon={<Icon icon='mdi:soundcloud' />}
        />
        <StyledBottomNavigationAction
          href='https://open.spotify.com/artist/5wiOTsRu9iNdLAaQL2Oea3'
          target='_blank'
          label='Spotify'
          icon={<Icon icon='fa6-brands:spotify' />}
        />
        <StyledBottomNavigationAction
          href='https://balcosmos.bandcamp.com/'
          target='_blank'
          label='Bandcamp'
          icon={<Icon icon='tabler:brand-bandcamp' />}
        />
      </BottomNavigation>
    </StyledPaper>
  );
}
