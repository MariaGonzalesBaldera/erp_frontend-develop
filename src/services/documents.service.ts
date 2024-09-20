import { DocumentResponse, ParamsDelete, IMachinery, ParamsDeleteItem } from "../domain/machinery.interface";
import { ResponseByModel } from "../types";
import { axios } from "../utils/axios.create";

const findAll = async (): Promise<DocumentResponse[]> => {
	return axios
		.get("/machineryDocument")
		.then((res) => res.data)
		.catch((err) => {
			console.log(err.response.data)
			throw new Error(err.response.data);
		});
};

const findByMachinery = async (id?: number): Promise<DocumentResponse[]> => {
	return axios
		.get(`/machineryDocument/findByMachinery/${id}`)
		.then((res) => res.data)
		.catch((err) => {
			console.log(err.response.data)
			throw new Error(err.response.data);
		});
};

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
	id?: number,
): Promise<DocumentResponse> => {
	return axios
		.put(`/machineryDocument/update/${id}`, data)
		.then((res) => res.data.body)
		.catch((err) => Promise.reject(err.response.data));
};

const deleteOne = async (params: ParamsDeleteItem) => {
	return axios
		.delete(`/machineryDocument/delete/${params.id}`)
		.then((res) => {
			return res.data.body;
		})
		.catch((err) => {
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
};