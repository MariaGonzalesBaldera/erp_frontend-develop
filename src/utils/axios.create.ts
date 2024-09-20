import axios from "axios";

const instance = axios.create({
	baseURL: import.meta.env.VITE_BACKEND_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

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
  
export { instance as axios };