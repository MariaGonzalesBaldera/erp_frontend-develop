<<<<<<< HEAD
import { FuelingUpResponse, ParamsDelete } from "../domain/machinery.interface";
import { axios } from "../utils/axios.create";

const LOG_PREFIX = "ProgramService :";

=======
import { FuelingUpResponse, ParamsDelete, ParamsDeleteItem } from "../domain/machinery.interface";
import { axios } from "../utils/axios.create";

>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
const findAll = async (): Promise<FuelingUpResponse[]> => {
	return axios
		.get("/fuelingUp")
		.then((res) => res.data)
		.catch((err) => {
<<<<<<< HEAD
=======
			console.error(err.response?.data || "Error en la solicitud");
			throw new Error(err.response?.data.message || "Error al obtener los datos");
		});
};
const findByMachinery = async (id?: number): Promise<FuelingUpResponse[]> => {
	return axios
		.get(`/fuelingUp/findByMachinery/${id}`)
		.then((res) => res.data)
		.catch((err) => {
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
			console.log(err.response.data)
			throw new Error(err.response.data);
		});
};
<<<<<<< HEAD

=======
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
const create = async (data: FuelingUpResponse): Promise<FuelingUpResponse> => {
	return axios
		.post("/fuelingUp/create", data)
		.then((res) => res.data.body)
		.catch((err) => {
<<<<<<< HEAD
			Promise.reject(err.response.data)
			console.log("Error => " + err)
=======
			console.error("Error =>", err.response?.data || "Error en la solicitud");
			return Promise.reject(err.response?.data.message || "Error al crear maquinaria");
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
		});
};

const update = async (
	data: Partial<FuelingUpResponse>,
<<<<<<< HEAD
	id?: string,
): Promise<FuelingUpResponse> => {
	return axios
		.put(`/fuelingUp/update/${id}`, data) 
=======
	id?: number,
): Promise<FuelingUpResponse> => {
	return axios
		.put(`/fuelingUp/update/${id}`, data)
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
		.then((res) => res.data.body)
		.catch((err) => Promise.reject(err.response.data));
};

<<<<<<< HEAD
const deleteOne = async (params: ParamsDelete) => {
=======
const deleteOne = async (params: ParamsDeleteItem) => {
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
	return axios
		.delete(`/fuelingUp/delete/${params.id}`)
		.then((res) => {
			return res.data.body;
		})
		.catch((err) => {
<<<<<<< HEAD
			console.error(LOG_PREFIX, err);
			return Promise.reject(err.response.data);
		});
};

=======
			return Promise.reject(err.response.data);
		});
};
const findByModel = async (model: string): Promise<FuelingUpResponse[]> => {
	return axios
		.get(`/fuelingUp/findByMachineryModel/${model}`)
		.then((res) => res.data)
		.catch((err) => {
			console.log(err.response.data)
			throw new Error(err.response.data);
		});
};
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
export const fuelingUpService = {
	findAll,
	create,
	deleteOne,
<<<<<<< HEAD
	update
=======
	update,
	findByModel,
	findByMachinery
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
};