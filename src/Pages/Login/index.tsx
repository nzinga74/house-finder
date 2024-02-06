import "./style/index.css";
import Rent from "../../assets/rent.svg";
import Rent2 from "../../assets/rent2.svg";
import Rent3 from "../../assets/rent3.png";
const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-container-left">
          <img src={Rent} />
        </div>
        <div className="login-container-right">
          <form>
            <label>Email</label>
            <input placeholder="Digite o Numero" />
            <label>Password</label>
            <input placeholder="Digite o Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </>
  );
};
export { Login };
