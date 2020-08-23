import React, { useMemo } from "react";
import FormRenderer from "../../components/FormRenderer";
import { getResourceTypes, getRichnessTypes } from "../../api";
import { useQuery } from "react-query";
import styles from "./ResourceSearch.module.scss";

const ResourceSearch = ({ onSubmit }) => {
  const {
    loading: resourceTypesLoading,
    error: resourceTypesError,
    data: resourceTypesData,
  } = useQuery("resourceTypes", getResourceTypes);

  const {
    loading: richnessTypesLoading,
    error: richnessTypesError,
    data: richnessTypesData,
  } = useQuery("richnessTypes", getRichnessTypes);

  const resourceTypes = useMemo(
    () => (resourceTypesData ? resourceTypesData.data : []),
    [resourceTypesData]
  );

  const resourceTypesOptions = useMemo(
    () => [
      ...resourceTypes.map((type) => type.replace(/([A-Z])/g, " $1").trim()),
    ],
    [resourceTypes]
  );

  const richnessTypes = useMemo(
    () => (richnessTypesData ? richnessTypesData.data : []),
    [richnessTypesData]
  );

  const richnessTypesOptions = useMemo(
    () => [
      ...richnessTypes.map((type) => type.replace(/([A-Z])/g, " $1").trim()),
    ],
    [richnessTypes]
  );

  if (resourceTypesLoading || richnessTypesLoading) return "Loading...";

  if (resourceTypesError || richnessTypesError)
    return (
      "An error has occurred: " + resourceTypesError?.message ||
      richnessTypesError?.message
    );

  const formConfig = {
    className: styles.resourceSearchForm,
    fields: [
      {
        name: "resourceType",
        label: "Resource Type",
        placeholder: "resource type",
        type: "combobox",
        items: resourceTypesOptions,
        className: styles.resourceType,
      },
      {
        name: "richness",
        label: "Richness",
        placeholder: "Select a richness",
        items: richnessTypesOptions,
        type: "select",
        className: styles.richness,
      },
      // {
      //   name: "limit",
      //   label: "Limit",
      //   placeholder: "Select a limit",
      //   items: [20, 50, 100, 200],
      //   type: "select",
      // },
    ],
  };

  return (
    <div className={styles.resourceSearch}>
      <h1>Find Resources</h1>
      <FormRenderer config={formConfig} onSubmit={onSubmit} />
    </div>
  );
};

export default ResourceSearch;
