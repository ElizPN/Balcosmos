import * as React from "react";
import Box from "@mui/material/Box";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import Paper from "@mui/material/Paper";
import { Icon } from "@iconify/react";
import { height } from "@mui/system";

export default function Footer() {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 100, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation>
        <BottomNavigationAction
          label='Facebook'
          icon={<Icon icon='ci:facebook' width='80' height='80' />}
        />
        <BottomNavigationAction
          label='Youtube'
          icon={<Icon icon='icomoon-free:youtube' width='60' height='60' />}
        />
        <BottomNavigationAction
          label='Soundcloud'
          icon={<Icon icon='mdi:soundcloud' width='80' height='80' />}
        />
        <BottomNavigationAction
          label='Spotify'
          icon={<Icon icon='fa6-brands:spotify' width='80' height='80' />}
        />
      </BottomNavigation>
    </Paper>
  );
}
