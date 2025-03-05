import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "05f9d346ccdf978d062ab12b9aec165a",
    language: "ko-KR",
  },
});

export default instance;
