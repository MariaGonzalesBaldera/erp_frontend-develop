import React, { FC, ReactNode, useEffect, useState } from "react";
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
<<<<<<< HEAD
<<<<<<< HEAD
import PeopleAlt from "@mui/material/Button";

import themeNew, { useAppTheme } from "../../utils/theme";
import { ListItemButton, ListItemIcon, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import {
  AssignmentOutlined,
=======
=======
>>>>>>> feature/addAuthProcess

import themeNew, { useAppTheme } from "../../utils/theme";
import { ListItemButton, ListItemIcon, useMediaQuery } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import {
  AssignmentOutlined,
  BorderColorOutlined,
<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
  CheckBoxOutlined,
  DriveEtaOutlined,
  EngineeringOutlined,
  HomeOutlined,
  LibraryBooksOutlined,
  LocationOnOutlined,
  PeopleAltOutlined,
} from "@mui/icons-material";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { capitalizer } from "../../utils/capitalize";
import InfoModal from "../../components/InfoModal";
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
import { capitalizer } from "../../utils/capitalize";
import InfoModal from "../../components/InfoModal";
>>>>>>> feature/addAuthProcess
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
<<<<<<< HEAD
<<<<<<< HEAD
  <PeopleAltOutlined />,
=======
  <BorderColorOutlined />,
  <PeopleAltOutlined />
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
  <BorderColorOutlined />,
  <PeopleAltOutlined />
>>>>>>> feature/addAuthProcess
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
  "/income",
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
  "/income",
>>>>>>> feature/addAuthProcess
  "/human-resources",
];
const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  
  ///validacion de uusers
  const [username, setUsername] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

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

  const handleLogout = () => {
    localStorage.removeItem("authData");

    navigate("/login");
  };
  const menuItems = [
    { text: "Inicio", link: LINKS[0], icon: ICONS[0] },
    { text: "Maquinarias", link: LINKS[1], icon: ICONS[1] },
    { text: "Documentos", link: LINKS[2], icon: ICONS[2] },
    { text: "Mantenimiento", link: LINKS[3], icon: ICONS[3] },
    { text: "Inspecciones", link: LINKS[4], icon: ICONS[4] },
    { text: "Registro de combustible", link: LINKS[5], icon: ICONS[5] },
    { text: "Seguimiento GPS", link: LINKS[6], icon: ICONS[6] },
    { text: "Contabilidad", link: LINKS[7], icon: ICONS[7] },
    { text: "Ingresos", link: LINKS[8], icon: ICONS[8] },
    { text: "RRHH", link: LINKS[9], icon: ICONS[9] },
  ];
  React.useEffect(() => {
    setOpen(!isTabletOrMobile);
  }, [isTabletOrMobile]);

  React.useEffect(() => {
    const authData = localStorage.getItem("authData");
    
    if (authData) {
      const parsedData = JSON.parse(authData);
      setUsername(parsedData.username);
      setRole(parsedData.role);
    } else {
      navigate("/login");
    }

    setOpen(!isTabletOrMobile);
  }, [isTabletOrMobile, navigate]);

  const filteredItems =
    role === "ADMINISTRATOR"
      ? menuItems
      : menuItems.filter(
          (item) => item.text !== "RRHH" && item.text !== "Contabilidad"
        );

  //modal ayuda
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
                      {capitalizer(username + "")}
                    </span>
                    <span className="text-xs text-secondary">
                      {role == "USER" ? "Usuario" : "Admin"}
                    </span>
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
              {role === "ADMINISTRATOR" ? (
                <MenuItem
                  sx={{ justifyContent: "end" }}
                  key={0}
                  onClick={() => {
                    location.replace("/user-management");
                  }}
                  data-testid="menu-item"
                >
                  <Typography textAlign="center">Gestión de Usuario</Typography>
                </MenuItem>
              ) : (
                <MenuItem
                  sx={{ justifyContent: "end" }}
                  key={0}
                  onClick={handleOpenModal}
                  data-testid="menu-item"
                >
                  <Typography textAlign="center">Ayuda</Typography>
                </MenuItem>
              )}

              <MenuItem
                sx={{ justifyContent: "end" }}
<<<<<<< HEAD
<<<<<<< HEAD
                key={0}
                onClick={() => {
                  location.replace("/help-and-support");
                }}
                data-testid="menu-item"
              >
                <Typography textAlign="center">Ayuda</Typography>
              </MenuItem>
              <MenuItem
=======
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
                key={1}
                onClick={handleLogout}
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
              gap: "0rem",
              overflow: "hidden",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
          data-testid="drawer"
        >
          <div className="flex justify-center w-80 h-0"></div>
          <List className="px-2.5">
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
            {filteredItems.map((item, index) => (
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
            {filteredItems.map((item, index) => (
>>>>>>> feature/addAuthProcess
              <Link
                key={item.link + "_key"}
                to={item.link}
                style={{ textDecoration: "none" }}
                onClick={() => setSelectedLink(item.link)}
              >
                <ListItem
                  key={item.link + "_item"}
                  disablePadding
                  sx={{
                    backgroundColor:
<<<<<<< HEAD
<<<<<<< HEAD
                      selectedLink === LINKS[index]
                        ? themeNew.palette.secondary.main
                        : themeNew.palette.primary.main,
                    color:
                      selectedLink === LINKS[index]
=======
=======
>>>>>>> feature/addAuthProcess
                      selectedLink === item.link
                        ? themeNew.palette.secondary.main
                        : themeNew.palette.primary.main,
                    color:
                      selectedLink === item.link
<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
                        ? themeNew.palette.secondary.main
                        : themeNew.palette.primary.main,
                  }}
                >
                  <ListItemButton>
                    <ListItemIcon
                      sx={{
                        minWidth: "40px",
                        color:
<<<<<<< HEAD
<<<<<<< HEAD
                          selectedLink === LINKS[index]
=======
                          selectedLink === item.link
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
                          selectedLink === item.link
>>>>>>> feature/addAuthProcess
                            ? themeNew.palette.primary.main
                            : themeNew.palette.secondary.main,
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{
                        color:
<<<<<<< HEAD
<<<<<<< HEAD
                          selectedLink === LINKS[index]
=======
                          selectedLink === item.link
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
                          selectedLink === item.link
>>>>>>> feature/addAuthProcess
                            ? themeNew.palette.primary.main
                            : themeNew.palette.secondary.main,
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
          <InfoModal
            open={isModalOpen}
            onClose={handleCloseModal}
            userName={username || ""} // Puedes pasar el nombre del usuario dinámicamente
          />
        </Drawer>
        <Main open={open}>{children}</Main>
      </Box>
    </>
  );
};

export default Layout;
