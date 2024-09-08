import React, { FC, ReactNode, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import PeopleAlt from "@mui/material/Button";

import themeNew, { useAppTheme } from "../../utils/theme";
import { ListItemButton, ListItemIcon, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import {
  AssignmentOutlined,
  CheckBoxOutlined,
  DriveEtaOutlined,
  EngineeringOutlined,
  HomeOutlined,
  LibraryBooksOutlined,
  LocationOnOutlined,
  PeopleAltOutlined,
} from "@mui/icons-material";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,

  backgroundColor: "#d9d9fb",
  minHeight: "100vh",
  padding: theme.spacing(2.5),
  marginTop: "80px",
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  height: "82px",
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#fff",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

type LayoutProps = {
  children: ReactNode;
};
const ICONS = [
  <HomeOutlined />,
  <DriveEtaOutlined />,
  <AssignmentOutlined />,
  <EngineeringOutlined />,
  <CheckBoxOutlined />,
  <LocalGasStationOutlinedIcon />,
  <LocationOnOutlined />,
  <LibraryBooksOutlined />,
  <PeopleAltOutlined />,
];
const LINKS = [
  "/dashboard",
  "/machinery-list",
  "/documents",
  "/maintenance",
  "/inspections",
  "/fuel-register",
  "/gps-tracking",
  "/accounting",
  "/human-resources",
];
const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  const theme = useAppTheme();
  const [open, setOpen] = useState(true);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const [selectedLink, setSelectedLink] = useState(location.pathname);

  const isTabletOrMobile = useMediaQuery(themeNew.breakpoints.down("md"));

  React.useEffect(() => {
    setOpen(!isTabletOrMobile);
  }, [isTabletOrMobile]);
  return (
    <>
      <Box
        sx={{ display: "flex", backgroundColor: "white" }}
        data-testid="layout"
      >
        <CssBaseline />

        <AppBar position="fixed" open={open} className="flex">
          <Toolbar className="flex-1 gap-4">
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              data-testid="drawer-button"
              onClick={() => (open ? handleDrawerClose() : handleDrawerOpen())}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
          <Box
            sx={{
              marginLeft: "auto",
              alignItems: "center",
              display: "flex",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
          >
            <Tooltip title="Notificaciones">
              <IconButton size="large">
                <NotificationsNoneOutlinedIcon className="text-icon-primary" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Configuraciones">
              <Button
                size="small"
                onClick={handleOpenUserMenu}
                sx={{
                  textTransform: "none",
                  width: "180px",
                  justifyContent: "space-between",
                }}
                data-testid="user-button"
              >
                <div className="flex items-start w-full p-3">
                  <div className="flex flex-col pr-6 flex-1 justify-start items-end">
                    <span className="text-base text-primary font-bold">
                      {"Luis Perez"}
                    </span>
                    <span className="text-xs text-secondary">{"Admin"}</span>
                  </div>
                  <KeyboardArrowDownIcon className="text-dark" />
                </div>
              </Button>
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
              data-testid="user-menu"
            >
              <MenuItem
                sx={{ justifyContent: "end" }}
                key={0}
                onClick={() => {
                  location.replace("/help-and-support");
                }}
                data-testid="menu-item"
              >
                <Typography textAlign="center">Ayuda</Typography>
              </MenuItem>
              <MenuItem
                key={1}
                onClick={() => console.log("back")}
                data-testid="menu-item-logout"
              >
                <Typography textAlign="center">Cerrar Sessión</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              flexDirection: "column",
              backgroundColor: themeNew.palette.primary.main,
              height: "100vh",
              gap: "1rem",
              overflow: "hidden",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
          data-testid="drawer"
        >
          <div className="flex justify-center w-80 h-10"></div>
          {/* TODO: Read the route param to set active or open item on menu */}
          <List className="px-2.5">
            {[
              "Inicio",
              "Maquinarias",
              "Documentos",
              "Mantenimiento",
              "Inspecciones",
              "Registro de combustible",
              "Seguimiento GPS",
              "Contabilidad",
              "RRHH",
            ].map((text, index) => (
              <Link
                key={LINKS[index] + "_key"}
                to={LINKS[index]}
                style={{ textDecoration: "none" }}
                onClick={() => setSelectedLink(LINKS[index])}
              >
                <ListItem
                  key={LINKS[index] + "_item"}
                  disablePadding
                  sx={{
                    backgroundColor:
                      selectedLink === LINKS[index]
                        ? themeNew.palette.secondary.main
                        : themeNew.palette.primary.main,
                    color:
                      selectedLink === LINKS[index]
                        ? themeNew.palette.secondary.main
                        : themeNew.palette.primary.main,
                  }}
                >
                  <ListItemButton>
                    <ListItemIcon
                      sx={{
                        minWidth: "40px",
                        color:
                          selectedLink === LINKS[index]
                            ? themeNew.palette.primary.main
                            : themeNew.palette.secondary.main,
                      }}
                    >
                      {ICONS[index]}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{
                        color:
                          selectedLink === LINKS[index]
                            ? themeNew.palette.primary.main
                            : themeNew.palette.secondary.main,
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
        <Main open={open}>{children}</Main>
      </Box>
    </>
  );
};

export default Layout;
