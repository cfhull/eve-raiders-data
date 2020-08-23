import React, { useState, useMemo } from "react";
import { getResources } from "../api";
import ResourceSearch from "./ResourceSearch";
import Table from "../components/Table";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  const [data, setData] = useState([]);

  const getData = (values) => {
    getResources(values).then(({ data }) => setData(data));
  };

  const columns = useMemo(
    () => [
      {
        Header: "Jumps",
        accessor: "distanceFromBase",
      },
      {
        Header: "Planet Name",
        accessor: "planetName",
      },
      {
        Header: "Resource Type",
        accessor: "resourceType",
      },
      {
        Header: "Richness",
        accessor: "richness",
      },
    ],
    []
  );

  return (
    <div className={styles.dashboard}>
      <div className={styles.results}>
        <Table data={data} columns={columns} />
      </div>
      <header className={styles.header}>
        <ResourceSearch onSubmit={getData} />
      </header>
    </div>
  );
};

export default Dashboard;
