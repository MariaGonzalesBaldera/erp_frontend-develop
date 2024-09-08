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
import React, {useState} from "react";
import themeNew from "../../utils/theme";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/auth.service";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { authentication } = authService;
  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = { username, password };

      const response = await authentication(data);
      console.log("response: ",response)
      const { accessToken } = response;
      localStorage.removeItem("accessToken");

      localStorage.setItem("accessToken", accessToken);
      navigate("/dashboard");
    } catch (err: any) {
      setError("Error en el login. Verifica tus credenciales.");
    }
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
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />
            <TextField
              fullWidth
              label="Contraseña"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
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
          <Button component="form"
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
};

export default Login;
