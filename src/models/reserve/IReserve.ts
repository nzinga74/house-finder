import { IClient } from "../client/IClient";
import { IProperty } from "../property/IProperty";
import { IUser } from "../user/IUser";

export interface IReserve {
  id: number;
  userId: number;
  user?: IUser;
  propertyId: number;
  clientId: number;
  client?: IClient;
  isActived?: boolean;
  estimatedDate?: Date;
  scheduledDate?: Date | null;
  property?: IProperty;
}
