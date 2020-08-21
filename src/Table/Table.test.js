import React from "react";
import { render, waitForElement, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Table from ".";

const mockData = [
  {
    id: 40000002,
    name: "Tanoo I",
    type: "Temperate",
    system: "Tanoo",
    constellation: "San Matar",
    resources: [
      {
        type: "Base Metals",
        richness: "Medium",
      },
      {
        type: "Condensates",
        richness: "Medium",
      },
      {
        type: "Heavy Water",
        richness: "Rich",
      },
    ],
  },
];

test("renders Dashhboard", async () => {
  const { getAllByText } = render(<Table data={mockData} />);
  const [planetName] = getAllByText(/Tanoo I/i);
  expect(planetName).toBeInTheDocument();
});
