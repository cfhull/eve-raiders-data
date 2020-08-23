import React from "react";
import BaseInput from "../BaseInput";
import styles from "./Input.module.scss";

const Input = ({ label, onChange, ...inputProps }) => (
  <BaseInput label={label} name={inputProps.name}>
    {(ref) => (
      <input
        ref={ref}
        className={styles.input}
        onChange={(e) => onChange(e.currentTarget.value)}
        {...inputProps}
      />
    )}
  </BaseInput>
);

export default Input;
