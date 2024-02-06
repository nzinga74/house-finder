import { Header } from "../../components/Header";
import HouseItem from "../../components/HouseItem";
import "./style/index.css";
const Search = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="search-page-container">
          <div className="search-page-container-left">
            <h3>Filtros</h3>
            <div className="search-filter">
              <h4>Preços</h4>
              <select className="select-input">
                <option>100000kz - 200000kz</option>
                <option>200000kz - 300000kz</option>
                <option>400000kz - 500000kz</option>
              </select>
              <h4>Tipo de Casa</h4>
              <select className="select-input">
                <option>Moderno</option>
                <option>Luxuoso</option>
                <option>Simples</option>
              </select>
            </div>
          </div>
          <div className="search-page-container-right">
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
