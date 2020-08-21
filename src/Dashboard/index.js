import React, { useState, useEffect } from "react";
import { getPlanetData } from "../api";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPlanetData().then(setData);
  }, []);

  const { data: planetData = [], error } = data;

  const headers = Object.keys(planetData[0] || {});

  return (
    <div className={styles.dashboard}>
      {error && <div>{error}</div>}
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {planetData.map((item, i) => (
            <tr key={item.id}>
              {Object.keys(item).map((key) => (
                <td key={`${item.id}_${key}`}>{JSON.stringify(item[key])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
