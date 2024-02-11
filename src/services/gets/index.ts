import { IFilterPropertyDTO } from "../../models/dtos/IFilterPropertyDTO";
import { IFilterReserveDTO } from "../../models/dtos/IFilterReserveDTO";
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

const getReserves = async (clientId: number) => {
  try {
    const reserves = await api.get(`/reserves?clientId=${clientId}`);
    return reserves.data.data;
  } catch (error) {
    console.log(error);
  }
};

const searchProperties = async (data: IFilterPropertyDTO) => {
  let urlProperties = `/properties/actives`;
  if (data.propertyTypeId) {
    urlProperties = `/properties/actives?propertyTypeId=${data.propertyTypeId}`;
  }
  if (data.maxPrice && data.minPrice) {
    urlProperties +=
      urlProperties + `?maxPrice=${data.maxPrice}? minPrice=${data.minPrice}`;
  }
  try {
    const response = await api.get(urlProperties);
    return response.data.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

const getcontrats = async (clientId: number) => {
  try {
    const contracts = await api.get(`contracts/all/?clientId=${clientId}`);
    return contracts.data.data;
  } catch (error) {
    console.log(error);
  }
};
export {
  getProperties,
  getProperty,
  getcontrats,
  getReserves,
  searchProperties,
};
