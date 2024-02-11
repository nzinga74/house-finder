import { IUser } from "../user/IUser";
import { IPropertyAddress } from "./IPropertyAddress";
import { IPropertyImages } from "./IPropertyImages";

export interface IProperty {
  id: number;
  name: string;
  description: string;
  numberOfBedrooms: number;
  lease?: boolean;
  price: number;
  created_at?: Date;
  updated_at?: Date;
  addressId: number;
  propertyTypeId: number;
  address?: IPropertyAddress;
  userId: number;
  image?: string;
  propertyId: number;
  PropertyImages?: IPropertyImages[];
  user?: IUser[];
}
