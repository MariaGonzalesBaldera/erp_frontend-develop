
import { EmployeeResponse, ParamsDelete } from "../domain/machinery.interface";
import { axios } from "../utils/axios.create";

const LOG_PREFIX = "ProgramService :";

const findAll = async (): Promise<EmployeeResponse[]> => {
	return axios
		.get("/employee")
		.then((res) => res.data)
		.catch((err) => {
			console.log(err.response.data)
			throw new Error(err.response.data);
		});
};

const create = async (data: EmployeeResponse): Promise<EmployeeResponse> => {
	return axios
		.post("/employee/create", data)
		.then((res) => res.data.body)
		.catch((err) => {
			Promise.reject(err.response.data)
			console.log("Error => " + err)
		});
};

const update = async (
	data: Partial<EmployeeResponse>,
	id?: string,
): Promise<EmployeeResponse> => {
	return axios
		.put(`/employee/update/${id}`, data) 
		.then((res) => res.data.body)
		.catch((err) => Promise.reject(err.response.data));
};

const deleteOne = async (params: ParamsDelete) => {
	return axios
		.delete(`/employee/delete/${params.id}`)
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