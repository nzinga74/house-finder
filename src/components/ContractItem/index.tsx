import "./style/index.css";
import Avatar from "../../assets/avatar.jpg";
interface IContractItemProps {
  name: string | undefined;
  description: string | undefined;
  date: Date | undefined;
  isSelected: boolean;
  onclick(): void;
}
const ContractItem = ({
  date,
  description,
  name,
  isSelected,
  onclick,
}: IContractItemProps) => {
  return (
    <>
      <div
        className={`contract-item ${isSelected ? "selected-contract" : ""}`}
        onClick={() => onclick()}
      >
        <div>
          <img src={Avatar} />
        </div>
        <div>
          <h4>{name}</h4>
          <p className="contract-date">{date?.toString()}</p>
          <p>{description?.substring(0, 40)}</p>
        </div>
      </div>
    </>
  );
};
export { ContractItem };
