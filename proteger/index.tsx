import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { axios } from "../src/utils/axios.create";


const useAuthToken = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem("authData") || '{}');
    const accessToken = authData?.accessToken;

    if (!accessToken) {
      setIsAuthenticated(false);
      setIsLoading(false);
      return;
    }

    const decodedToken = jwtDecode(accessToken) as { exp: number }; // Decodifica el token JWT para obtener su fecha de expiración
    const currentTime = Date.now() / 1000;

    // Si el token está por expirar (por ejemplo, en los próximos 5 minutos), refrescarlo
    if (decodedToken.exp - currentTime < 5 * 60) {
      axios
        .post("/auth/refresh", { refreshToken: authData.refreshToken })
        .then(({ data }) => {
          const updatedAuthData = { ...authData, accessToken: data.accessToken };
          localStorage.setItem("authData", JSON.stringify(updatedAuthData));
          setIsAuthenticated(true);
        })
        .catch(() => {
          localStorage.removeItem("authData");
          setIsAuthenticated(false);
        })
        .finally(() => setIsLoading(false));
    } else {
      setIsAuthenticated(true);
      setIsLoading(false);
    }
  }, []);

  return { isAuthenticated, isLoading };
};

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, isLoading } = useAuthToken();

  if (isLoading) {
    // Puedes mostrar un loader o un indicador de carga mientras se verifica el token
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;