import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { isAutheticated, signout } from "../../auth/helper";
import { withRouter } from "react-router-dom";
import { PAGES, CUSTOMERPAGES, ADMINPAGES, SETTINGS } from "../../constants";

const MenuBar = ({ history }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Ornate Trends
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {!isAutheticated() &&
                PAGES.map((page) => (
                  <MenuItem onClick={() => history.push(`${page.link}`)}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                ))}
              {isAutheticated() &&
                isAutheticated().user.role === 0 &&
                CUSTOMERPAGES.map((page) => (
                  <MenuItem onClick={() => history.push(`${page.link}`)}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                ))}
              {isAutheticated() &&
                isAutheticated().user.role === 1 &&
                ADMINPAGES.map((page) => (
                  <MenuItem onClick={() => history.push(`${page.link}`)}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Ornate Trends
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {!isAutheticated() &&
              PAGES.map((page) => (
                <Button
                  onClick={() => history.push(`${page.link}`)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.title}
                </Button>
              ))}
            {isAutheticated() &&
              isAutheticated().user.role === 0 &&
              CUSTOMERPAGES.map((page) => (
                <Button
                  onClick={() => history.push(`${page.link}`)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.title}
                </Button>
              ))}
            {isAutheticated() &&
              isAutheticated().user.role === 1 &&
              ADMINPAGES.map((page) => (
                <Button
                  onClick={() => history.push(`${page.link}`)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.title}
                </Button>
              ))}
          </Box>
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
      </Container>
    </AppBar>
  );
};
export default withRouter(MenuBar);
