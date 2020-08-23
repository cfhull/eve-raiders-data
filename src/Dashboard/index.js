import React, { useState } from "react";
import ResourceSearch from "./ResourceSearch";
import UnderDevelopment from "./UnderDevelopment";
import NavBar from "./NavBar";
import styles from "./Dashboard.module.scss";

const routes = {
  "resource-search": ResourceSearch,
  "*": UnderDevelopment,
};

const Dashboard = () => {
  const [selectedRoute, setSelectedRoute] = useState("resource-search");

  const Component = routes[selectedRoute] || routes["*"];

  return (
    <div className={styles.dashboard}>
      <NavBar route={selectedRoute} setRoute={setSelectedRoute} />
      <Component />
    </div>
  );
};

export default Dashboard;
