import "./style/index.css";
import Rent from "../../assets/rent.svg";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { addUser } from "../../services/post";
import { ICreateUserDto } from "../../models/dtos/ICreateUserDto";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const onSubmit = async (registerDate: ICreateUserDto) => {
    try {
      const response = await addUser(registerDate);
      if (response.status == 200) {
        toast.success("Corretor cadastrado com sucesso");
      }
      navigate("/login");
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Requerido")
      .min(6, "Deve ter no minimo 6 Digitos"),
    lastname: Yup.string()
      .required("Requerido")
      .min(6, "Deve ter no minimo 6 Digitos"),
    password: Yup.string()
      .required("Requerido")
      .min(8, "Deve ter no minimo 6 Digitos"),
    email: Yup.string()
      .email("Não é Email")
      .required("Requerido")
      .min(6, "Deve ter no minimo 6 Digitos"),
    province: Yup.string()
      .required("Requerido")
      .min(2, "Deve ter no minimo 6 Digitos"),
    county: Yup.string()
      .required("Requerido")
      .min(2, "Deve ter no minimo 6 Digitos"),
    district: Yup.string()
      .required("Requerido")
      .min(2, "Deve ter no minimo 6 Digitos"),
    street: Yup.string()
      .required("Requerido")
      .min(2, "Deve ter no minimo 6 Digitos"),
    residenceNumber: Yup.number().required("Requerido").min(2),
  });
  return (
    <>
      <div className="register-container">
        <div className="register-container-left">
          <img src={Rent} />
        </div>
        <div className="register-container-right">
          <div>
            <Formik
              validationSchema={validationSchema}
              onSubmit={(values) => onSubmit(values)}
              initialValues={{
                name: "",
                lastname: "",
                email: "",
                password: "",
                province: "",
                county: "",
                street: "",
                district: "",
                residenceNumber: 1,
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="register-form-container">
                    <div>
                      <label>Nome</label>
                      <Field placeholder="Digite o Nome" name="name" />
                      {errors.name && touched ? (
                        <p className="error-input">{errors.name}</p>
                      ) : null}
                    </div>
                    <div>
                      <label>Ultimo Nome</label>
                      <Field
                        placeholder="Digite o ULtimo Nome"
                        name="lastname"
                      />
                      {errors.lastname && touched ? (
                        <p className="error-input">{errors.lastname}</p>
                      ) : null}
                    </div>
                    <div>
                      <label>Email</label>
                      <Field placeholder="Digite o email" name="email" />
                      {errors.email && touched ? (
                        <p className="error-input">{errors.email}</p>
                      ) : null}
                    </div>
                    <div>
                      <label>Password</label>
                      <Field
                        placeholder="Digite o Password"
                        type="password"
                        name="password"
                      />
                      {errors.password && touched ? (
                        <p className="error-input">{errors.password}</p>
                      ) : null}
                    </div>
                    <div>
                      <label>Província</label>
                      <Field placeholder="Digite o Provincia" name="province" />
                      {errors.province && touched ? (
                        <p className="error-input">{errors.province}</p>
                      ) : null}
                    </div>
                    <div>
                      <label>Municipio</label>
                      <Field placeholder="Digite o Municipio" name="county" />
                      {errors.county && touched ? (
                        <p className="error-input">{errors.county}</p>
                      ) : null}
                    </div>
                    <div>
                      <label>Rua</label>
                      <Field placeholder="Digite o Rua" name="street" />
                      {errors.street && touched ? (
                        <p className="error-input">{errors.street}</p>
                      ) : null}
                    </div>
                    <div>
                      <label>Distrito</label>
                      <Field
                        placeholder="Digite o distrito de casa"
                        name="district"
                      />
                      {errors.district && touched ? (
                        <p className="error-input">{errors.district}</p>
                      ) : null}
                    </div>
                    <div>
                      <label>Numero de Casa</label>
                      <Field
                        type="number"
                        placeholder="Digite o Número de casa"
                        name="residenceNumber"
                      />
                      {errors.residenceNumber && touched ? (
                        <p className="error-input">{errors.residenceNumber}</p>
                      ) : null}
                    </div>
                  </div>
                  <button type="submit">Registrar</button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};
export { Register };
