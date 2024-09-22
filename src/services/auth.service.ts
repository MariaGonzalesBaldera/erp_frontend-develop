import { CredentialsBody, ParamsDeleteItem } from "../domain/machinery.interface";
import { NewPasswordRequest, UserItem, UserRequest } from "../types";
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

const findAll = async (): Promise<UserItem[]> => {
  return axios
    .get("/users")
    .then((res) => res.data)
    .catch((err) => {
      console.error(err.response?.data || "Error en la solicitud");
      throw new Error(err.response?.data.message || "Error al obtener los datos");
    });
};
const create = async (data: UserRequest): Promise<UserItem> => {
  return axios
    .post("/users/create", data)
    .then((res) => res.data.body)
    .catch((err) => {
      console.error("Error =>", err.response?.data || "Error en la solicitud");
      return Promise.reject(err.response?.data.message || "Error al crear maquinaria");
    });
};

const update = async (
  data: Partial<UserItem>,
  id?: number,
): Promise<UserItem> => {
  return axios
    .put(`/users/update/${id}`, data)
    .then((res) => res.data.body)
    .catch((err) => Promise.reject(err.response.data));
};

const deleteOne = async (params: ParamsDeleteItem) => {
  return axios
    .delete(`/users/delete/${params.id}`)
    .then((res) => {
      return res.data.body;
    })
    .catch((err) => {
      return Promise.reject(err.response.data);
    });
};

const updatePassword = async (
  data: Partial<NewPasswordRequest>,
  id: number,
  currentPassword: string, 
  newPassword: string  
) => {
  return axios
    .put(`/users/updatePassword/${id}`, data, {
      params: {
        currentPassword: currentPassword,
        newPassword: newPassword,
      },
    })
    .then((res) => {
      return res.data.body;
    })
    .catch((err) => {
      return Promise.reject(err.response.data);
    });
};


export const authService = {
  authentication,
  findAll,
  create,
  deleteOne,
  update,
  updatePassword
}