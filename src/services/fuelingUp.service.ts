import { FuelingUpResponse, ParamsDelete, ParamsDeleteItem } from "../domain/machinery.interface";
import { axios } from "../utils/axios.create";

const findAll = async (): Promise<FuelingUpResponse[]> => {
	return axios
		.get("/fuelingUp")
		.then((res) => res.data)
		.catch((err) => {
			console.error(err.response?.data || "Error en la solicitud");
			throw new Error(err.response?.data.message || "Error al obtener los datos");
		});
};

const create = async (data: FuelingUpResponse): Promise<FuelingUpResponse> => {
	return axios
		.post("/fuelingUp/create", data)
		.then((res) => res.data.body)
		.catch((err) => {
			console.error("Error =>", err.response?.data || "Error en la solicitud");
			return Promise.reject(err.response?.data.message || "Error al crear maquinaria");
		});
};

const update = async (
	data: Partial<FuelingUpResponse>,
	id?: number,
): Promise<FuelingUpResponse> => {
	return axios
		.put(`/fuelingUp/update/${id}`, data)
		.then((res) => res.data.body)
		.catch((err) => Promise.reject(err.response.data));
};

const deleteOne = async (params: ParamsDeleteItem) => {
	return axios
		.delete(`/fuelingUp/delete/${params.id}`)
		.then((res) => {
			return res.data.body;
		})
		.catch((err) => {
			return Promise.reject(err.response.data);
		});
};

export const fuelingUpService = {
	findAll,
	create,
	deleteOne,
	update
};