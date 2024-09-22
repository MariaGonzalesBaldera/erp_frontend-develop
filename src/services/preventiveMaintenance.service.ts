<<<<<<< HEAD
import { PreventiveMaintenanceResponse, ParamsDelete } from "../domain/machinery.interface";
import { axios } from "../utils/axios.create";

const LOG_PREFIX = "ProgramService :";

const findAll = async (): Promise<PreventiveMaintenanceResponse[]> => {
=======
import { ParamsDelete, ParamsDeleteItem } from "../domain/machinery.interface";
import { PreventMaintenanceItem, ResponseByModel } from "../types";
import { axios } from "../utils/axios.create";

const findAll = async (): Promise<PreventMaintenanceItem[]> => {
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
	return axios
		.get("/preventiveMaintenance")
		.then((res) => res.data)
		.catch((err) => {
<<<<<<< HEAD
			console.log(err.response.data)
			throw new Error(err.response.data);
		});
};

const create = async (data: PreventiveMaintenanceResponse): Promise<PreventiveMaintenanceResponse> => {
=======
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
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
	return axios
		.post("/preventiveMaintenance/create", data)
		.then((res) => res.data.body)
		.catch((err) => {
<<<<<<< HEAD
			Promise.reject(err.response.data)
			console.log("Error => " + err)
=======
			console.error("Error =>", err.response?.data || "Error en la solicitud");
      return Promise.reject(err.response?.data.message || "Error al crear maquinaria");
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
		});
};

const update = async (
<<<<<<< HEAD
	data: Partial<PreventiveMaintenanceResponse>,
	id?: string,
): Promise<PreventiveMaintenanceResponse> => {
=======
	data: Partial<PreventMaintenanceItem>,
	id?: number,
): Promise<PreventMaintenanceItem> => {
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
	return axios
		.put(`/preventiveMaintenance/update/${id}`, data) 
		.then((res) => res.data.body)
		.catch((err) => Promise.reject(err.response.data));
};

<<<<<<< HEAD
const deleteOne = async (params: ParamsDelete) => {
=======
const deleteOne = async (params: ParamsDeleteItem) => {
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
	return axios
		.delete(`/preventiveMaintenance/delete/${params.id}`)
		.then((res) => {
			return res.data.body;
		})
		.catch((err) => {
<<<<<<< HEAD
			console.error(LOG_PREFIX, err);
			return Promise.reject(err.response.data);
		});
};

=======
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
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
export const preventiveMaintenanceService = {
	findAll,
	create,
	deleteOne,
<<<<<<< HEAD
	update
=======
	update,
	findByMachinery,
	findByModel
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
};