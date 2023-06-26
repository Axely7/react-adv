import React from "react";
import "../styles/styles.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
// import { MyTextInput } from "../components/MyTextInput";
// import { MySelect } from "../components/MySelect";
// import { MyCheckbox } from "../components/MyCheckbox";
import { MyCheckbox, MySelect, MyTextInput } from "../components";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikAbstract = () => {
  return (
    <div>
      <h1>Formik Abstract </h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("Debe ser un correo electrónico válido")
            .required("Requerido"),
          terms: Yup.boolean().oneOf([true], "Debe de aceptar las condiciones"),

          jobType: Yup.string()
            .notOneOf(["it-jr"], "Esta opción no es permitida.")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Axel"
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Jimenez"
            />

            <MyTextInput
              label="Email Address"
              name="email"
              placeholder="john@google.com"
              type="email"
            />

            <MySelect label="JobType" name="jobType">
              <option value={""}>Pick something</option>
              <option value={"developer"}>Developer</option>
              <option value={"designer"}>Designer</option>
              <option value={"it-senior"}>IT Senior</option>
              <option value={"it-jr"}>IT Jr.</option>
            </MySelect>

            <MyCheckbox label="Terms & Conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
