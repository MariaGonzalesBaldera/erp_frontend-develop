import { ParamsDelete, ParamsDeleteItem } from "../domain/machinery.interface";
import { PreventMaintenanceItem, ResponseByModel } from "../types";
import { axios } from "../utils/axios.create";

const findAll = async (): Promise<PreventMaintenanceItem[]> => {
	return axios
		.get("/preventiveMaintenance")
		.then((res) => res.data)
		.catch((err) => {
			console.error(err.response?.data || "Error en la solicitud");
      throw new Error(err.response?.data.message || "Error al obtener los datos");
		});
};

const findByMachinery = async (id?:number): Promise<PreventMaintenanceItem[]> => {
	return axios
		.get(`/preventiveMaintenance/findByMachinery/${id}`)
		.then((res) => res.data)
		.catch((err) => {
			console.error("Error =>", err.response?.data || "Error en la solicitud");
      return Promise.reject(err.response?.data.message || "Error al crear maquinaria");
		});
};

const create = async (data: PreventMaintenanceItem): Promise<PreventMaintenanceItem> => {
	return axios
		.post("/preventiveMaintenance/create", data)
		.then((res) => res.data.body)
		.catch((err) => {
			console.error("Error =>", err.response?.data || "Error en la solicitud");
      return Promise.reject(err.response?.data.message || "Error al crear maquinaria");
		});
};

const update = async (
	data: Partial<PreventMaintenanceItem>,
	id?: number,
): Promise<PreventMaintenanceItem> => {
	return axios
		.put(`/preventiveMaintenance/update/${id}`, data) 
		.then((res) => res.data.body)
		.catch((err) => Promise.reject(err.response.data));
};

const deleteOne = async (params: ParamsDeleteItem) => {
	return axios
		.delete(`/preventiveMaintenance/delete/${params.id}`)
		.then((res) => {
			return res.data.body;
		})
		.catch((err) => {
			return Promise.reject(err.response.data);
		});
};
const findByModel = async (model: string): Promise<PreventMaintenanceItem[]> => {
	return axios
		.get(`/preventiveMaintenance/findByMachineryModel/${model}`)
		.then((res) => res.data)
		.catch((err) => {
			console.log(err.response.data)
			throw new Error(err.response.data);
		});
};
export const preventiveMaintenanceService = {
	findAll,
	create,
	deleteOne,
	update,
	findByMachinery,
	findByModel
};