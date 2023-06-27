import { Form, Formik } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";
import { MyTextInput } from "../components";

const validationSchema = Yup.object({
  name: Yup.string()
    .max(15, "Máximo de 15 carácteres")
    .min(2, "Mínimo de 2 carácteres")
    .required("Requerido"),
  email: Yup.string()
    .email("Debe der un correo electrónico válido")
    .required("Requerido"),
  password: Yup.string().required("Requerido").min(6, "Mínimo de 6 carácteres"),
  password2: Yup.string()
    .required("Requerido")
    .oneOf([Yup.ref("password"), ""], "Las contrseñas deben de coincidir"),
});

export const RegisterFormikPage = () => {
  const onSubmit = (props) => {
    console.log(props);
  };

  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          password2: "",
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label="Name" name="name" placeholder="Axel" />
            <MyTextInput
              label="Email"
              name="email"
              placeholder="correo@email.com"
            />
            <MyTextInput label="Password" name="password" />
            <MyTextInput label="Confirm Password" name="password2" />

            <button>Submit</button>
            <button onClick={handleReset}>Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
