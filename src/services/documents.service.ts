import { DocumentResponse, ParamsDelete,IMachinery } from "../domain/machinery.interface";
import { axios } from "../utils/axios.create";

const LOG_PREFIX = "ProgramService :";

const findAll = async (): Promise<DocumentResponse[]> => {
	return axios
		.get("/machineryDocument")
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
	id?: string,
): Promise<DocumentResponse> => {
	return axios
		.put(`/machineryDocument/update/${id}`, data) 
		.then((res) => res.data.body)
		.catch((err) => Promise.reject(err.response.data));
};

const deleteOne = async (params: ParamsDelete) => {
	return axios
		.delete(`/machineryDocument/delete/${params.id}`)
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