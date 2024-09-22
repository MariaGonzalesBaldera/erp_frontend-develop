<<<<<<< HEAD
<<<<<<< HEAD
import { DocumentResponse, ParamsDelete,IMachinery } from "../domain/machinery.interface";
import { axios } from "../utils/axios.create";

const LOG_PREFIX = "ProgramService :";

=======
=======
>>>>>>> feature/addAuthProcess
import { DocumentResponse, ParamsDelete, IMachinery, ParamsDeleteItem } from "../domain/machinery.interface";
import { ResponseByModel } from "../types";
import { axios } from "../utils/axios.create";

<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
const findAll = async (): Promise<DocumentResponse[]> => {
	return axios
		.get("/machineryDocument")
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
const findByMachinery = async (id?: number): Promise<DocumentResponse[]> => {
	return axios
		.get(`/machineryDocument/findByMachinery/${id}`)
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
const create = async (data: DocumentResponse): Promise<DocumentResponse> => {
	return axios
		.post("/machineryDocument/create", data)
		.then((res) => res.data.body)
		.catch((err) => {
			Promise.reject(err.response.data)
			console.log("Error => " + err)
		});
};

const update = async (
	data: Partial<DocumentResponse>,
<<<<<<< HEAD
<<<<<<< HEAD
	id?: string,
): Promise<DocumentResponse> => {
	return axios
		.put(`/machineryDocument/update/${id}`, data) 
=======
=======
>>>>>>> feature/addAuthProcess
	id?: number,
): Promise<DocumentResponse> => {
	return axios
		.put(`/machineryDocument/update/${id}`, data)
<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
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
		.delete(`/machineryDocument/delete/${params.id}`)
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

export const documentsService = {
	findAll,
	create,
	deleteOne,
	update
=======
=======
>>>>>>> feature/addAuthProcess
			return Promise.reject(err.response.data);
		});
};
const findByModel = async (model: string): Promise<ResponseByModel[]> => {
	return axios
		.get(`/machineryDocument/findByModel/${model}`)
		.then((res) => res.data)
		.catch((err) => {
			console.log(err.response.data)
			throw new Error(err.response.data);
		});
};

export const documentsService = 	{
	findAll,
	create,
	deleteOne,
	update,
	findByMachinery,
	findByModel
<<<<<<< HEAD
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
=======
>>>>>>> feature/addAuthProcess
};