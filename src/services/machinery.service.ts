import { MachineryResponse, ParamsDeleteItem } from "../domain/machinery.interface";
import { axios } from "../utils/axios.create";

const LOG_PREFIX = "ProgramService :";

const findAll = async (): Promise<MachineryResponse[]> => {
	return axios
		.get("/heavyMachinery")
		.then((res) => res.data)
		.catch((err) => {
			console.error(err.response?.data || "Error en la solicitud");
      throw new Error(err.response?.data.message || "Error al obtener los datos");
		});
};

const create = async (data: MachineryResponse): Promise<MachineryResponse> => {
	return axios
		.post("/heavyMachinery/create", data)
		.then((res) => res.data.body)
		.catch((err) => {
			console.error("Error =>", err.response?.data || "Error en la solicitud");
      return Promise.reject(err.response?.data.message || "Error al crear maquinaria");
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

const deleteOne = async (params: ParamsDeleteItem) => {
	return axios
		.delete(`/heavyMachinery/delete/${params.id}`)
		.then((res) => {
			return res.data.body;
		})
		.catch((err) => {
			return Promise.reject(err.response.data);
		});
};

export const machineryService = {
	findAll,
	create,
	deleteOne,
	update
};