import axios from "axios";

const baseURL = "https://everaiders.azurewebsites.net/";

const instance = axios.create({
  baseURL,
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export const getPlanetData = async () => {
  try {
    const { data } = await instance.get("/api/planets");
    return { data };
  } catch (e) {
    console.error(e);
    return { error: e };
  }
};
