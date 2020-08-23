import React, { useState } from "react";
import ResourceSearch from "./ResourceSearch";
import NavBar from "./NavBar";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  const [selectedRoute, setSelectedRoute] = useState("resource-search");

  return (
    <div className={styles.dashboard}>
      <NavBar route={selectedRoute} setRoute={setSelectedRoute} />
      {selectedRoute === "resource-search" && <ResourceSearch />}
    </div>
  );
};

export default Dashboard;
