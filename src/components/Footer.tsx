import * as React from "react";
import Box from "@mui/material/Box";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import Paper from "@mui/material/Paper";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
  return (
    <Box sx={{ pb: 7 }}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          <FacebookIcon></FacebookIcon>
          <BottomNavigationAction label='Recents' icon={<RestoreIcon />} />
          <BottomNavigationAction label='Favorites' icon={<FavoriteIcon />} />
          <BottomNavigationAction label='Archive' icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
