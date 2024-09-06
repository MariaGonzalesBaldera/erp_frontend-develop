import { MachineryTypeResponse, ParamsDelete } from "../domain/machinery.interface";
import { axios } from "../utils/axios.create";

const LOG_PREFIX = "ProgramService :";

const findAll = async (): Promise<MachineryTypeResponse[]> => {
	return axios
		.get("/machineryType")
		.then((res) => res.data)
		.catch((err) => {
			console.log(err.response.data)
			throw new Error(err.response.data);
		});
};

const create = async (data: MachineryTypeResponse): Promise<MachineryTypeResponse> => {
	return axios
		.post("/machineryType/create", data)
		.then((res) => res.data.body)
		.catch((err) => {
			Promise.reject(err.response.data)
			console.log("Error => " + err)
		});
};

const update = async (
	data: Partial<MachineryTypeResponse>,
	id?: string,
): Promise<MachineryTypeResponse> => {
	return axios
		.put(`/machineryType/update/${id}`, data) 
		.then((res) => res.data.body)
		.catch((err) => Promise.reject(err.response.data));
};

const deleteOne = async (params: ParamsDelete) => {
	return axios
		.delete(`/machineryType/delete/${params.id}`)
		.then((res) => {
			return res.data.body;
		})
		.catch((err) => {
			console.error(LOG_PREFIX, err);
			return Promise.reject(err.response.data);
		});
};

export const machineryTypeService = {
	findAll,
	create,
	deleteOne,
	update
};