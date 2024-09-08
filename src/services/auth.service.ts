import { CredentialsBody } from "../domain/machinery.interface";
import { axios } from "../utils/axios.create";

const authentication = async (data: CredentialsBody) => {
  return axios
    .post("/auth/authenticate", data)
    .then((res) => res.data)
    .catch((err) => {
      console.error(err.response?.data || "Error en la solicitud");
      throw new Error(err.response?.data.message || "Error al obtener los datos");
    });
}

export const authService = {
  authentication
}