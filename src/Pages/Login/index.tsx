import "./style/index.css";
import Rent from "../../assets/rent.svg";
import Rent2 from "../../assets/rent2.svg";
import Rent3 from "../../assets/rent3.png";
import { useAUth } from "../../provider/context/authContext";
import { Field, Form, Formik } from "formik";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { SignIn } = useAUth();
  const navigate = useNavigate();

  const onSubmit = (email: string, password: string) => {
    try {
      SignIn(email, password);
      navigate("/");
    } catch (error) {
      toast.error("Erro ao fazer login");
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-container-left">
          <img src={Rent} />
        </div>
        <div className="login-container-right">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={({ email, password }) => onSubmit(email, password)}
          >
            {({ errors, touched }) => (
              <Form>
                <label>Email</label>
                <Field placeholder="Digite o email" name="email" />
                {errors.email && touched ? (
                  <p className="error-input">{errors.email}</p>
                ) : null}
                <label>Password</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Digite o Password"
                />
                {errors.password && touched ? (
                  <p className="error-input">{errors.password}</p>
                ) : null}
                <p onClick={() => navigate("/register")}>
                  Tens uma conta? registrar
                </p>
                <button>Login</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
export { Login };
