import { TransportationResponse, ParamsDelete, ParamsDeleteItem } from "../domain/machinery.interface";
import { axios } from "../utils/axios.create";


const findAll = async (): Promise<TransportationResponse[]> => {
	return axios
		.get("/transportationCost")
		.then((res) => res.data)
		.catch((err) => {
			console.log(err.response.data)
			throw new Error(err.response.data);
		});
};
const findByMachinery = async (id?: number): Promise<TransportationResponse[]> => {
	return axios
		.get(`/transportationCost/findByMachinery/${id}`)
		.then((res) => res.data)
		.catch((err) => {
			console.log(err.response.data)
			throw new Error(err.response.data);
		});
};
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

const deleteOne = async (params: ParamsDeleteItem) => {
	return axios
		.delete(`/transportationCost/delete/${params.id}`)
		.then((res) => {
			return res.data.body;
		})
		.catch((err) => {
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

export const transportationCostService = {
	findAll,
	create,
	deleteOne,
	update,
	findByMachinery,
	findByModel
};

 