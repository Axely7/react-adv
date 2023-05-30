import React from "react";
import "../styles/styles.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikYupPageComponents = () => {
  return (
    <div>
      <h1>Formik Components </h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
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
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component={"span"} />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component={"span"} />

            <label htmlFor="email">Email Adress</label>
            <Field name="email" type="text" />
            <ErrorMessage name="email" component={"span"} />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
