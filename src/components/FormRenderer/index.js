import React, { useMemo } from "react";
import Button from "../inputs/Button";
import { Formik, Form, Field } from "formik";
import classNames from "classnames";
import Input from "../../components/inputs/Input";
import ComboBox from "../inputs/ComboBox";
import Select from "../inputs/Select";
import styles from "./FormRenderer.module.scss";

const inputTypes = {
  select: Select,
  combobox: ComboBox,
  "*": Input,
};

const FormRenderer = ({ config, onSubmit }) => {
  const initialValues = useMemo(
    () =>
      config.fields.reduce((acc, field) => {
        acc[field.name] = field.initialValue || "";
        return acc;
      }, {}),
    [config]
  );

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ setFieldValue }) => (
        <Form
          className={classNames(styles.form, {
            [styles.horizontal]: config.orientation === "horizontal",
          })}
        >
          {config.fields.map(({ name, label, type, ...inputProps }) => (
            <div className={styles.field} key={name}>
              <Field name={name}>
                {({ field }) => {
                  const Component = inputTypes[type] || inputTypes["*"];
                  return (
                    <Component
                      key={name}
                      label={label}
                      type={type}
                      {...field}
                      {...inputProps}
                      onChange={(value) => setFieldValue(name, value)}
                    />
                  );
                }}
              </Field>
            </div>
          ))}
          <Button className={styles.submitBtn} type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormRenderer;