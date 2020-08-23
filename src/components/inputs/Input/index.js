import React from "react";
import BaseInput from "../BaseInput";
import styles from "./Input.module.scss";

const Input = ({ className, label, onChange, ...inputProps }) => (
  <BaseInput className={className} label={label} name={inputProps.name}>
    {(ref) => (
      <input
        ref={ref}
        className={styles.input}
        onChange={(e) => onChange(e.currentTarget.value)}
        spellcheck="false"
        {...inputProps}
      />
    )}
  </BaseInput>
);

export default Input;
