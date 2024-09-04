import { PreventiveMaintenanceResponse, ParamsDelete } from "../domain/machinery.interface";
import { axios } from "../utils/axios.create";

const LOG_PREFIX = "ProgramService :";

const findAll = async (): Promise<PreventiveMaintenanceResponse[]> => {
	return axios
		.get("/preventiveMaintenance")
		.then((res) => res.data)
		.catch((err) => {
			console.log(err.response.data)
			throw new Error(err.response.data);
		});
};

const create = async (data: PreventiveMaintenanceResponse): Promise<PreventiveMaintenanceResponse> => {
	return axios
		.post("/preventiveMaintenance/create", data)
		.then((res) => res.data.body)
		.catch((err) => {
			Promise.reject(err.response.data)
			console.log("Error => " + err)
		});
};

const update = async (
	data: Partial<PreventiveMaintenanceResponse>,
	id?: string,
): Promise<PreventiveMaintenanceResponse> => {
	return axios
		.put(`/preventiveMaintenance/update/${id}`, data) 
		.then((res) => res.data.body)
		.catch((err) => Promise.reject(err.response.data));
};

const deleteOne = async (params: ParamsDelete) => {
	return axios
		.delete(`/preventiveMaintenance/delete/${params.id}`)
		.then((res) => {
			return res.data.body;
		})
		.catch((err) => {
			console.error(LOG_PREFIX, err);
			return Promise.reject(err.response.data);
		});
};

export const machineryService = {
	findAll,
	create,
	deleteOne,
	update
};