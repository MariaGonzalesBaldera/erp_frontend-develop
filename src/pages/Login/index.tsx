import {
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Typography,
  Link,
  IconButton,
  Box,
  InputAdornment,
  Snackbar,
  Alert,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";
import themeNew from "../../utils/theme";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/auth.service";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { authentication } = authService;
  const [showPassword, setShowPassword] = useState(false);

  const [usernameValue, setUsernameValue] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = { username: usernameValue, password };

      const response = await authentication(data);

      const { accessToken, user } = response;
      const { username, role } = user;

      localStorage.removeItem("accessToken");
      localStorage.removeItem("username");
      localStorage.removeItem("role");


      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("username", user.username);
      localStorage.setItem("role", user.role);
      navigate("/dashboard", { state: { username, role } });

    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message ||
        "Error en el login. Verifica tus credenciales.";
      setError(errorMessage); // Almacenar el mensaje de error
      setOpenSnackbar(true);
    }
  };
  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };
  return (
    <Box
      className="flex min-h-screen items-center justify-center bg-background px-4"
      sx={{
        background: "linear-gradient(50deg,#9cadff, #1e1b4b, #1e1b4b,#9cadff)",
      }} //        backgroundColor: "#1e1b4b"
    >
      <Card className="w-full max-w-md p-10">
        <CardContent>
          <div className="text-center space-y-2">
            <Typography variant="h5" component="div" className="font-bold">
              INICIAR SESIÓN
            </Typography>
            <Typography color="textSecondary">
              Ingresa tus credenciales para acceder a tu cuenta
            </Typography>
          </div>
          <div className="space-y-4 mt-4">
            <TextField
              fullWidth
              label="Usuario"
              variant="outlined"
              placeholder="Ingresa tu usuario"
              value={usernameValue}
              onChange={(e) => setUsernameValue(e.target.value)}
            />
            <TextField
              fullWidth
              label="Contraseña"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            <Link href="#" underline="hover" className="text-sm">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </CardContent>
        <CardActions className="flex flex-col space-y-2 px-4">
          <Button
            component="form"
            variant="contained"
            sx={{
              backgroundColor: "#1e1b4b",
              "&:hover": {
                backgroundColor: "white",
                color: themeNew.palette.primary.main,
                border: `1px ${themeNew.palette.primary.main} solid`,
              },
            }}
            fullWidth
            onClick={handleLogin}
          >
            Iniciar Sesión
          </Button>
          <Typography
            variant="body2"
            color="textSecondary"
            className="text-center"
          >
            ¿No tienes una cuenta?{" "}
            <Link href="#" underline="hover">
              Crear Cuenta
            </Link>
          </Typography>
        </CardActions>
      </Card>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          sx={{ width: "100%" }}
        >
          {error} {/* Mostrar el mensaje de error */}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Login;
