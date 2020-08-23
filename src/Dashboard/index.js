import React, { useState, useMemo } from "react";
import { getResources } from "../api";
import ResourceSearch from "./ResourceSearch";
import Table from "../components/Table";
import NavBar from "./NavBar";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  const [selectedRoute, setSelectedRoute] = useState("resource-search");
  const [data, setData] = useState([]);

  const getData = (values) => {
    getResources(values).then(({ data }) => setData(data));
  };

  const columns = useMemo(
    () => [
      {
        Header: "Jumps",
        accessor: "distanceFromBase",
        style: {
          textAlign: "right",
        },
      },
      {
        Header: "Planet Name",
        accessor: "planetName",
        style: {
          textAlign: "left",
        },
      },
      {
        Header: "Resource Type",
        accessor: "resourceType",
        style: {
          textAlign: "left",
        },
      },
      {
        Header: "Richness",
        accessor: "richness",
        style: {
          textAlign: "left",
        },
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
      <NavBar route={selectedRoute} setRoute={setSelectedRoute} />
    </div>
  );
};

export default Dashboard;
