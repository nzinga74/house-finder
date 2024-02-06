import { IProperty } from "../models/property/IProperty";

const propertiesTransform = (data: IProperty[]) => {
  const properties: IProperty[] = [];
  data.forEach((d) => {
    const x = properties.findIndex((t) => t.propertyId == d.propertyId);
    if (x == -1) {
      properties.push(d);
    }
  });
  console.log(properties);
  return properties;
};
export { propertiesTransform };
