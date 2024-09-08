import axios from "axios";

const instance = axios.create({
	baseURL: import.meta.env.VITE_BACKEND_URL, //`
	headers: {
		"Content-Type": "application/json",
	},
});

instance.interceptors.response.use(
	(response) => {
	  // Retorna la respuesta si es exitosa
	  return response;
	},
	(error) => {
	  // Capturar el error de la respuesta
	  if (error.response) {
		const { status, data } = error.response;
  
		// Manejar token expirado
		if (status === 401 && data.message === "El token ha expirado") {
		  // Redirigir al login o pedir al usuario que vuelva a iniciar sesión
		  console.log("Token expirado. Redirigiendo al login...");
		  window.location.href = "/login"; // Redirige al login
		}
  
		// Manejar token inválido
		if (status === 401 && data.message === "Token JWT inválido") {
		  console.log("Token inválido. Redirigiendo al login...");
		  window.location.href = "/login"; // Redirige al login
		}
  
		// Puedes manejar otros errores personalizados
		if (status === 500) {
		  console.error("Error interno del servidor:", data.message);
		}
	  }
  
	  // Pasar el error para que las promesas `.catch()` lo manejen
	  return Promise.reject(error);
	}
  );
export { instance as axios };  
