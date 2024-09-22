
import {  ParamsDelete, ParamsDeleteItem } from "../domain/machinery.interface";
import { employeeItem } from "../types";
import { axios } from "../utils/axios.create";

const LOG_PREFIX = "ProgramService :";

const findAll = async (): Promise<employeeItem[]> => {
	return axios
		.get("/employee")
		.then((res) => res.data)
		.catch((err) => {
			console.log(err.response.data)
			throw new Error(err.response.data);
		});
};

const create = async (data: employeeItem): Promise<employeeItem> => {
	return axios
		.post("/employee/create", data)
		.then((res) => res.data.body)
		.catch((err) => {
			Promise.reject(err.response.data)
			console.log("Error => " + err)
		});
};

const update = async (
	data: Partial<employeeItem>,
	id?: number,
): Promise<employeeItem> => {
	return axios
		.put(`/employee/update/${id}`, data) 
		.then((res) => res.data.body)
		.catch((err) => Promise.reject(err.response.data));
};

const deleteOne = async (params: ParamsDeleteItem) => {
	return axios
		.delete(`/employee/delete/${params.id}`)
		.then((res) => {
			return res.data.body;
		})
		.catch((err) => {
			return Promise.reject(err.response.data);
		});
};

export const employeeService = {
	findAll,
	create,
	deleteOne,
	update
};