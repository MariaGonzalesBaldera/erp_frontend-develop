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
import React from "react";
import ButtonDefault from "../../components/ButtonDefault";
import themeNew from "../../utils/theme";
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate(); 

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin = () => {
    // Aquí puedes agregar lógica adicional, como autenticación.
    // Redirige al dashboard.
    navigate("/dashboard");
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
            />
            <TextField
              fullWidth
              label="Contraseña"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              placeholder="Ingresa tu contraseña"
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
    </Box>
  );
}

export default Login;
