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
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";
import themeNew from "../../utils/theme";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/auth.service";
import ReusableSnackbar from "../../components/ReusableSnackbar";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { authentication } = authService;
  const [showPassword, setShowPassword] = useState(false);

  const [usernameValue, setUsernameValue] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Resetear los errores
    setUsernameError("");
    setPasswordError("");

    // Validación de los campos
    if (!usernameValue) {
      setUsernameError("El usuario es obligatorio");
    }

    if (!password) {
      setPasswordError("La contraseña es obligatoria");
    }

    // Si hay algún error, no continuar con el login
    if (!usernameValue || !password) {
      return;
    }
    localStorage.removeItem("authData");
    try {
      const data = { username: usernameValue, password };
      const response = await authentication(data);

      const { accessToken, refreshToken, user } = response;
      const { username, role } = user;

      const authData = {
        accessToken,
        refreshToken,
        username,
        role,
      };
      localStorage.setItem("authData", JSON.stringify(authData));
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
              error={!!usernameError}
              helperText={usernameError}
            />
            <TextField
              fullWidth
              label="Contraseña"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!passwordError}
              helperText={passwordError} 
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
      <ReusableSnackbar
        severity={"error"}
        message={error}
        open={openSnackbar}
        onClose={handleCloseSnackbar}
      />
    </Box>
  );
};

export default Login;
