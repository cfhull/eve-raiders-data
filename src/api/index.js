import axios from "axios";

const baseURL = "https://everaiders.azurewebsites.net/";

const instance = axios.create({
  baseURL,
  timeout: 30000,
});

export const getPlanetData = () => instance.get("/api/planets");

export const getFilters = () => instance.get("/api/Planets/filters");

export const getResources = ({ resourceType, richness }) =>
  instance.get(
    `/api/Planets/resources/${resourceType.replace(/\s+/g, "")}/${richness}`
  );
