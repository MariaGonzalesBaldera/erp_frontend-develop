import axios from "axios";

const instance = axios.create({
	baseURL: import.meta.env.VITE_BACKEND_URL, //`
	headers: {
		"Content-Type": "application/json",
	},
});


// Interceptor para agregar el token a cada solicitud
instance.interceptors.request.use(
	(config) => {
	  const token = localStorage.getItem("accessToken");
	  if (token) {
		config.headers["Authorization"] = `Bearer ${token}`;
	  }
	  return config;
	},
	(error) => {
	  return Promise.reject(error);
	}
  );
  
  // Manejar errores de respuesta
  instance.interceptors.response.use(
	(response) => response,
	(error) => {
	  const { status, data } = error.response || {};
  
	  if (status === 401 && data?.message === "El token ha expirado") {
		// Aquí podrías redirigir al login o refrescar el token
		window.location.href = "/login";
	  }
  
	  return Promise.reject(error);
	}
  );
  
  export { instance as axios };