import { ErrorMessage, useField } from "formik";
import React from "react";

interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

export const MyCheckbox = ({ label, ...props }: Props) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  // Note: en el field viene el: onChange, onBlur, etc

  return (
    <>
      <label>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      <ErrorMessage name={props.name} component="span" />
      {/* {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )} */}
    </>
  );
};