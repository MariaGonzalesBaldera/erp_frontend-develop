import axios from "axios";

const instance = axios.create({
<<<<<<< HEAD
<<<<<<< HEAD
	baseURL: import.meta.env.VITE_BACKEND_URL, //`
=======
	baseURL: import.meta.env.VITE_BACKEND_URL,
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
	baseURL: import.meta.env.VITE_BACKEND_URL,
>>>>>>> feature/addAuthProcess
	headers: {
		"Content-Type": "application/json",
	},
});

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> feature/addAuthProcess
let isRefreshing = false;
let refreshSubscribers = [];

const onRrefreshed = (newToken) => {
	refreshSubscribers.forEach((callback) => callback(newToken));
	refreshSubscribers = [];
};

const addRefreshSubscriber = (callback) => {
	refreshSubscribers.push(callback);
};

instance.interceptors.request.use(
	(config) => {
		const authData = JSON.parse(localStorage.getItem("authData") || '{}');
		const token = authData.accessToken;

		if (token) {
			config.headers["Authorization"] = `Bearer ${token}`;
		}
		if (config.data instanceof FormData) {
			config.headers["Content-Type"] = "multipart/form-data";
		} else {
			config.headers["Content-Type"] = "application/json";
		}
		return config;
	},
	(error) => Promise.reject(error)
);

instance.interceptors.response.use(
	(response) => response,
	async (error) => {
		const { config, response } = error;
		const originalRequest = config;

		if (response?.status === 401 && response?.data?.message === "El token ha expirado") {
			if (!isRefreshing) {
				isRefreshing = true;
				try {
					// Obtener refreshToken desde el objeto authData
					const authData = JSON.parse(localStorage.getItem("authData") || '{}');
					const refreshToken = authData.refreshToken;

					const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/refresh`, {
						refreshToken,
					});

					const { accessToken } = data;

					// Actualizar el objeto authData con el nuevo accessToken
					const updatedAuthData = { ...authData, accessToken };
					localStorage.setItem("authData", JSON.stringify(updatedAuthData));
					isRefreshing = false;
					onRrefreshed(accessToken);
				} catch (refreshError) {
					localStorage.removeItem("authData");
					window.location.href = "/login";
					return Promise.reject(refreshError);
				}
			}

			return new Promise((resolve) => {
				addRefreshSubscriber((newToken) => {
					originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
					resolve(axios(originalRequest));
				});
			});
		}

		return Promise.reject(error);
	}
);

<<<<<<< HEAD
export { instance as axios };
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
export { instance as axios };
>>>>>>> feature/addAuthProcess
