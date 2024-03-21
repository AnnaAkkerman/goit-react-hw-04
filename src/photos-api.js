import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchPhotosWithTopic = async (topic) => {
  const response = axios.get(
    `/search/photos?client_id=DQJPNRnR63DeOVQPqBKcOn0pz9BRaEy0qyue2b3e7G0&&query='${topic}'`
  );
  return response;
};
