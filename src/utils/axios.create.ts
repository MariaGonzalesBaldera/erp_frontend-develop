import axios from "axios";

const instance = axios.create({
	baseURL: import.meta.env.VITE_BACKEND_URL, //`
	headers: {
		"Content-Type": "application/json",
	},
});

const setBaseURL = (url: string): void => {
	instance.defaults.baseURL = url;
};

// const setToken = (token: string): void => {
// 	instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// };

export { instance as axios, setBaseURL };  
