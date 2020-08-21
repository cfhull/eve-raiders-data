import React, { useMemo } from "react";
import { useTable, useSortBy, useFilters } from "react-table";
import matchSorter from "match-sorter";
import styles from "./Table.module.css";

const richnessValues = {
  Perfect: 3,
  Medium: 2,
  Rich: 1,
  Poor: 0,
};

const fuzzyTextFilterFn = (rows, id, filterValue) =>
  matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = (val) => !val;

const Table = ({ data }) => {
  const filterTypes = useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

  const richnessSorter = useMemo(
    () => (a, b) =>
      Math.max(
        ...a.values.resourceRichness.split(", ").map((x) => richnessValues[x])
      ) >
      Math.max(
        ...b.values.resourceRichness.split(", ").map((x) => richnessValues[x])
      )
        ? 1
        : -1,
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
        filter: "fuzzyText",
      },
      {
        Header: "Name",
        accessor: "name",
        filter: "fuzzyText",
      },
      {
        Header: "Type",
        accessor: "type",
        filter: "fuzzyText",
      },
      {
        Header: "System",
        accessor: "system",
        filter: "fuzzyText",
      },
      {
        Header: "Constellation",
        accessor: "constellation",
        filter: "fuzzyText",
      },
      {
        Header: "Resources",
        accessor: "resources",
        filter: "fuzzyText",
        columns: [
          {
            id: "resourceType",
            Header: "Type",
            accessor: (row) => row.resources.map(({ type }) => type).join(", "),
            Cell: (v) => v.value.split(", ").map((x) => <div>{x}</div>),
            filter: "fuzzyText",
          },
          {
            id: "resourceRichness",
            Header: "Richness",
            accessor: (row) =>
              row.resources.map(({ richness }) => richness).join(", "),
            Cell: (v) => v.value.split(", ").map((x) => <div>{x}</div>),
            filter: "fuzzyText",
            sortType: richnessSorter,
          },
        ],
      },
    ],
    []
  );

  // Define a default UI for filtering
  function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
  }) {
    const count = preFilteredRows.length;

    return (
      <input
        value={filterValue || ""}
        onChange={(e) => {
          setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        }}
        placeholder={`Search ${count} records...`}
      />
    );
  }

  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      filterTypes,
    },
    useFilters,
    useSortBy
  );

  return (
    <>
      <table className={styles.table} {...getTableProps()}>
        <thead className={styles.headers}>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th
                  className={styles.headerCell}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr className={styles.row} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td className={styles.cell} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
