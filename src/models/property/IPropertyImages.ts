import { IProperty } from "./IProperty";

export interface IPropertyImages {
  id: number;
  propertyId: number;
  property?: IProperty[];
  image: string;
}
