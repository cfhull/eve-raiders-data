import React, { useState, useEffect } from "react";
import { getPlanetData } from "../api";
import Table from "../Table";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPlanetData().then(setData);
  }, []);

  const { data: planetData = [], error } = data;

  return (
    <div className={styles.dashboard}>
      {error && <div>{error}</div>}
      <Table data={planetData} />
    </div>
  );
};

export default Dashboard;
