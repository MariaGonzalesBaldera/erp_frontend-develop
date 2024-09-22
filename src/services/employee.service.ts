
<<<<<<< HEAD
import { EmployeeResponse, ParamsDelete } from "../domain/machinery.interface";
=======
import {  ParamsDelete, ParamsDeleteItem } from "../domain/machinery.interface";
import { employeeItem } from "../types";
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
import { axios } from "../utils/axios.create";

const LOG_PREFIX = "ProgramService :";

<<<<<<< HEAD
const findAll = async (): Promise<EmployeeResponse[]> => {
=======
const findAll = async (): Promise<employeeItem[]> => {
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
	return axios
		.get("/employee")
		.then((res) => res.data)
		.catch((err) => {
			console.log(err.response.data)
			throw new Error(err.response.data);
		});
};

<<<<<<< HEAD
const create = async (data: EmployeeResponse): Promise<EmployeeResponse> => {
=======
const create = async (data: employeeItem): Promise<employeeItem> => {
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
	return axios
		.post("/employee/create", data)
		.then((res) => res.data.body)
		.catch((err) => {
			Promise.reject(err.response.data)
			console.log("Error => " + err)
		});
};

const update = async (
<<<<<<< HEAD
	data: Partial<EmployeeResponse>,
	id?: string,
): Promise<EmployeeResponse> => {
=======
	data: Partial<employeeItem>,
	id?: number,
): Promise<employeeItem> => {
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
	return axios
		.put(`/employee/update/${id}`, data) 
		.then((res) => res.data.body)
		.catch((err) => Promise.reject(err.response.data));
};

<<<<<<< HEAD
const deleteOne = async (params: ParamsDelete) => {
=======
const deleteOne = async (params: ParamsDeleteItem) => {
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
	return axios
		.delete(`/employee/delete/${params.id}`)
		.then((res) => {
			return res.data.body;
		})
		.catch((err) => {
<<<<<<< HEAD
			console.error(LOG_PREFIX, err);
=======
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
			return Promise.reject(err.response.data);
		});
};

export const employeeService = {
	findAll,
	create,
	deleteOne,
	update
};