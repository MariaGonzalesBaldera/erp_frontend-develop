import { MachineryResponse, ParamsDelete } from "../domain/machinery.interface";
import { axios } from "../utils/axios.create";
// import { MaquinariaDataItem } from "../domain/machinery.interface";

const LOG_PREFIX = "ProgramService :";

const findAll = async (): Promise<MachineryResponse[]> => {
	return axios
		.get("/heavyMachinery")
		.then((res) => res.data)
		.catch((err) => {
			console.log(err.response.data)
			throw new Error(err.response.data);
		});
};

const create = async (data: MachineryResponse): Promise<MachineryResponse> => {
	return axios
		.post("/heavyMachinery/create", data)
		.then((res) => res.data.body)
		.catch((err) => {
			Promise.reject(err.response.data)
			console.log("Error => " + err)
		});
};

const update = async (
	data: Partial<MachineryResponse>,
	id?: string,
): Promise<MachineryResponse> => {
	return axios
		.put(`/heavyMachinery/update/${id}`, data) 
		.then((res) => res.data.body)
		.catch((err) => Promise.reject(err.response.data));
};

const deleteOne = async (params: ParamsDelete) => {
	return axios
		.delete(`/heavyMachinery/delete/${params.id}`)
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