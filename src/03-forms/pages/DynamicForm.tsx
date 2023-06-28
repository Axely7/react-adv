import React from "react";
import formJson from "../data/custom-form.json";
import { Formik, Form } from "formik";
import { MySelect, MyTextInput } from "../components";

const initialValues: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;
}

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option value="">Select an Option</option>
                    {options?.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
                      </option>
                    ))}
                  </MySelect>
                );
              }

              throw new Error(`El type: ${type}, no es soportado.`);
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
