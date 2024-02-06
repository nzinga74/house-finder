import { IUserAddress } from "./IUserAddress";

export interface IUser {
  id: number;
  name: string;
  lastname: string;
  state?: number;
  email: string;
  password: string;
  created_at?: Date;
  updated_at?: Date;
  address?: IUserAddress;
}
