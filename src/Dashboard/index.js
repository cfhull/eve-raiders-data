import React, { useState, useMemo } from "react";
import { getResources } from "../api";
import ResourceSearch from "./ResourceSearch";
import Table from "../components/Table";
import NavBar from "./NavBar";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  const [selectedRoute, setSelectedRoute] = useState("resource-search");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = (values) => {
    setLoading(true);
    getResources(values).then(({ data }) => {
      setData(data);
      setLoading(false);
    });
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
        Cell: ({ value }) => value.replace(/([A-Z])/g, " $1").trim(),
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
        <Table
          data={data}
          columns={columns}
          placeholder="No data for selected filters"
        />
      </div>
      <header className={styles.header}>
        <ResourceSearch onSubmit={getData} loading={loading} />
      </header>
      <NavBar route={selectedRoute} setRoute={setSelectedRoute} />
    </div>
  );
};

export default Dashboard;
