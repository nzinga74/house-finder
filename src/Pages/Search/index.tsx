import { toast } from "react-toastify";
import { Header } from "../../components/Header";
import HouseItem from "../../components/HouseItem";
import { searchProperties } from "../../services/gets";
import "./style/index.css";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { IProperty } from "../../models/property/IProperty";
const Search = () => {
  const [properties, setProperties] = useState<IProperty[]>([]);
  const onSubmit = async (values: any) => {
    const intervalPrice: string = values.price;
    let propertyTypeId = 1;
    const prices = intervalPrice.split("-");
    const minPrice = parseInt(prices[0]);
    const maxPrice = parseInt(prices[1]);
    if (values.propertyType == "Luxuoso") {
      propertyTypeId = 2;
    }
    try {
      const properties = await searchProperties({
        maxPrice,
        minPrice,
        propertyTypeId,
      });
      setProperties(properties);
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <Header />

      <div className="container">
        <div className="search-page-container">
          <div className="search-page-container-left">
            <h3>Filtros</h3>

            <Formik
              initialValues={{
                price: "",
                propertyType: "",
              }}
              onSubmit={(values) => {
                onSubmit(values);
              }}
            >
              <Form>
                <div className="search-filter">
                  <h4>Preços</h4>
                  <Field as="select" name="price" className="select-input">
                    <option>1000-2000</option>
                    <option>2001-3000</option>
                    <option>3001-4000</option>
                  </Field>
                  <h4>Tipo de Casa</h4>
                  <Field
                    as="select"
                    name="propertyType"
                    className="select-input"
                  >
                    <option>Moderno</option>
                    <option>Luxuoso</option>
                  </Field>
                </div>
                <button type="submit">Pesquisar</button>
              </Form>
            </Formik>
          </div>
          <div className="search-page-container-right">
            {properties.map((property) => (
              <HouseItem property={property} />
            ))}
            {/* <HouseItem />
            <HouseItem />
            <HouseItem /> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Search;
