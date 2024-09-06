import { MachineryIncomeResponse, ParamsDelete } from "../domain/machinery.interface";
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
    id?: string,
): Promise<MachineryIncomeResponse> => {
    return axios
        .put(`/machineryIncome/update/${id}`, data)
        .then((res) => res.data.body)
        .catch((err) => Promise.reject(err.response.data));
};

const deleteOne = async (params: ParamsDelete) => {
    return axios
        .delete(`/machineryIncome/delete/${params.id}`)
        .then((res) => {
            return res.data.body;
        })
        .catch((err) => {
            console.error(LOG_PREFIX, err);
            return Promise.reject(err.response.data);
        });
};

export const machineryIncomeService = {
    findAll,
    create,
    deleteOne,
    update
};