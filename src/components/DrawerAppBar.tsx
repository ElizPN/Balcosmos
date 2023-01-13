import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LogoBalcosmos from "../images/logo-balcosmos.png";
import SocialLinks from "./SocialLinks";
import { Grid, styled } from "@mui/material";

const StyledBoxContainer = styled(Box)(() => ({
  alignItems: "justify",
}));

const StyledToolbar = styled(Toolbar)(() => ({
  backgroundColor: "black",
  height: 100,
}));

const StyledIconButton = styled(IconButton)(() => ({
  marginRight: 2,
}));

const StyledBoxLogo = styled(Box)(() => ({
  height: 140,
  paddingTop: 20,
})) as typeof Box;

const StyledButton = styled(Button)(() => ({
  color: "white",
  fontSize: 20,
}));

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  { name: "Releases", link: "#releases" },
  { name: "Biography", link: "#biography" },
  { name: "Listen", link: "#listen" },
  { name: "Contact", link: "#contact" },
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton href={item.link} sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <StyledBoxContainer>
      <CssBaseline />
      <AppBar component='nav'>
        <StyledToolbar>
          <StyledIconButton
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </StyledIconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <a href='./'>
              <StyledBoxLogo
                component='img'
                alt='LogoBalcosmos'
                src={LogoBalcosmos}
              />
            </a>
          </Typography>

          <Grid
            container
            direction='column'
            alignItems='center'
            justifyContent='center'
            paddingBottom={2}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <Grid item xs={12}>
              <a href='./'>
                <StyledBoxLogo
                  component='img'
                  alt='LogoBalcosmos'
                  src={LogoBalcosmos}
                />
              </a>
            </Grid>
          </Grid>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <StyledButton key={item.name} href={item.link}>
                {item.name}
              </StyledButton>
            ))}
          </Box>
          <Typography
            component='main'
            sx={{ flexGrow: 1, p: 8, display: { xs: "none", sm: "block" } }}
          ></Typography>
        </StyledToolbar>
        <SocialLinks />
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          // ModalProps={{
          //   keepMounted: true,
          // }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </StyledBoxContainer>
  );
}
