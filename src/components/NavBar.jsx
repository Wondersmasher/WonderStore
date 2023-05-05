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
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Avatar, Badge, Container, styled, useTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCartCount } from "../utilities/CartSlice";
const drawerWidth = 240;
const navItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about-us" },
  { title: "Shop", path: "/shop" },
];

function NavBar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
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
        {navItems.map((item, id) => (
          <ListItem key={id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
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
  const AppBarBox = styled(Box)(({ theme }) => theme.mixins.toolbar);
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const { favouriteItemsCount, cartItemsCount } = useSelector(
    (store) => store.cart
  );
  console.log(cartItemsCount);
  return (
    <Box>
      <AppBar
        component="nav"
        position="sticky"
        elevation={0}
        sx={{
          // paddingLeft: {
          //   md: 2,
          //   lg: 20,
          // },
          // paddingRight: { md: 2, lg: 20 },
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
                >
                  {item.title}
                </Button>
              ))}
            </Box>
            <Badge
              sx={{ marginRight: 2 }}
              overlap="circular"
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              badgeContent={
                <Avatar sx={{ bgcolor: red[500], width: 15, height: 15 }}>
                  <Typography sx={{ fontSize: 12 }}>
                    {favouriteItemsCount}
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
                <IconButton>
                  <FavoriteBorderOutlinedIcon sx={{ color: "black" }} />
                </IconButton>
              </Avatar>
            </Badge>
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
                onClick={() => dispatch(addCartCount())}
              >
                <IconButton
                  sx={{
                    borderRadius: 0,
                  }}
                >
                  <ShoppingCartOutlined sx={{ color: "black" }} />
                </IconButton>
              </Avatar>
            </Badge>
            {/* <Button variant="contained" color="secondary">
            Sign In
          </Button> */}
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
