import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  // Obtener el objeto authData de localStorage
  const authData = JSON.parse(localStorage.getItem("authData") || '{}');

  // Verificar si el accessToken existe en authData
  if (!authData?.accessToken) {
    // Redirigir al login si no hay token
    return <Navigate to="/login" />;
  }

  // Mostrar el contenido protegido si el token existe
  return children;
};


export default ProtectedRoute;
