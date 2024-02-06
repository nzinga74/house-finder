import { IClient } from "../client/IClient";
import { IProperty } from "../property/IProperty";
import { IUser } from "../user/IUser";

export interface IContract {
  id?: number;
  description: string;
  propertyId: number;
  property?: IProperty;
  userId: number;
  user?: IUser;
  clientId: number;
  client?: IClient;
  transactionDate: Date;
  transaction_price: number;
  created_at?: Date;
  updated_at?: Date;
}
