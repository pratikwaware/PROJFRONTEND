import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { isAutheticated, signout } from "../../auth/helper";
import { SETTINGS, ADMINMENU, USERMENU } from "../../constants";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import { useHistory } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";

const drawerWidth = 300;

const ResponsiveDrawer = ({ children }) => {
  //   const { window } = props;
  let history = useHistory();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const drawer = (
    <div>
      <Toolbar disableGutters />
      <Divider />
      <List>
        {isAutheticated() &&
          isAutheticated().user.role === 1 &&
          ADMINMENU.map((menu) => (
            <ListItem button key={menu.title}>
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText onClick={() => history.push(`${menu.link}`)}>
                {menu.title}
              </ListItemText>
            </ListItem>
          ))}
        {isAutheticated() &&
          isAutheticated().user.role === 0 &&
          USERMENU.map((menu) => (
            <ListItem button key={menu.title}>
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText onClick={() => history.push(`${menu.link}`)}>
                {menu.title}
              </ListItemText>
            </ListItem>
          ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        color="secondary"
      >
        <Toolbar disableGutters>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ ml: 2, cursor: "pointer" }}
            onClick={() => history.push("/")}
          >
            Ornate Trends
          </Typography>

          <Box sx={{ flexGrow: 1, display: "flex" }}> </Box>

          {isAutheticated() && (
            <Box sx={{ flexGrow: 0, mr: 3 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Pratik" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <>
                  {SETTINGS.map((setting) => (
                    <MenuItem
                      key={setting.title}
                      onClick={() => history.push(`${setting.link}`)}
                    >
                      <Typography textAlign="center">
                        {setting.title}
                      </Typography>
                    </MenuItem>
                  ))}
                  <MenuItem
                    key="logout"
                    onClick={() => {
                      signout(() => {
                        history.push("/login");
                      });
                    }}
                  >
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 6,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Box
          component="main"
          sx={{
            mb: 3,
            mt: 3,
          }}
        >
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<HomeIcon />}
            onClick={() => history.push("/admin/dashboard")}
          >
            Home
          </Button>
        </Box>
        {children}
      </Box>
    </Box>
  );
};

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
  children: PropTypes.element,
};

export default ResponsiveDrawer;
