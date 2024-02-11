import { ICreateReserveDTO } from "../../models/dtos/ICreateReserveDTO";
import { ICreateUserDto } from "../../models/dtos/ICreateUserDto";
import { api } from "../api";

const addUser = async (data: ICreateUserDto) => {
  try {
    const response = await api.post("/clients", data);
    return response;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.response.data.message);
  }
};

const loginUser = async (email: string, password: string) => {
  try {
    const response = await api.post("/session/client", {
      email,
      password,
    });
    return response;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.response.data.message);
  }
};

const addReserve = async (data: ICreateReserveDTO) => {
  try {
    const response = await api.post("/reserves", data);
    return response;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.response.data.message);
  }
};

export { addUser, loginUser, addReserve };
