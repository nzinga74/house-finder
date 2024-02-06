import { propertiesTransform } from "../../utils/propertiesTransform";
import { api } from "../api";
const getProperties = async (propertyId: number) => {
  try {
    const properties = await api.get(
      `/properties/actives?propertyId=${propertyId}`
    );
    return propertiesTransform(properties.data.data);
  } catch (error) {
    console.log(error);
  }
};

const getProperty = async (propertyId: number) => {
  try {
    const property = await api.get(`/properties/${propertyId}`);
    return property.data.data;
  } catch (error) {
    console.log(error);
  }
};

const getcontrats = async (clientId: number) => {
  try {
    const contracts = await api.get(`contracts/all/?${clientId}`);
    return contracts.data.data;
  } catch (error) {
    console.log(error);
  }
};
export { getProperties, getProperty, getcontrats };
