import { axios } from "../utils/axios.create";
import { MachineryResponse } from "../domain/machinery.interface";

const findAll = async (): Promise<MachineryResponse[]> => {
	return axios
		.get("/api/heavyMachinery")
		.then((res) => res.data)
		.catch((err) => {
			throw new Error(err.response.data);
		});
};

export const machineryService = {
	findAll,
};