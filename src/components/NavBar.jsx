import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
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
import { ShoppingCartOutlined } from "@mui/icons-material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Avatar, Badge } from "@mui/material";

const drawerWidth = 240;
const navItems = ["Home", "About", "Shop"];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h5" sx={{ my: 2 }}>
        WonderStore
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <AppBar
        component="nav"
        elevation={0}
        sx={{
          paddingLeft: {
            md: 2,
            lg: 20,
          },
          paddingRight: { md: 2, lg: 20 },
        }}
      >
        <Toolbar>
          <IconButton
            onClick={handleDrawerToggle}
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{
              mr: 2,
              display: { sm: "none" },
              flexGrow: { xs: 1 },
              borderRadius: 0,
              justifyContent: "flex-start",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontSize: {
                md: 30,
                sm: 20,
              },
            }}
          >
            WonderStore
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              flexGrow: 1,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#fff",
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Badge
            sx={{ marginRight: 2 }}
            overlap="circular"
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            badgeContent={
              <Avatar sx={{ bgcolor: "inherit" }}>
                <Typography>0</Typography>
              </Avatar>
            }
          >
            <Avatar sx={{ width: 30, height: 30 }}>
              <IconButton>
                <FavoriteBorderOutlinedIcon sx={{ color: "white" }} />
              </IconButton>
            </Avatar>
          </Badge>
          <Badge
            sx={{ marginRight: 2 }}
            overlap="circular"
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            badgeContent={
              <Avatar sx={{ bgcolor: "inherit" }}>
                <Typography>0</Typography>
              </Avatar>
            }
          >
            <Avatar sx={{ width: 30, height: 30 }}>
              <IconButton
                sx={{
                  borderRadius: 0,
                }}
              >
                <ShoppingCartOutlined sx={{ color: "white" }} />
              </IconButton>
            </Avatar>
          </Badge>
          <Button variant="contained" color="secondary">
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
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
    </Box>
  );
}

export default NavBar;
