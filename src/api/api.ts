import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.params = {
  client_id: "eDaK3sBw5lbtt4JanWCJnV-fsODGYOf9lcqAT8btVC0",
  orientation: "landscape",
  per_page: 12,
};

export const findImages = async <T>(
  query: string,
  page: number
): Promise<T> => {
  const response = await axios.get(
    `/search/photos/?query=${query}&page=${page}`
  );
  return response.data;
};
