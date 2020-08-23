import React from "react";
import FormRenderer from "../../components/FormRenderer";
import formConfig from "./formConfig";
import styles from "./AdvancedSearch.module.scss";

const AdvancedSearch = ({ onSubmit }) => (
  <div>
    <h1>Get Data</h1>
    <FormRenderer config={formConfig} onSubmit={(values) => alert(values)} />
  </div>
);

export default AdvancedSearch;
