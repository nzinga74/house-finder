import City1 from "../../../assets/city1.jpg";
import City2 from "../../../assets/city2.jpg";
import City3 from "../../../assets/city3.jpg";
import City4 from "../../../assets/city4.jpg";
import City5 from "../../../assets/city5.jpg";
const Cities = () => {
  return (
    <>
      <div className="cities-container">
        <div className="container">
          <h3>Cidades</h3>
          <div className="galeria">
            <div className="single-galeria wg2 hg2">
              <img src={City1} />
            </div>
            <div className="single-galeria wg2 hg1">
              <img src={City2} />
            </div>
            <div className="single-galeria">
              <img src={City5} />
            </div>
            <div className="single-galeria">
              <img src={City4} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cities;
