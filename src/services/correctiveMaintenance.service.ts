import { ParamsDeleteItem } from "../domain/machinery.interface";
import { CorrectiveMaintananceItem } from "../types";
import { axios } from "../utils/axios.create";

const findAll = async (): Promise<CorrectiveMaintananceItem[]> => {
    return axios
        .get("/correctiveMaintenance")
        .then((res) => res.data)
        .catch((err) => {
            console.error(err.response?.data || "Error en la solicitud");
            throw new Error(err.response?.data.message || "Error al obtener los datos");
        });
};
const create = async (data: CorrectiveMaintananceItem): Promise<CorrectiveMaintananceItem> => {
    return axios
        .post("/correctiveMaintenance/create", data)
        .then((res) => res.data.body)
        .catch((err) => {
            console.error("Error =>", err.response?.data || "Error en la solicitud");
            return Promise.reject(err.response?.data.message || "Error al crear maquinaria");
        });
};

const update = async (
    data: Partial<CorrectiveMaintananceItem>,
    id?: number,
): Promise<CorrectiveMaintananceItem> => {
    return axios
        .put(`/correctiveMaintenance/update/${id}`, data)
        .then((res) => res.data.body)
        .catch((err) => Promise.reject(err.response.data));
};

const deleteOne = async (params: ParamsDeleteItem) => {
    return axios
        .delete(`/correctiveMaintenance/delete/${params.id}`)
        .then((res) => {
            return res.data.body;
        })
        .catch((err) => {
            return Promise.reject(err.response.data);
        });
};


const findByMachinery = async (id?: number): Promise<CorrectiveMaintananceItem[]> => {
    return axios
        .get(`/correctiveMaintenance/findByMachinery/${id}`)
        .then((res) => res.data)
        .catch((err) => {
            console.log(err.response.data)
            throw new Error(err.response.data);
        });
};
const findByModel = async (model: string): Promise<CorrectiveMaintananceItem[]> => {
	return axios
		.get(`/correctiveMaintenance/findByMachineryModel/${model}`)
		.then((res) => res.data)
		.catch((err) => {
			console.log(err.response.data)
			throw new Error(err.response.data);
		});
};
export const CorrectiveMaintananceService = {
    findAll,
    create,
    deleteOne,
    update,
    findByMachinery,
    findByModel
}