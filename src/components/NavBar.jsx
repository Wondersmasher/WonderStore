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
import {
  Person2Outlined,
  PersonOffOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Avatar, Badge, Container, useTheme } from "@mui/material";
import { green, red } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import { addUser, logoutUser } from "../utilities/CartSlice";
// import { addUser, logoutUser } from "../utilities/CartSlice";
const theme = createTheme({
  typography: {
    fontFamily: "Pacifico",
    fontWeightBold: 700,
    fontWeightLight: 400,
    fontWeightMedium: 500,
    fontWeightRegular: 600,
  },
});
const drawerWidth = 240;
const navItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about-us" },
  { title: "Shop", path: "/shop" },
];

function NavBar(props) {
  const { loginWithRedirect, logout, user, isLoading, isAuthenticated } =
    useAuth0();
  const handleWhichButtonClick = () => {
    if (user) {
      logout();
    }
    if (!user) {
      loginWithRedirect();
    }
  };
  // console.log(isAuthenticated);
  // const [myUser, setMyUser] = useState(null);
  // useEffect(() => {
  //   setMyUser(user);
  // }, [isAuthenticated]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      <ThemeProvider theme={theme}>
        <Typography variant="h5" sx={{ my: 2, color: "white" }}>
          WonderStore
        </Typography>
      </ThemeProvider>
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
    <>
      <AppBar
        component="nav"
        position="sticky"
        elevation={0}
        sx={{
          background: "#fff",
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
            <ThemeProvider theme={theme}>
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
                Wonder
                <Typography variant="span" sx={{ color: "#C5A491" }}>
                  Store
                </Typography>
              </Typography>
            </ThemeProvider>
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
              {/* <Typography variant="body2">Cart</Typography> */}
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
            <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
              {/* <Typography variant="body2">
                {user ? "LogOut" : "Login"}
              </Typography> */}
              <Badge
                sx={{ marginRight: 2 }}
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                badgeContent={
                  <Avatar
                    sx={{
                      bgcolor: user ? green[500] : red[500],
                      width: 15,
                      height: 15,
                    }}
                  >
                    <Typography sx={{ color: user ? green[500] : red[500] }}>
                      .
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
                  {!user && (
                    <IconButton
                      sx={{
                        borderRadius: 0,
                      }}
                      onClick={() => {
                        loginWithRedirect();
                        dispatch(addUser());
                      }}
                    >
                      <PersonOffOutlined sx={{ color: "black" }} />
                    </IconButton>
                  )}
                  {user && (
                    <IconButton
                      sx={{
                        borderRadius: 0,
                      }}
                      onClick={() => {
                        logout({
                          logoutParams: { returnTo: window?.location.origin },
                        });
                        logoutUser()
                      }}
                    >
                      <Person2Outlined sx={{ color: "black" }} />
                    </IconButton>
                  )}
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
    </>
  );
}

export default NavBar;
