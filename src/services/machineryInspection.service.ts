import { InspectionResponse, ParamsDeleteItem } from "../domain/machinery.interface";
import { axios } from "../utils/axios.create";


const findAll = async (): Promise<InspectionResponse[]> => {
	return axios
		.get("/machineryInspection")
		.then((res) => res.data)
		.catch((err) => {
			console.error(err.response?.data || "Error en la solicitud");
      throw new Error(err.response?.data.message || "Error al obtener los datos");
		});
};

const create = async (data: InspectionResponse): Promise<InspectionResponse> => {
	return axios
		.post("/machineryInspection/create", data)
		.then((res) => res.data.body)
		.catch((err) => {
			console.error("Error =>", err.response?.data || "Error en la solicitud");
      return Promise.reject(err.response?.data.message || "Error al crear maquinaria");
		});
};

const update = async (
	data: Partial<InspectionResponse>,
	id?: string,
): Promise<InspectionResponse> => {
	return axios
		.put(`/machineryInspection/update/${id}`, data) 
		.then((res) => res.data.body)
		.catch((err) => Promise.reject(err.response.data));
};

const deleteOne = async (params: ParamsDeleteItem) => {
	return axios
		.delete(`/machineryInspection/delete/${params.id}`)
		.then((res) => {
			return res.data.body;
		})
		.catch((err) => {
			return Promise.reject(err.response.data);
		});
};

export const InspectionService = {
	findAll,
	create,
	deleteOne,
	update
};