import { ParamsDeleteItem } from "../domain/machinery.interface";
import { CorrectiveMaintananceItem, EvidenceImageItem } from "../types";
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
const create = async (data: CorrectiveMaintananceItem, files: File[]): Promise<CorrectiveMaintananceItem> => {
	const formData = new FormData();
	Object.keys(data).forEach((key) => {
		formData.append(key, (data as any)[key]);
	});
	files.forEach((file) => {
		formData.append("files", file);
	});
	return axios
		.post("/correctiveMaintenance/create", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		})
		.then((res) => res.data.body)
		.catch((err) => {
			console.log("Error => " + err.response.data);
			return Promise.reject(err.response.data);
		});
};

const update = async (data: Partial<CorrectiveMaintananceItem>, files: File[], id?: number): Promise<CorrectiveMaintananceItem> => {
	const formData = new FormData();
	Object.keys(data).forEach((key) => {
		formData.append(key, (data as any)[key]);
	});
	files.forEach((file) => {
		formData.append("files", file);
	});
	return axios
		.put(`/correctiveMaintenance/update/${id}`, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		})
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

const findEvidenceByMachinery = async (machineryId: number): Promise<EvidenceImageItem[]> => {
    return axios
        .get(`/evidenceImage/findByMachinery/${machineryId}`)
        .then((res) => res.data)
        .catch((err) => {
            console.error(err.response?.data || "Error en la solicitud");
            throw new Error(err.response?.data.message || "Error al obtener los datos");
        });
};


export const CorrectiveMaintananceService = {
    findAll,
    create,
    deleteOne,
    update,
    findByMachinery,
    findByModel,
	findEvidenceByMachinery
}