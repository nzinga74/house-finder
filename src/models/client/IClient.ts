import { IClientAddress } from "./IClientAddress";

export interface IClient {
  id: number;
  name: string;
  lastname: string;
  phone: number | null;
  email: string;
  addressId: number;
  password: string;
  address?: IClientAddress;
}
