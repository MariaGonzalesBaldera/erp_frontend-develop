<<<<<<< HEAD
import { MachineryIncomeResponse, ParamsDelete } from "../domain/machinery.interface";
=======
import { MachineryIncomeResponse, ParamsDelete, ParamsDeleteItem } from "../domain/machinery.interface";
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
import { axios } from "../utils/axios.create";

const LOG_PREFIX = "ProgramService :";

const findAll = async (): Promise<MachineryIncomeResponse[]> => {
    return axios
        .get("/machineryIncome")
        .then((res) => res.data)
        .catch((err) => {
            console.log(err.response.data)
            throw new Error(err.response.data);
        });
};

const create = async (data: MachineryIncomeResponse): Promise<MachineryIncomeResponse> => {
    return axios
        .post("/machineryIncome/create", data)
        .then((res) => res.data.body)
        .catch((err) => {
            Promise.reject(err.response.data)
            console.log("Error => " + err)
        });
};

const update = async (
    data: Partial<MachineryIncomeResponse>,
<<<<<<< HEAD
    id?: string,
=======
    id?: number,
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
): Promise<MachineryIncomeResponse> => {
    return axios
        .put(`/machineryIncome/update/${id}`, data)
        .then((res) => res.data.body)
        .catch((err) => Promise.reject(err.response.data));
};

<<<<<<< HEAD
const deleteOne = async (params: ParamsDelete) => {
=======
const deleteOne = async (params: ParamsDeleteItem) => {
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
    return axios
        .delete(`/machineryIncome/delete/${params.id}`)
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
const findByMachinery = async (id?: number): Promise<MachineryIncomeResponse[]> => {
    return axios
        .get(`/machineryIncome/findByMachinery/${id}`)
        .then((res) => res.data)
        .catch((err) => {
            console.log(err.response.data)
            throw new Error(err.response.data);
        });
};

const findByModel = async (model: string): Promise<MachineryIncomeResponse[]> => {
    return axios
        .get(`/machineryIncome/findByMachineryModel/${model}`)
        .then((res) => res.data)
        .catch((err) => {
            console.log(err.response.data)
            throw new Error(err.response.data);
        });
};
>>>>>>> 6ce16cd8de779e3614445d9b1f9e0196d0e7427f
export const machineryIncomeService = {
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