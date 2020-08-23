import React, { useState, useMemo } from "react";
import { getResources } from "../api";
import ResourceSearch from "./ResourceSearch";
import Table from "../Table";
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
      <header className={styles.header}>
        <ResourceSearch onSubmit={getData} />
      </header>
      <div className={styles.results}>
        <Table data={data} columns={columns} />
      </div>
    </div>
  );
};

export default Dashboard;

// const columns = useMemo(
//   () => [
//     {
//       Header: "ID",
//       accessor: "id",
//       filter: "fuzzyText",
//     },
//     {
//       Header: "Name",
//       accessor: "name",
//       filter: "fuzzyText",
//     },
//     {
//       Header: "Type",
//       accessor: "type",
//       filter: "fuzzyText",
//     },
//     {
//       Header: "System",
//       accessor: "system",
//       filter: "fuzzyText",
//     },
//     {
//       Header: "Constellation",
//       accessor: "constellation",
//     },
//     {
//       Header: "Resources",
//       accessor: "resources",
//       columns: [
//         {
//           id: "resourceType",
//           Header: "Type",
//           accessor: (row) => row.resources.map(({ type }) => type).join(", "),
//           Cell: (v) => v.value.split(", ").map((x) => <div>{x}</div>),
//         },
//         {
//           id: "resourceRichness",
//           Header: "Richness",
//           accessor: (row) =>
//             row.resources.map(({ richness }) => richness).join(", "),
//           Cell: (v) => v.value.split(", ").map((x) => <div>{x}</div>),
//         },
//       ],
//     },
//     {
//       Header: "Jumps from base (Jark)",
//       accessor: "distanceFromBase",
//     },
//   ],
//   []
// );
