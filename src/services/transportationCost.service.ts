<<<<<<< HEAD
import { TransportationResponse, ParamsDelete } from "../domain/machinery.interface";
import { axios } from "../utils/axios.create";

const LOG_PREFIX = "ProgramService :";
=======
import { TransportationResponse, ParamsDelete, ParamsDeleteItem } from "../domain/machinery.interface";
import { axios } from "../utils/axios.create";

>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f

const findAll = async (): Promise<TransportationResponse[]> => {
	return axios
		.get("/transportationCost")
		.then((res) => res.data)
		.catch((err) => {
			console.log(err.response.data)
			throw new Error(err.response.data);
		});
};
<<<<<<< HEAD

=======
const findByMachinery = async (id?: number): Promise<TransportationResponse[]> => {
	return axios
		.get(`/transportationCost/findByMachinery/${id}`)
		.then((res) => res.data)
		.catch((err) => {
			console.log(err.response.data)
			throw new Error(err.response.data);
		});
};
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
const create = async (data: TransportationResponse): Promise<TransportationResponse> => {
	return axios
		.post("/transportationCost/create", data)
		.then((res) => res.data.body)
		.catch((err) => {
			Promise.reject(err.response.data)
			console.log("Error => " + err)
		});
};

const update = async (
	data: Partial<TransportationResponse>,
	id?: string,
): Promise<TransportationResponse> => {
	return axios
		.put(`/transportationCost/update/${id}`, data) 
		.then((res) => res.data.body)
		.catch((err) => Promise.reject(err.response.data));
};

<<<<<<< HEAD
const deleteOne = async (params: ParamsDelete) => {
=======
const deleteOne = async (params: ParamsDeleteItem) => {
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
	return axios
		.delete(`/transportationCost/delete/${params.id}`)
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
const findByModel = async (model: string): Promise<TransportationResponse[]> => {
	return axios
		.get(`/transportationCost/findByModel/${model}`)
		.then((res) => res.data)
		.catch((err) => {
			console.log(err.response.data)
			throw new Error(err.response.data);
		});
};
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f

export const transportationCostService = {
	findAll,
	create,
	deleteOne,
<<<<<<< HEAD
	update
};
=======
	update,
	findByMachinery,
	findByModel
};

 
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
