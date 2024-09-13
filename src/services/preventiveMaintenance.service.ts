import { PreventiveMaintenanceResponse, ParamsDelete } from "../domain/machinery.interface";
import { axios } from "../utils/axios.create";

const LOG_PREFIX = "ProgramService :";

const findAll = async (): Promise<PreventiveMaintenanceResponse[]> => {
	return axios
		.get("/preventiveMaintenance")
		.then((res) => res.data)
		.catch((err) => {
			console.error(err.response?.data || "Error en la solicitud");
      throw new Error(err.response?.data.message || "Error al obtener los datos");
		});
};

const findByMachinery = async (id?:number): Promise<PreventiveMaintenanceResponse[]> => {
	return axios
		.get(`/machineryDocument/findByMachinery/${id}`)
		.then((res) => res.data)
		.catch((err) => {
			console.error("Error =>", err.response?.data || "Error en la solicitud");
      return Promise.reject(err.response?.data.message || "Error al crear maquinaria");
		});
};

const create = async (data: PreventiveMaintenanceResponse): Promise<PreventiveMaintenanceResponse> => {
	return axios
		.post("/preventiveMaintenance/create", data)
		.then((res) => res.data.body)
		.catch((err) => {
			console.error("Error =>", err.response?.data || "Error en la solicitud");
      return Promise.reject(err.response?.data.message || "Error al crear maquinaria");
		});
};

const update = async (
	data: Partial<PreventiveMaintenanceResponse>,
	id?: string,
): Promise<PreventiveMaintenanceResponse> => {
	return axios
		.put(`/preventiveMaintenance/update/${id}`, data) 
		.then((res) => res.data.body)
		.catch((err) => Promise.reject(err.response.data));
};

const deleteOne = async (params: ParamsDelete) => {
	return axios
		.delete(`/preventiveMaintenance/delete/${params.id}`)
		.then((res) => {
			return res.data.body;
		})
		.catch((err) => {
			return Promise.reject(err.response.data);
		});
};

export const preventiveMaintenanceService = {
	findAll,
	create,
	deleteOne,
	update,
	findByMachinery
};