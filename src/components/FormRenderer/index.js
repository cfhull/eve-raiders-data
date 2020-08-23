import React, { useMemo } from "react";
import classNames from "classnames";
import Button from "../inputs/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Input from "../../components/inputs/Input";
import ComboBox from "../inputs/ComboBox";
import Select from "../inputs/Select";
import { MdErrorOutline } from "react-icons/md";
import RingLoader from "@bit/davidhu2000.react-spinners.ring-loader";
import styles from "./FormRenderer.module.scss";

const inputTypes = {
  select: Select,
  combobox: ComboBox,
  "*": Input,
};

const FormRenderer = ({ config, onSubmit, loading }) => {
  const initialValues = useMemo(
    () =>
      config.fields.reduce((acc, field) => {
        acc[field.name] = field.initialValue || "";
        return acc;
      }, {}),
    [config]
  );

  return (
    <Formik
      validationSchema={config.validation}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ setFieldValue }) => (
        <Form className={classNames(styles.form, config.className)}>
          {config.fields.map(
            ({ className, name, label, type, ...inputProps }) => (
              <div className={classNames(styles.field, className)} key={name}>
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
                <ErrorMessage name={name}>
                  {(msg) => (
                    <div className={styles.error}>
                      <MdErrorOutline /> {msg}
                    </div>
                  )}
                </ErrorMessage>
              </div>
            )
          )}
          <Button className={styles.submitBtn} type="submit" disabled={loading}>
            <span style={{ visibility: loading ? "hidden" : "visible" }}>
              Search
            </span>
            {loading && (
              <div
                className={styles.loader}
                style={{
                  position: "absolute",
                  top: 10,
                  left: "calc(50% - 10px)",
                }}
              >
                <RingLoader
                  size={20}
                  color={getComputedStyle(
                    document.documentElement
                  ).getPropertyValue("--color-text-white")}
                />
              </div>
            )}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormRenderer;
