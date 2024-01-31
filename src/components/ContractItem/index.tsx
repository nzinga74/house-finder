import "./style/index.css";
import Avatar from "../../assets/avatar.jpg";
const ContractItem = () => {
  return (
    <>
      <div className="contract-item">
        <div>
          <img src={Avatar} />
        </div>
        <div>
          <h4>EMPRESA LFG - CASA XPTO</h4>
          <p className="contract-date">12/20/2023</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            enim
          </p>
        </div>
      </div>
    </>
  );
};
export { ContractItem };
