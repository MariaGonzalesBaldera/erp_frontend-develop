<<<<<<< HEAD
<<<<<<< HEAD
import { TransportationResponse, ParamsDelete } from "../domain/machinery.interface";
import { axios } from "../utils/axios.create";

const LOG_PREFIX = "ProgramService :";
=======
import { TransportationResponse, ParamsDelete, ParamsDeleteItem } from "../domain/machinery.interface";
import { axios } from "../utils/axios.create";

>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
import { TransportationResponse, ParamsDelete, ParamsDeleteItem } from "../domain/machinery.interface";
import { axios } from "../utils/axios.create";

>>>>>>> feature/addAuthProcess

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
<<<<<<< HEAD

=======
=======
>>>>>>> feature/addAuthProcess
const findByMachinery = async (id?: number): Promise<TransportationResponse[]> => {
	return axios
		.get(`/transportationCost/findByMachinery/${id}`)
		.then((res) => res.data)
		.catch((err) => {
			console.log(err.response.data)
			throw new Error(err.response.data);
		});
};
<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
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
<<<<<<< HEAD
const deleteOne = async (params: ParamsDelete) => {
=======
const deleteOne = async (params: ParamsDeleteItem) => {
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
const deleteOne = async (params: ParamsDeleteItem) => {
>>>>>>> feature/addAuthProcess
	return axios
		.delete(`/transportationCost/delete/${params.id}`)
		.then((res) => {
			return res.data.body;
		})
		.catch((err) => {
<<<<<<< HEAD
<<<<<<< HEAD
			console.error(LOG_PREFIX, err);
			return Promise.reject(err.response.data);
		});
};
=======
=======
>>>>>>> feature/addAuthProcess
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
<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess

export const transportationCostService = {
	findAll,
	create,
	deleteOne,
<<<<<<< HEAD
<<<<<<< HEAD
	update
};
=======
=======
>>>>>>> feature/addAuthProcess
	update,
	findByMachinery,
	findByModel
};

<<<<<<< HEAD
 
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
 
>>>>>>> feature/addAuthProcess
