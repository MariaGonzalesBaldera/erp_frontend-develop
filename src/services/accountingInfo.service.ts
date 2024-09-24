import { AccountingResponse, AccountingResponseTable } from "../domain/machinery.interface";
import { axios } from "../utils/axios.create";


const findMonthlyTable = async (searchMonth: string): Promise<AccountingResponseTable[]> => {
    return axios
        .get(`/accountingInformation/detailedMonthlyInformation`, {
            params: { searchMonth },
        })
        .then((res) => res.data)
        .catch((err) => {
            console.error(err.response?.data || "Error en la solicitud");
            throw new Error(err.response?.data.message || "Error al obtener los datos");
        });
};

const findMonthly = async (searchMonth: string): Promise<AccountingResponse[]> => {
    return axios
        .get(`/accountingInformation/monthlyInformation`, {
            params: { searchMonth },
        })
        .then((res) => res.data)
        .catch((err) => {
            console.error(err.response?.data || "Error en la solicitud");
            throw new Error(err.response?.data.message || "Error al obtener los datos");
        });
};

const findRangeDate = async (searchDateStart: string, searchDateEnd: string): Promise<AccountingResponse[]> => {
    return axios
        .get(`/accountingInformation/monthlyInformationB2D`, {
            params: {
                searchDateStart,
                searchDateEnd
            },
        })
        .then((res) => res.data)
        .catch((err) => {
            console.error(err.response?.data || "Error en la solicitud");
            throw new Error(err.response?.data.message || "Error al obtener los datos");
        });
};

const findRangeDateTotal = async (searchDateStart: string, searchDateEnd: string): Promise<AccountingResponse[]> => {
    return axios
        .get(`/accountingInformation/monthlyInformationB2M`, {
            params: {
                searchDateStart,
                searchDateEnd
            },
        })
        .then((res) => res.data)
        .catch((err) => {
            console.error(err.response?.data || "Error en la solicitud");
            throw new Error(err.response?.data.message || "Error al obtener los datos");
        });
};


export const AccountingService = {
    findMonthly,
    findRangeDate,
    findMonthlyTable,
    findRangeDateTotal
};