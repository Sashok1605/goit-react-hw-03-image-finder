import axios from "axios";

const API_KEY = "23761306-59ca6a0f0608395e39c81a3c2";

const apiService = ({ query = "", page = 1 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12`
    )
    .then(({ data }) => data.hits);
};

export default apiService;



