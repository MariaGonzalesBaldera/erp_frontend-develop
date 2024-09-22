<<<<<<< HEAD
import { DocumentResponse, ParamsDelete,IMachinery } from "../domain/machinery.interface";
import { axios } from "../utils/axios.create";

const LOG_PREFIX = "ProgramService :";

=======
import { DocumentResponse, ParamsDelete, IMachinery, ParamsDeleteItem } from "../domain/machinery.interface";
import { ResponseByModel } from "../types";
import { axios } from "../utils/axios.create";

>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
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
=======
const findByMachinery = async (id?: number): Promise<DocumentResponse[]> => {
	return axios
		.get(`/machineryDocument/findByMachinery/${id}`)
		.then((res) => res.data)
		.catch((err) => {
			console.log(err.response.data)
			throw new Error(err.response.data);
		});
};

>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
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
	id?: string,
): Promise<DocumentResponse> => {
	return axios
		.put(`/machineryDocument/update/${id}`, data) 
=======
	id?: number,
): Promise<DocumentResponse> => {
	return axios
		.put(`/machineryDocument/update/${id}`, data)
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
		.then((res) => res.data.body)
		.catch((err) => Promise.reject(err.response.data));
};

<<<<<<< HEAD
const deleteOne = async (params: ParamsDelete) => {
=======
const deleteOne = async (params: ParamsDeleteItem) => {
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
	return axios
		.delete(`/machineryDocument/delete/${params.id}`)
		.then((res) => {
			return res.data.body;
		})
		.catch((err) => {
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
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
};