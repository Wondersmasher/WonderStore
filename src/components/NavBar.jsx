import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
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
import { Avatar, Badge, Container, useTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const drawerWidth = 240;
const navItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about-us" },
  { title: "Shop", path: "/shop" },
];

function NavBar(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const { cartItemsCount } = useSelector((store) => store.cart);

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
        {navItems.map((item, id) => (
          <ListItem key={id} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              disableRipple
              disableTouchRipple
            >
              <ListItemText
                primary={item.title}
                onClick={() => navigate(item.path)}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box>
      <AppBar
        component="nav"
        position="sticky"
        elevation={0}
        sx={{
          background: "#FFFFFF",
        }}
      >
        <Container maxWidth="lg" disableGutters>
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
              <MenuIcon color="primary" />
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
                color: "black",
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
              {navItems.map((item, id) => (
                <Button
                  key={id}
                  sx={{
                    color: "black",
                  }}
                  onClick={() => navigate(item.path)}
                  disableRipple
                  disableTouchRipple
                >
                  {item.title}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
              <Typography variant="body2">Cart</Typography>
              <Badge
                sx={{ marginRight: 2 }}
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                badgeContent={
                  <Avatar sx={{ bgcolor: red[500], width: 15, height: 15 }}>
                    <Typography sx={{ fontSize: 12 }}>
                      {cartItemsCount}
                    </Typography>
                  </Avatar>
                }
              >
                <Avatar
                  sx={{
                    width: 30,
                    height: 30,
                    backgroundColor: "inherit",
                  }}
                >
                  <IconButton
                    sx={{
                      borderRadius: 0,
                    }}
                    onClick={() => navigate("/cart")}
                  >
                    <ShoppingCartOutlined sx={{ color: "black" }} />
                  </IconButton>
                </Avatar>
              </Badge>
            </Box>
          </Toolbar>
        </Container>
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
              borderRadius: " 0 2rem 0 0 ",
              background: "#C5A491",
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
